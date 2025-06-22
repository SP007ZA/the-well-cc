/* eslint-disable */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { UpdateTicketDocument, UpdateTicketMutation, VerifyTicketDocument, VerifyTicketQuery, VerifyTicketQueryVariables } from "@/data/gql/graphql";



export default function TicketVerificationPage() {
  const [scannedToken, setScannedToken] = useState("");
  const [ticketInfo, setTicketInfo] = useState<any>(null);
  const [isCheckedIn, setIsCheckeIn] = useState(false)
  const [error, setError] = useState("");
  const scannerRef = useRef<HTMLDivElement>(null);
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);

  const [verifyTicket] = useLazyQuery<VerifyTicketQuery, VerifyTicketQueryVariables>(VerifyTicketDocument, { fetchPolicy: "network-only" });
  const [checkInTicket] = useMutation<UpdateTicketMutation, UpdateTicketMutation>(UpdateTicketDocument);

 useEffect(() => {
  const timeoutId = setTimeout(() => {
    navigator.mediaDevices?.getUserMedia({ video: true })
      .then(stream => {
        stream.getTracks().forEach(track => track.stop());

        Html5Qrcode.getCameras()
          .then(devices => {
            if (devices.length) {
              const html5QrCode = new Html5Qrcode("qr-reader");
              html5QrCodeRef.current = html5QrCode;

              html5QrCode.start(
                devices[0].id,
                { fps: 10, qrbox: { width: 250, height: 250 } },
                async (decodedText: string) => {
                  if (decodedText !== scannedToken) {
                    setScannedToken(decodedText);
                    setError("");
                    setTicketInfo(null);

                    try {
                      const { data } = await verifyTicket({ variables: { where: {ticketCode: {equals: decodedText}} } });
                    
                  
                      if (data?.tickets.length !== 0) {
                     

                   // console.log("DATA Insidecccc",data?.tickets[0].event.title)
                
                        const ticket = data?.tickets?.[0];

                        const ticketDetails = ticket ? {
                          user: {
                            fullName: ticket.user?.profile?.firstName ?? ticket.guest?.firstName ?? "Unknown",
                            email: ticket.user?.email ?? ticket.guest?.email ?? "Unknown"
                          },
                          event: {
                            title: ticket.event?.title ?? "No title",
                            startDate: ticket.event?.startDate ?? "",
                            location: [
                              ticket.event?.address?.town,
                              ticket.event?.address?.city,
                              ticket.event?.address?.province
                            ].filter(Boolean).join(", ")
                          }
                        } : null;

                       

                  


                        setTicketInfo(ticketDetails);
                        if (!data.tickets[0].isCheckedIn) {
                          //@ts-ignore
             const result = await checkInTicket({ variables: { where: {id: data.tickets[0].id}, data: {isCheckedIn: true}}});
                         setIsCheckeIn(result.data.updateTicket.isCheckedIn)
                     
                        }
                      } else {
                        setError("❌ Ticket not found or invalid.");
                      }
                    } catch (err) {
                      setError("❌ Error verifying ticket.");
                    }
                  }
                },
                (scanError) => {}
              );
            } else {
              setError("❌ No camera found.");
            }
          })
          .catch(err => {
            console.error("Camera fetch error:", err);
            setError("❌ Unable to access camera.");
          });
      })
      .catch(err => {
        console.error("UserMedia error:", err);
        setError("❌ Camera permission denied. Please allow camera access.");
      });
  }, 500); // Delay for DOM render

  return () => {
    clearTimeout(timeoutId);
    html5QrCodeRef.current?.stop().catch(() => {});
  };
}, []);


  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-start px-4 py-10">
      <h1 className="text-2xl font-bold text-rose-700 mb-4">🎟️ Ticket Verification</h1>

      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow border border-rose-200">
        <div id="qr-reader" ref={scannerRef} style={{ width: "100%" }} />
        <p className="mt-2 text-center text-gray-600 text-sm">
          {scannedToken ? `Scanned Token: ${scannedToken}` : "Waiting for QR scan..."}
        </p>
      </div>

      {error && (
        <div className="mt-4 bg-red-100 text-red-700 px-4 py-2 rounded border border-red-300 max-w-md w-full">
          {error}
        </div>
      )}

      {ticketInfo && (
        <div className="mt-6 bg-green-100 text-green-700 border border-green-300 p-4 rounded w-full max-w-md">
          <h2 className="font-semibold mb-2">✅ Ticket Verified</h2>
          <p><strong>Name:</strong> {ticketInfo.user.fullName}</p>
          <p><strong>Email:</strong> {ticketInfo.user.email}</p>
          <p><strong>Event:</strong> {ticketInfo.event.title}</p>
          <p><strong>Date:</strong> {new Date(ticketInfo.event.startDate).toLocaleString()}</p>
          <p><strong>Location:</strong> {ticketInfo.event.location}</p>
          <p>
            <strong>Status:</strong>{" "}
            {isCheckedIn ? "Checked-in ✅" : "Not checked in ❌"}
          </p>
        </div>
      )}
    </div>
  );
}
