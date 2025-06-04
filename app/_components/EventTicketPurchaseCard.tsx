/* eslint-disable */
'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { useState } from "react";

export default function EventPruchaseCard ({firstName, lastName, email, cellNumber, id, price, thumbnail, description, startDate, endDate, fullAddress, title, member}) {
     const [quantity, setQuantity] = useState(1);
     const [guestNameFirst, setGuestNameFirst] = useState('');
     const [guestNameLast, setGuestNameLast] = useState('');
     const [guestEmail, setGuestEmail] = useState('');
       const [guestTel, setGuestTel] = useState('');
         const [formError, setFormError] = useState('');

      const total = quantity * price;
      const phrase = "the_well_cc_payment_testing"

const myData = [];
// Merchant details
myData["merchant_id"] = "10023375";
myData["merchant_key"] = "04afueikmam8r";
myData["return_url"] =  member ? "https://the-well-cc-x5jv-mzansionlinecvgmailcoms-projects.vercel.app/events/success" :` https://the-well-cc-x5jv-mzansionlinecvgmailcoms-projects.vercel.app/events/${id}/purchase/success?firstName=${guestNameFirst}&lastName=${guestNameLast}&email=${guestEmail}&cellNumber=${guestTel}&qty=${quantity}&price=${total}`;
myData["cancel_url"] = "https://the-well-cc-x5jv-mzansionlinecvgmailcoms-projects.vercel.app/events/cancel";

// Buyer details
myData["name_first"] = member ? firstName : guestNameFirst;
myData["name_last"] = member ? lastName : guestNameLast;
myData["email_address"] = member ? "msp@gmail.com" : guestEmail;
myData["cell_number"] = member ? `0${cellNumber}` : `0${guestTel}`;
// Transaction details
myData["m_payment_id"] = {id};
myData["amount"] = total.toString();
myData["item_name"] = {title};
myData["item_description"] = {description};

    const handlePurchase = (e: React.FormEvent) => {
    if (!member && !isGuestValid()) {
      e.preventDefault(); // Prevent form submission
      return;
    }

    // Proceed normally if valid
    console.log("Valid Purchase");
  };

   const isGuestValid = () => {
    if (!guestNameFirst || !guestNameLast || !guestEmail || !guestTel) {
      setFormError("Please fill in all fields.");
      return false;
    }

    if (!/^\d{9}$/.test(guestTel)) {
      setFormError("Phone number must be 9 digits (without +27).");
      return false;
    }

    setFormError(""); // Clear errors
    return true;
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
      <form action="https://sandbox.payfast.co.za/eng/process" method="post"  onSubmit={handlePurchase}>
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
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mt-1 block w-24 rounded border-gray-300 shadow-sm focus:ring-rose-600 focus:border-rose-600"
          >
            {[1, 2, 3, 4, 5].map((q) => (
              <option key={q} value={q}>{q}</option>
            ))}
          </select>

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
            Reserve Tickets
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