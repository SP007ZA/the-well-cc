/* eslint-disable */
'use client'

import EventDetailCard from "@/app/_components/EventDetailCard";
import {  GetEventDocument, GetEventQuery, GetEventQueryVariables } from "@/data/gql/graphql";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';

interface Event {
  id: string;
  title: string;
  description: string;
  price: number,
  startDate: Date;
  endDate: Date;
  location: string;
  thumbnail: string;
  fullAdress: string 
}

 /* const event = {
    id: "123",
    title: "Prayer & Praise Night",
    description: "Gather for an evening of worship, prayer, and community. Open to all members.",
    startDate: new Date(),
    endDate: new Date(),
    location: "Kempton Park",
    thumbnail: '/members/praise_worship.jpg',
    fullAdress: "Swie Street Birch Acres Kempton Park"
  } */


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
            location: data?.event.address?.city ?? "Unknown",
            thumbnail: data?.event.eventThumbnail?.image?.publicUrlTransformed ?? "",
            fullAdress: data?.event.address.streetName + " " + data?.event.address.town + " " + data?.event.address.city + ", " + data?.event.address.province
          };
    
          setEvent(mappedEvent);
        }
      }, [data]);

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold">Events Details </h1>  
       { event?.id &&  <EventDetailCard id={event?.id} title={event?.title}description={event?.description} startDate={event?.startDate} endDate={event?.endDate} location={event?.location} thumbnail={event?.thumbnail} member={false} fullAddress={event?.fullAdress} />}
    </div>
  );
}
