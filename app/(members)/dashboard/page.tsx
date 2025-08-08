/* eslint-disable */
'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import {  Bell, CalendarCheck, MessageCircle, User } from 'lucide-react'
import RandomScriptures from '@/app/_components/RandonScripture'
import ProtectedRoute from './_components/ProtectedRoute'

const features = [
  {
    title: 'Profile',
    icon: <User className="text-rose-700 w-6 h-6" />,
    description: 'View and edit your personal information, interests, and preferences.',
    link: '/dashboard/profiles'
  },
  {
    title: 'Events',
    icon: <CalendarCheck className="text-rose-700 w-6 h-6" />,
    description: 'Explore upcoming Christian events, RSVP, and view event details.',
    link: '/dashboard/events'
  },
  {
    title: 'Notifications',
    icon: <Bell className="text-rose-700 w-6 h-6" />,
    description: 'Stay updated with important alerts, messages, and announcements.',
    link: '/dashboard/notifications'
  },
  {
    title: "Join WhatsApp Group",
  icon: <MessageCircle className="text-rose-700 w-6 h-6" />,
  description: "Connect instantly with The Well CC Christian Dating App community on WhatsApp.",
  link: "https://chat.whatsapp.com/C3IC7oaARM3EnPaB9YPOWU?mode=ac_t", // Replace with your real group link
  },
 /* {
    title: 'Chats',
    icon: <MessageSquare className="text-rose-700 w-6 h-6" />,
    description: 'Connect and message with other members who share your faith journey.',
    link: '/dashboard/chat'
  } */
]



const Dashboard = () => {


  return (
    <ProtectedRoute>
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-rose-700">Welcome to Your Dashboard</h1>
      <p className="text-muted-foreground text-sm max-w-lg">
        Access your profile, discover upcoming events, stay informed with notifications, and chat with fellow believers.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {features.map((feature) => (
          <Link href={feature.link} key={feature.title} className="transition hover:scale-[1.02]">
            <Card className="p-4 border border-rose-200 shadow-md">
              <CardContent className="flex gap-4 items-center">
                <div className="p-2 bg-rose-100 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-rose-800">{feature.title}</h2>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-rose-50 p-4 rounded-xl mt-6 border border-rose-200 shadow-sm">
       <RandomScriptures/>
      </div>
    </div>
    </ProtectedRoute>
  )
}

export default Dashboard
