import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

// Mock function — replace with your actual DB/API call
async function getEvent(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function EventDetailCard({id,thumbnail, title, startDate, endDate, location, fullAddress, description}) {
 

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />

      {/* Title + Details */}
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-600 mb-1">
        {format(new Date(startDate), 'MMMM d, yyyy · h:mm a')} → {format(new Date(endDate), 'h:mm a')}
      </p>
      <p className="text-sm text-gray-500 mb-2">📍 <strong>{location}</strong></p>

      {fullAddress && (
        <p className="text-sm text-gray-600 mb-4">🗺️ {fullAddress}</p>
      )}

      <p className="mb-6 text-gray-800">{description}</p>

      {/* Ticket Button */}
      <a href={`/events/${id}/buy`}>
        <Button className="bg-rose-700 text-white hover:bg-rose-800">🎟 Reserve a Ticket</Button>
      </a>

      {fullAddress && (
  <>
    <p className="text-sm text-gray-600 mb-4">🗺️ {fullAddress}</p>

    <div className="w-full h-64 mb-6">
      <iframe
        src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        className="rounded-xl border"
      />
    </div>
          </>
        )}

      
    </div>
    
  );
}
