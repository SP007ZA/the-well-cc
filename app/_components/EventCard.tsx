/* eslint-disable */
import Link from 'next/link';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function EventCard({
  id,
  title,
  description,
  startDate,
  endDate,
  location,
  thumbnail,
  member
}: {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  thumbnail: string; // Image URL
  member: boolean
}) {
  const formattedStart = format(startDate, 'MMMM d, yyyy · h:mm a');
  const formattedEnd = format(endDate, 'MMMM d, yyyy · h:mm a');

  return (
         <>
              <Link
      href={member ? `/dashboard/events/${id}`  :`/events/${id}`}
      className="block bg-rose-50 rounded-xl overflow-hidden shadow hover:shadow-md transition hover:scale-[1.02]"
    >
        <Card className="overflow-hidden border shadow-sm">
                <div className="p-6">
       <Image
                    src={thumbnail}
                     alt={`${title} thumbnail`}
                    width={600} 
                    height={400}
                    className="w-full h-48 object-contain rounded-lg mb-4"
                  />
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-sm text-gray-500 mb-1">{formattedStart} → {formattedEnd}</p>
      <p className="text-sm text-gray-500 mb-2">📍 {location}</p>

      <p>{description}</p>

      <Button
       
        className="mt-4 bg-rose-700 text-white hover:bg-rose-800"
      >
        Reserve Spot
      </Button>
    </div>
    </Card>
    </Link>
         </>
  )
}
