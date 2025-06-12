'use client';

import EventCard from "@/app/_components/EventCard";
import {
  GetActiveEventsDocument,
  GetActiveEventsQuery,
  GetActiveEventsQueryVariables,
} from "@/data/gql/graphql";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  thumbnail: string;
}

export default function UpcomingEvents({member}) {
  const { data } = useQuery<GetActiveEventsQuery, GetActiveEventsQueryVariables>(
    GetActiveEventsDocument,
    {
      variables: {
        where: {
          isActive: {
            equals: true,
          },
        },
      },
    }
  );

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    if (data?.events && data.events.length > 0) {
      const mappedEvents: Event[] = data.events.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        startDate: new Date(item.startDate),
        endDate: new Date(item.endDate),
        location: item.address?.city ?? "Unknown",
        thumbnail: item.eventThumbnail?.image?.publicUrlTransformed ?? "",
      }));

      setEvents(mappedEvents);
    }
  }, [data]);

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {events.map((event) => (
        <div key={event.id}>
          <EventCard
            id={event.id}
            title={event.title}
            description={event.description}
            startDate={event.startDate}
            endDate={event.endDate}
            location={event.location}
            thumbnail={event.thumbnail}
            member={member}
          />
        </div>
      ))}
    </div>
  );
}
