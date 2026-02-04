'use client'

import EventDetailCard from "@/app/_components/EventDetailCard";
import {  GetEventDocument, GetEventQuery, GetEventQueryVariables } from "@/data/gql/graphql";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import ProtectedRoute from "../../_components/ProtectedRoute";

interface Event {
  id: string;
  title: string;
  description: string;
  price: number,
  startDate: Date;
  endDate: Date;
  thumbnail: string;
  fullAdress: string 
}



export default function MemberEventsPage() {
    const params = useParams();
  const id = params?.id as string;

  

    const { data } = useQuery<GetEventQuery, GetEventQueryVariables>(
      GetEventDocument,
      {
        variables: {
          where: {
          id
          },
        },
      }
    );

      const [event, setEvent] = useState<Event>();
    
      useEffect(() => {
        if (data?.event) {
          const mappedEvent: Event = {
            id: data?.event.id,
            title: data?.event.title,
            description: data?.event.description,
            price: data?.event.price,
            startDate: new Date(data?.event.startDate),
            endDate: new Date(data?.event.endDate),
            thumbnail: data?.event.eventThumbnail?.image?.publicUrlTransformed ?? "",
            fullAdress: data?.event.address?.fullAddress ?? ""
          };
    
          setEvent(mappedEvent);
        }
      }, [data]);

  return (
    <ProtectedRoute>
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold">Events Details </h1>  
       { event?.id &&  <EventDetailCard id={event?.id} title={event?.title}description={event?.description} startDate={event?.startDate} endDate={event?.endDate} thumbnail={event?.thumbnail} member={true} fullAddress={event?.fullAdress} />}
    </div>
    </ProtectedRoute>
  );
}
