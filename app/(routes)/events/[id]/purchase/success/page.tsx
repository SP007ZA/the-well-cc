/* eslint-disable */
"use client"

import { CreateGuestTicketPurchaseDocument, CreateGuestTicketPurchaseMutation, CreateGuestTicketPurchaseMutationVariables, DeleteGuestsDocument, DeleteGuestsMutation, DeleteGuestsMutationVariables } from "@/data/gql/graphql";
import { ID } from "@/data/id";
import { useMutation } from "@apollo/client";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
export default function TicketSuccessPage() {
   const searchParams = useSearchParams();
  const params = useParams();

    const id = params.id.toString();
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const email = searchParams.get('email');
  const cellNumber = searchParams.get('cellNumber');
  const qty = Number(searchParams.get('qty'))
  const price = Number(searchParams.get('price'))
  const trimmed = cellNumber.slice(1);

// Convert to number
const contact = Number(trimmed);


//const [CreateGuestTicketPurchase, data] = useMutation<CreateGuestTicketPurchaseMutation, CreateGuestTicketPurchaseMutationVariables>(CreateGuestTicketPurchaseDocument, {variables: {data:{ firstName, lastName, email, contact, ticket: { create: [{qty, price, status:'paid', event: {connect: {id}}}]} }}})

const [deelteGuest, {data}] = useMutation<DeleteGuestsMutation, DeleteGuestsMutationVariables>(DeleteGuestsDocument, {variables: {where: ID }})

 // CreateGuestTicketPurchase()

 useEffect(()=>{
deelteGuest()

 }, [data])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <CheckCircle className="text-rose-600 w-20 h-20 mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-600 text-center max-w-md mb-4">
        Thank {firstName} you for reserving your spot! Your payment was processed successfully.
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
