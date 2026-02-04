/* eslint-disable */
'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GetEventDocument, GetEventQuery, GetEventQueryVariables, GetUserPaymentInputDocument, GetUserPaymentInputQuery, GetUserPaymentInputQueryVariables } from '@/data/gql/graphql';
import { useParams } from 'next/navigation';
import EventPruchaseCard from '@/app/_components/EventTicketPurchaseCard';
import ProtectedRoute from '../../../_components/ProtectedRoute';
import {  useUser } from '@/lib/utils';
// Replace with your API call

/*const event = {
    price: 100,
    thumbnail: '/members/praise_worship.jpg',
    title: 'Praise & Worship',
    startDate: new Date(),
    endDate: new Date(),
    location: "Kempton Park",
    description: "Gather for an evening of worship, prayer, and community. Open to all members."

} */


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

interface UserData {
  firstName: string
  lastName: string
  email: string
  cellNumber: number
}

export default function TicketCheckoutPage() {
 
     const params = useParams();
    const id = params?.id as string;

    const user = useUser()
  
    const {data: userInfo} = useQuery<GetUserPaymentInputQuery, GetUserPaymentInputQueryVariables>(GetUserPaymentInputDocument, {variables: {where: {id: user?.id}}})
    
  
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
 const [userData, setUserData] = useState<UserData>()

      
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

        if(userInfo?.user) {
          const info:UserData = {
            firstName: userInfo?.user.profile.firstName,
            lastName: userInfo?.user.profile.lastName,
            email: userInfo?.user.email,
            cellNumber: userInfo?.user.profile?.cellNumber
          }

          setUserData(info)
        }
        }, [data, userInfo]);

  



  return (
    <ProtectedRoute>
    <div className="max-w-3xl mx-auto p-6">
     { event?.id && <EventPruchaseCard firstName={userData?.firstName || ''} lastName={userData?.lastName || ''} email={userData?.email || ''} cellNumber={userData?.cellNumber} id={event?.id} title={event?.title}description={event?.description} startDate={event?.startDate} endDate={event?.endDate} fullAddress={event?.fullAdress} thumbnail={event?.thumbnail} member={true} price={event?.price}/>}
    </div>
    </ProtectedRoute>
  );
}
