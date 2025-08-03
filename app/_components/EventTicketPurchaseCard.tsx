/* eslint-disable */
'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateGuestTicketPurchaseDocument, CreateGuestTicketPurchaseMutation, CreateGuestTicketPurchaseMutationVariables, CreateUserMutationVariables, CreateUserTicketDocument, CreateUserTicketMutation, CreateUserTicketMutationVariables, FindGuestByEmailDocument, FindGuestByEmailQuery, FindGuestByEmailQueryVariables, UpdateGuestCreateTicketDocument, UpdateGuestCreateTicketMutation, UpdateGuestCreateTicketMutationVariables } from "@/data/gql/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { format } from "date-fns";
import { useEffect, useState } from "react";


export default function EventPruchaseCard ({firstName, lastName, email, cellNumber, id, price, thumbnail, description, startDate, endDate, fullAddress, title, member}) {
     const [quantity, setQuantity] = useState(1);
     const [guestNameFirst, setGuestNameFirst] = useState('');
     const [guestNameLast, setGuestNameLast] = useState('');
     const [guestEmail, setGuestEmail] = useState('');
     const [guestTel, setGuestTel] = useState('');
     const [formError, setFormError] = useState('');

     const[sessionID, setSessionID] = useState<any>()
    

     const [loading, setLoading] = useState(false)


const sessionId = crypto.randomUUID();
      const total = quantity * price;
      const phrase = "the_well_cc_payment_testing"

      const [CreateGuestTicketPurchase] = useMutation<CreateGuestTicketPurchaseMutation, CreateGuestTicketPurchaseMutationVariables>(CreateGuestTicketPurchaseDocument, {variables: {data:{ firstName:guestNameFirst, lastName:guestNameLast, email:guestEmail, contact: Number(guestTel), ticket: { create: [{qty:quantity, price, sessionID: sessionID, event: {connect: {id}}}]} }}})
      const [CreateUserTicket] = useMutation<CreateUserTicketMutation, CreateUserTicketMutationVariables>(CreateUserTicketDocument, {variables: { where: {email: email}  ,data:{tickets: {create: [{qty:quantity, price, sessionID: sessionID, event: {connect: {id}}}]}}}})
      const {data} = useQuery<FindGuestByEmailQuery, FindGuestByEmailQueryVariables>(FindGuestByEmailDocument, {variables: { where: {email: {equals: guestEmail}}}})
      const [UpdateGuestCreateTicket] = useMutation<UpdateGuestCreateTicketMutation, UpdateGuestCreateTicketMutationVariables>(UpdateGuestCreateTicketDocument)
const myData = [];
// Merchant details
myData["merchant_id"] = "0391073";  //10023375 prod=> 0391073
myData["merchant_key"] = "6x4meqntny3of";  // 04afueikmam8r prod=> 6x4meqntny3of
myData["return_url"] =  member ? ` https://the-well-cc-x5jv-mzansionlinecvgmailcoms-projects.vercel.app/dashboard/events/${id}/purchase/success?sessionId=${sessionID}&firstName=${firstName}&email=${email}` :` https://the-well-cc-x5jv-mzansionlinecvgmailcoms-projects.vercel.app/events/${id}/purchase/success?sessionId=${sessionID}&firstName=${guestNameFirst}&email=${guestEmail}`;
myData["cancel_url"] = member ? `https://the-well-cc-x5jv-mzansionlinecvgmailcoms-projects.vercel.app/dashboard/events/${id}/purchase/cancel` : `https://the-well-cc-x5jv-mzansionlinecvgmailcoms-projects.vercel.app/events/${id}/purchase/cancel`;

// Buyer details
myData["name_first"] = member ? firstName : guestNameFirst;
myData["name_last"] = member ? lastName : guestNameLast;
myData["email_address"] = member ? email : guestEmail;
myData["cell_number"] = member ? `0${cellNumber}` : `0${guestTel}`;
// Transaction details
myData["m_payment_id"] = {id};
myData["amount"] = total.toString();
myData["item_name"] = {title};
myData["item_description"] = {description};

 useEffect(() => {
 setSessionID(sessionId)
},[])

  const handlePurchase = async (e: React.FormEvent) => {
  e.preventDefault(); // Prevent form submission
  setFormError('');

  const form = e.currentTarget as HTMLFormElement; 
  
  // Run guest validation if user is not a member
  if (!member) {
    if (!guestNameFirst || !guestNameLast || !guestEmail || !guestTel) {
      setFormError("Please fill in all the fields.");
      return;
    }

    if (!/^\d{9}$/.test(guestTel)) {
      setFormError("Cell number must be exactly 9 digits (without +27).");
      return;
    }
  }

  setLoading(true);

  try {
    if (!member) {
      //Find Guest by guestEmail.. 
      if(data.guests.length == 0) {      
      const response = await CreateGuestTicketPurchase();
      const createdTicketId = response.data?.createGuest.ticket[0]?.id;
      if (!createdTicketId) {
        setFormError("Something went wrong creating your ticket. Please try again.");
        return;
      } 
      } else {
        const guestId = data.guests[0].id
             const response = await UpdateGuestCreateTicket({variables: {where: {id: guestId}, data: {ticket: {create:  [{qty:quantity, price, sessionID: sessionID, event: {connect: {id}}}]}}}});
      const createdTicketId = response.data?.updateGuest.id;
      if (!createdTicketId) {
        setFormError("Something went wrong creating your ticket. Please try again.");
        return;
      }    
      }
      setTimeout(() => {
         setLoading(true);
      }, 500)

    }else {
        const response = await CreateUserTicket()
        const createdTicketId = response.data?.updateUser.id;

      
         if (!createdTicketId) {
        setFormError("Something went wrong creating your ticket. Please try again.");
        return; 
      }
       setTimeout(() => {
         setLoading(true);
      }, 500)
    }




    // Let the form post to PayFast
    form.submit(); 


  }catch (error) {
    console.error(error);
    setFormError("Failed to process the ticket. Please try again.");
  } finally {
    setLoading(false);
  } 


};

 

   

    return (
        <>
         {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      {/* Event Info */}
      <h1 className="text-2xl font-bold mb-1">{title}</h1>
      <p className="text-sm text-gray-600 mb-1">
        {format(new Date(startDate), 'MMMM d, yyyy · h:mm a')} → {format(new Date(endDate), 'h:mm a')}
      </p>
      <p className="text-sm text-gray-500 mb-4">📍 {fullAddress}</p>
      <p className="text-gray-800 mb-4">{description}</p>
      <form action="https://www.payfast.co.za/eng/process" method="post"  onSubmit={handlePurchase}>
            <input type="hidden" name="merchant_id" value={myData["merchant_id"]}/>
            <input type="hidden" name="merchant_key" value={myData["merchant_key"]}/>
            <input type="hidden" name="return_url" value={myData["return_url"]}/>
            <input type="hidden" name="cancel_url" value={myData["cancel_url"]}/>
            <input type="hidden" name="name_first" value={myData["name_first"]}/>
            <input type="hidden" name="name_last" value={myData["name_last"]}/>
            <input type="hidden" name="email_address" value={myData["email_address"]}/>
            <input type="hidden" name="cell_number" value={myData["cell_number"]}/>
            <input type="hidden" name="m_payment_id" value={myData["m_payment_id"]}/>
            <input type="hidden" name="amount" value={myData["amount"]}/>
            <input type="hidden" name="item_name" value={myData["item_name"]}/>
            <input type="hidden" name="item_description" value={myData["item_description"]}/>

      {/* Ticket Section */}
        <Card className="overflow-hidden border shadow-sm  p-4 mb-6">
          <p className="font-semibold text-lg">🎟 Ticket: R{price}</p>
          <Label className="mt-3 block text-sm font-medium">Quantity:</Label>
         <div className="flex items-center gap-2 mt-1 w-32">
  <button
    type="button"
    onClick={() => setQuantity(Math.max(quantity - 1, 1))}
    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
  >
    −
  </button>
  <span className="w-8 text-center">{quantity}</span>
  <button
    type="button"
    onClick={() => setQuantity(quantity + 1)}
    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
  >
    +
  </button>
</div>


          {!member && (
            <div className="mt-4 space-y-3">
              <div>
                <Label htmlFor="guestNameFirst">Your First Name:</Label>
                <Input
                  id="guestNameFirst"
                  type="text"
                  value={guestNameFirst}
                  onChange={(e) => setGuestNameFirst(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="guestNameLast">Your Last Name:</Label>
                <Input
                  id="guestNameLast"
                  type="text"
                  value={guestNameLast}
                  onChange={(e) => setGuestNameLast(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="guestEmail">Your Email:</Label>
                <Input
                  id="guestEmail"
                  type="email"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="guestTel">Your Cell Phone:</Label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-sm">🇿🇦 +27</span>
                  <Input
                    id="guestTel"
                    type="tel"
                    className="w-full pl-16"
                    value={guestTel}
                    onChange={(e) => setGuestTel(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {formError && (
            <p className="text-red-600 text-sm mt-2">{formError}</p>
          )}

          {member && (
            <p className="mt-4 text-sm text-gray-600">
              Logged in as <strong>{firstName}</strong> ({email})
            </p>
          )}
        </Card>

      {/* Total and Purchase */}
      <div className="flex items-center justify-between mb-4">
        <p className="font-semibold text-lg">Total: R{total}</p>
        <Button
            type="submit"
            className="bg-rose-700 text-white hover:bg-rose-800"
          >
            {loading ? 'Please Wait...' : 'Reserve Tickets'}
          </Button>
      </div>
       </form>

      {/* Disclaimer */}
      <div className="text-xs text-gray-500 border-t pt-4">
        <h2 className="font-semibold text-sm mb-2">Disclaimer</h2>
        <p>
          By purchasing a ticket, you agree to our event policy. Tickets are non-refundable except if the event is canceled.
          Please ensure your contact details are correct to receive your digital ticket.
        </p>
      </div>
        </>
    )
}