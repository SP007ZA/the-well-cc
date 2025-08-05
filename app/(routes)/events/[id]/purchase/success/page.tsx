/* eslint-disable */
"use client"
import { FindTicketBySessionIdDocument, FindTicketBySessionIdQuery, FindTicketBySessionIdQueryVariables, UpdateTicketStatusDocument, UpdateTicketStatusMutation, UpdateTicketStatusMutationVariables } from "@/data/gql/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import {  useSearchParams } from "next/navigation";
import { useEffect } from "react";



export default function TicketSuccessPage() {
   const searchParams = useSearchParams();
  //const params = useParams();

    
 const sessionId = decodeURIComponent(searchParams.get('sessionId') || '');
const firstName = decodeURIComponent(searchParams.get('firstName') || '');
const email = decodeURIComponent(searchParams.get('email') || '');

const {data} = useQuery<FindTicketBySessionIdQuery,FindTicketBySessionIdQueryVariables>(FindTicketBySessionIdDocument, {variables: {where: {sessionID: {equals: sessionId}}}})
const [updateTicketStatus] = useMutation<UpdateTicketStatusMutation, UpdateTicketStatusMutationVariables>(UpdateTicketStatusDocument)

 useEffect(()=>{

  if(data?.tickets[0].id) {
       updateTicketStatus({variables: {where:{id: data?.tickets[0].id},data:{status:'paid'}}})
  }

 

 }, [data])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <CheckCircle className="text-rose-600 w-20 h-20 mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-600 text-center max-w-md mb-4">
        Thank you <strong>{firstName.toUpperCase()}</strong> you for reserving your spot! Your payment was processed successfully.
      </p>
      <p className="text-md text-gray-700 text-center max-w-md mb-6">
        💌 A digital ticket with your unique QR code has been sent to your email <strong>{email}</strong>. Please check your inbox (and spam folder just in case).
      </p>
      <Link href="/events"  className="mt-4 inline-block bg-rose-600 text-white px-6 py-3 rounded-xl shadow hover:bg-rose-700 transition">
          Back to Events
      </Link>
    </div>
  );
}
