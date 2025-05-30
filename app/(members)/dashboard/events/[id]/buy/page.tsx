/* eslint-disable */
'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Replace with your API call
async function getEvent(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function TicketCheckoutPage({ params }: { params: { id: string } }) {
  const event = await getEvent(params.id);
  if (!event) return notFound();


  const [quantity, setQuantity] = useState(1);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  const ticketPrice = event.price || 100;
  const total = quantity * ticketPrice;

  const handlePurchase = () => {
    if ((!guestName || !guestEmail)) {
      alert('Please enter your name and email to receive your ticket.');
      return;
    }

  

    // Proceed to payment or DB save

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
        {format(new Date(event.startDate), 'MMMM d, yyyy · h:mm a')} → {format(new Date(event.endDate), 'h:mm a')}
      </p>
      <p className="text-sm text-gray-500 mb-4">📍 {event.location}</p>
      <p className="text-gray-800 mb-4">{event.description}</p>

      {/* Ticket Section */}
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

        {false && (
          <div className="mt-4 space-y-3">
            <div>
              <Label htmlFor="guestName" className="block text-sm font-medium">Your Name:</Label>
              <Input
                id="guestName"
                type="text"
                placeholder="Enter your name"
                className="mt-1"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
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
          </div>
        )}

        {true && (
          <p className="mt-4 text-sm text-gray-600">
            Logged in as <strong>Peter</strong> (maphanga1sp)
          </p>
        )}
      </div>

      {/* Total and Purchase */}
      <div className="flex items-center justify-between mb-4">
        <p className="font-semibold text-lg">Total: R{total}</p>
        <Button className="bg-rose-700 text-white hover:bg-rose-800" onClick={handlePurchase}>
          Reserve Tickets
        </Button>
      </div>

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
