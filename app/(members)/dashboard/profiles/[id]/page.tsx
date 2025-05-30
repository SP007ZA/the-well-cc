/* eslint-disable */
"use client"
import { use } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { useState } from "react"

const mockMembers:any = {
  u1: {
    id:1,
    name: "Lerato Molefe",
    photo: "/members/lerato.jpg",
    gallery: [
      "/members/lerato.jpg",
      "/members/lerato2.jpg",
      "/members/lerato3.jpg"
    ],
    location: "Soweto, Gauteng",
    bio: "Worship leader with a love for serving.",
    interests: ["Gospel music", "Youth ministry", "Cooking"],
  },
  u2: {
    id:2,
    name: "Sipho Dlamini",
    photo: "/members/sipho.jpg",
    gallery: [
      "/members/sipho.jpg",
      "/members/sipho2.jpg",
      "/members/sipho3.jpg"
    ],
    location: "Durban, KZN",
    bio: "Tech enthusiast and Sunday school volunteer.",
    interests: ["Coding", "Volunteering", "Basketball"],
  },
  u3: {
    id:3,
    name: "Nokuthula Mthembu",
    photo: "/members/nokuthula.jpg",
    gallery: [
      "/members/nokuthula.jpg",
      "/members/nokuthula2.jpg",
      "/members/nokuthula3.jpg"
    ],
    location: "Johannesburg, Gauteng",
    bio: "Tech enthusiast and Sunday school volunteer.",
    interests: ["Coding", "Volunteering", "Basketball"],
  },
}



export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params) // unwrap the async params

  const member = mockMembers[id]
   const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)


  if (!member) {
    return <div className="p-6 text-center text-gray-500">Member not found.</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="overflow-hidden shadow-md">
        <div className="relative cursor-pointer" onClick={() => { setOpen(true); setIndex(0) }}>
          <Image
            src={member.photo}
            alt={member.name}
            width={800}
            height={500}
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-rose-800">{member.name}</h2>
          <p className="text-gray-600 text-sm">📍 {member.location}</p>
          <p className="text-gray-700 text-base">{member.bio}</p>

          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Interests</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {member.interests.map((item:any, idx:any) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Gallery</h4>
            <div className="grid grid-cols-3 gap-2">
              {member.gallery.map((src:any, i:any) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Photo ${i + 1}`}
                  width={150}
                  height={100}
                  className="object-cover rounded cursor-pointer hover:opacity-80"
                  onClick={() => { setOpen(true); setIndex(i) }}
                />
              ))}
            </div>
          </div>

          <Link href={`/dashboard/chat/${member.id}`}>
            <Button className="mt-4 bg-rose-700 hover:bg-rose-800 text-white">
              Start Chat with {member.name}
            </Button>
          </Link>
        </div>
      </Card>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={member.gallery.map((src:any) => ({ src }))}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </div>
  )
}
