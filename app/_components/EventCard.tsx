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
  thumbnail: string;
  member: boolean;
}) {
  const formattedStart = format(startDate, 'MMMM d, yyyy · h:mm a');
  const formattedEnd = format(endDate, 'MMMM d, yyyy · h:mm a');

  return (
    <Link
      href={member ? `/dashboard/events/${id}` : `/events/${id}`}
      className="block transition hover:scale-[1.02]"
    >
      <Card className="overflow-hidden shadow-sm h-full flex flex-col justify-between">
        {/* Thumbnail Full Width */}
        <div className="w-full h-48 relative">
          <Image
            src={thumbnail}
            alt={`${title} thumbnail`}
            fill
            className="object-cover"
          />
        </div>

        {/* Event Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-500 mb-1">{formattedStart} → {formattedEnd}</p>
          <p className="text-sm text-gray-500 mb-2">📍 {location}</p>

          <p className="text-sm text-gray-700 line-clamp-3 mb-4">
            {description}
          </p>

          <div className="mt-auto">
            <Button className="bg-rose-700 text-white hover:bg-rose-800 w-full">
              Reserve Spot
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}
