/* eslint-disable */
'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useQuery } from '@apollo/client'
import { GetMemberUsersDocument, GetMemberUsersQuery, GetMemberUsersQueryVariables } from '@/data/gql/graphql'
import { useUser } from '@/lib/utils'


/*const members:any = [
  {
    id: "u1",
    name: "Lerato Molefe",
    photo: "/members/lerato.jpg",
    location: "Soweto, Gauteng",
    bio: "Worship leader with a love for serving.",
  },
  {
    id: "u2",
    name: "Sipho Dlamini",
    photo: "/members/sipho.jpg",
    location: "Durban, KZN",
    bio: "Tech enthusiast and Sunday school volunteer.",
  },
  {
    id: "u3",
    name: "Nokuthula Mthembu",
    photo: "/members/nokuthula.jpg",
    location: "Cape Town, Western Cape",
    bio: "Youth mentor passionate about outreach.",
  },
] */


const Profiles = () => {

  const {id} = useUser()
   //@ts-ignore
  const {data, loading} = useQuery<GetMemberUsersQuery, GetMemberUsersQueryVariables>(GetMemberUsersDocument, {variables: { where:{ profile:{publishProfile:{ equals:true }}, isProfile: {equals: true}, membership: {memberShipType:{not:{equals: 'Basic'}}}}}})

     const [memberProfiles, setMemberProfiles] = useState<any>([])

    

     useEffect(() => {

      if(data?.users.length !== 0) {
        const profiles = data?.users.map((item) => {

          return {
            id: item.profile.id,
            name: `${item.profile?.firstName} ${item.profile?.lastName}`,
            photo: item.profile?.profilePicture?.publicUrlTransformed,
            location: `${item.profile.address.city}, ${item.profile.address.province}`,
            bio: item.profile.bio

          }
        })
         setMemberProfiles(profiles)
      }

     
     }, [data, loading])


    return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-rose-700">Member Profiles</h1>
      <p className="text-muted-foreground text-sm">
        Browse profiles of fellow members. Click to view details.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {memberProfiles?.map((member:any) => (
          <Link
            href={`/dashboard/profiles/${member.id}`}
            key={member.id}
            className="transition hover:scale-[1.02]"
          >
            <Card className="overflow-hidden border shadow-sm">
              <Image
                src={member?.photo}
                alt={member?.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-rose-800">{member.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {member.location}
                </Badge>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Profiles