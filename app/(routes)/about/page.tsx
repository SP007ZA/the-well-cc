/* eslint-disable */
'use client'

import { HeartHandshake, Users, CalendarHeart, BookOpenText } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import ScrollToTop from '../_components/Menu/ScrollToTop'

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
        <ScrollToTop />
      <h1 className="text-4xl font-bold text-rose-700 mb-4">About Us</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Welcome to <strong className="text-rose-700">The Well CC</strong> — a community where faith, love, and meaningful connection flourish.
      </p>

      <Separator className="mb-6" />

      <section className="grid gap-8 md:grid-cols-2">
        <Card className="border-rose-200">
          <CardContent className="p-6">
            <div className="flex items-center mb-4 text-rose-700">
              <HeartHandshake className="mr-3" />
              <h2 className="text-xl font-semibold">Who We Are</h2>
            </div>
            <p className="text-muted-foreground">
              Inspired by John 4, The Well CC is a Christ-centered space for believers to connect—through friendship, dating, events, or spiritual growth.
            </p>
          </CardContent>
        </Card>

        <Card className="border-rose-200">
          <CardContent className="p-6">
            <div className="flex items-center mb-4 text-rose-700">
              <Users className="mr-3" />
              <h2 className="text-xl font-semibold">What We Offer</h2>
            </div>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Faith-based matchmaking</li>
              <li>In-person and virtual events</li>
              <li>Premarital counselling & mentorship</li>
              <li>Devotionals, prayer walls, and groups</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-rose-200">
          <CardContent className="p-6">
            <div className="flex items-center mb-4 text-rose-700">
            <BookOpenText className="mr-3" />
              <h2 className="text-xl font-semibold">Our Values</h2>
            </div>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Christ at the center</li>
              <li>Authenticity and intentionality</li>
              <li>Accountability and growth</li>
              <li>Love rooted in biblical truth</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-rose-200">
          <CardContent className="p-6">
            <div className="flex items-center mb-4 text-rose-700">
              <CalendarHeart className="mr-3" />
              <h2 className="text-xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground">
              We envision a generation of God-honoring relationships, built on faith, guided by truth, and thriving in Christ-centered community.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-10" />

      <div className="text-center text-muted-foreground">
        <p className="text-lg italic">“Welcome to the well. There’s life here.”</p>
      </div>
    </div>
  )
}
