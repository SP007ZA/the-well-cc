/* eslint-disable */
'use client';

import EventPruchaseCard from "@/app/_components/EventTicketPurchaseCard";
import { GetActiveEventsQueryVariables, GetEventDocument, GetEventQuery } from "@/data/gql/graphql";
import { extractLocation } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";



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

export default  function TicketCheckoutPage() {

 const params = useParams();
     const id = params?.id as string;

       const { data } = useQuery<GetEventQuery, GetActiveEventsQueryVariables>(

       
             GetEventDocument,
             {
               variables: {
                 where: {
           //@ts-ignore
                 id
                 },
               },
             }
           );

           const [event, setEvent] = useState<Event>();

           useEffect(() =>{
              if (data?.event) {
          const mappedEvent: Event = {
            id: data?.event.id,
            title: data?.event.title,
            description: data?.event.description,
            price: data?.event.price,
            startDate: new Date(data?.event.startDate),
            endDate: new Date(data?.event.endDate),
            location: extractLocation(data?.event.address.fullAddress ?? null).city  ?? "Unknown",
            thumbnail: data?.event.eventThumbnail?.image?.publicUrlTransformed ?? "",
            fullAdress: data?.event.address.fullAddress ?? "Unknown"
          };
            setEvent(mappedEvent);

        }
           },[data])


  return (
    <div className="max-w-3xl mx-auto p-6">
  { event?.id &&  <EventPruchaseCard firstName={''} lastName={''} email={''} cellNumber={0} id={event?.id} title={event?.title}description={event?.description} startDate={event?.startDate} endDate={event?.endDate} fullAddress={event?.fullAdress} thumbnail={event?.thumbnail} member={false} price={event?.price}  />}
    </div>
  );
}
