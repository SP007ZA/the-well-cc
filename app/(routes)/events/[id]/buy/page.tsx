/* eslint-disable */
'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { generateSignature } from '@/lib/utils';

// Replace with your API call

const event = {
    price: 100,
    thumbnail: '/members/praise_worship.jpg',
    title: 'Praise & Worship',
    startDate: new Date(),
    endDate: new Date(),
    location: "Kempton Park",
    description: "Gather for an evening of worship, prayer, and community. Open to all members."

}

export default  function TicketCheckoutPage() {

  const [quantity, setQuantity] = useState(1);
  const [guestNameFirst, setGuestNameFirst] = useState('');
  const [guestNameLast, setGuestNameLast] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestTel, setGuestTel] = useState('');

  const ticketPrice = event.price || 100;
  const total = quantity * ticketPrice;
const phrase = "the_well_cc_payment_testing"

 const myData = [];
// Merchant details
myData["merchant_id"] = "10023375";
myData["merchant_key"] = "04afueikmam8r";
myData["return_url"] = "https://the-well-cc-aivu.vercel.app/events/success";
myData["cancel_url"] = "https://the-well-cc-aivu.vercel.app/events/cancel";
myData["notify_url"] = "https://the-well-cc-aivu.vercel.app/paymentwebhook";
// Buyer details
myData["name_first"] = guestNameFirst;
myData["name_last"] = guestNameLast;
myData["email_address"] = guestEmail;
myData["cell_number"] = guestTel;
// Transaction details
myData["m_payment_id"] = "1234";
myData["amount"] = total.toString();
myData["item_name"] = "Praise & Worship";
myData["item_description"] = "Gather for an evening of worship, prayer, and community. Open to all members.";





  const handlePurchase = () => {
    if ( (!guestNameFirst || !guestNameLast || !guestEmail)) {
      alert('Please enter your name and email to receive your ticket.');
      return;
    }

    console.log("Ticket Info", myData)

    console.log("Security_String",  generateSignature(myData, phrase))

   

   
    // Proceed to payment or DB save
    console.log('Purchasing');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Thumbnail */}
      <img
        src={event.thumbnail}
        alt={event.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      {/* Event Info */}
      <h1 className="text-2xl font-bold mb-1">{event.title}</h1>
      <p className="text-sm text-gray-600 mb-1">
        {format(new Date(), 'MMMM d, yyyy · h:mm a')} → {format(new Date(), 'h:mm a')}
      </p>
      <p className="text-sm text-gray-500 mb-4">📍 {event.location}</p>
      <p className="text-gray-800 mb-4">{event.description}</p>
     <form action="https://sandbox.payfast.co.za/eng/process" method="post">
      <input type="hidden" name="merchant_id" value={myData["merchant_id"]}/>
      <input type="hidden" name="merchant_key" value={myData["merchant_key"]}/>
      <input type="hidden" name="return_url" value={myData["return_url"]}/>
      <input type="hidden" name="cancel_url" value={myData["cancel_url"]}/>
      <input type="hidden" name="notify_url" value={myData["notify_url"]}/>
      <input type="hidden" name="name_first" value={myData["name_first"]}/>
      <input type="hidden" name="name_last" value={myData["name_last"]}/>
      <input type="hidden" name="email_address" value={myData["email_address"]}/>
      <input type="hidden" name="cell_number" value={myData["cell_number"]}/>
      <input type="hidden" name="m_payment_id" value={myData["m_payment_id"]}/>
      <input type="hidden" name="amount" value={myData["amount"]}/>
      <input type="hidden" name="item_name" value={myData["item_name"]}/>
      <input type="hidden" name="item_description" value={myData["item_description"]}/>
      <input type="hidden" name="signature" value={generateSignature(myData, phrase)}/>
      
      
      <div className="bg-gray-50 border rounded-xl p-4 mb-6">
        <p className="font-semibold text-lg">🎟 Ticket: R{ticketPrice}</p>
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

        {true && (
          <div className="mt-4 space-y-3">
            <div>
              <Label htmlFor="guestNameFirst" className="block text-sm font-medium">Your First Name:</Label>
              <Input
                id="guestNameFirst"
                type="text"
                placeholder="Enter your name"
                className="mt-1"
                value={guestNameFirst}
                onChange={(e) => setGuestNameFirst(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="guestNameLast" className="block text-sm font-medium">Your Last Name:</Label>
              <Input
                id="guestNameLast"
                type="text"
                placeholder="Enter your last name"
                className="mt-1"
                value={guestNameLast}
                onChange={(e) => setGuestNameLast(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="guestEmail" className="block text-sm font-medium">Your Email:</Label>
              <Input
                id="guestEmail"
                type="email"
                placeholder="Enter email to receive your ticket"
                className="mt-1"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="guestEmail" className="block text-sm font-medium ">Your Cell Phone:</Label>
               <div className='relative'>
             <span className="absolute inset-y-0 left-3 flex items-center text-sm">🇿🇦 +27</span>
              <Input
                id="guestTel"
                type="tel"
                placeholder="Enter 9-digit number"
                className="w-full pl-16 border px-15 py-2 rounded"
                value={guestTel}
                onChange={(e) => setGuestTel(e.target.value)}
              />
              </div>
            </div>
          </div>
        )}

        {false && (
          <p className="mt-4 text-sm text-gray-600">
            Logged in as <strong>Peter</strong> ({"maphanga1sp@gmail.com"})
          </p>
        )}
      </div>

      {/* Total and Purchase */}
      <div className="flex items-center justify-between mb-4">
        <p className="font-semibold text-lg">Total: R{total}</p>
        <Button type='submit' className="bg-rose-700 text-white hover:bg-rose-800" onClick={handlePurchase}>
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
    </div>
  );
}
