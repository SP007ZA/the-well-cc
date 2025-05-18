"use client";

import { Button } from "@/components/ui/button";
import { Heart, Users, Calendar, MessageCircle, Church, MapPin, CalendarCheck, Star, HeartHandshake } from "lucide-react";
export default function Home() {
  return (
    <div className="bg-gray-50  text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-100 to-rose-200 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Love. Build Faith. Grow Together.</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Welcome to The Well Christian Club – where like-minded singles connect through shared beliefs, spiritual growth, and meaningful relationships.
        </p>
        <Button className="mt-6 text-white bg-rose-700 hover:bg-rose-800 px-6 py-3 rounded-full text-lg">
          Join Now
        </Button>
      </section>

       {/* Offerings Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center">
            <Heart className="mx-auto mb-4 text-rose-700" size={32} />
            <h3 className="text-xl font-semibold mb-2">Matchmaking</h3>
            <p>Our personalized approach helps you find someone whose values and beliefs align with yours.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center">
            <Church className="mx-auto mb-4 text-rose-700" size={32} />
            <h3 className="text-xl font-semibold mb-2">Faith-Based Dating</h3>
            <p>Connect with Christians who share your love for God and your desire to build a Christ-centered relationship.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center">
            <Users className="mx-auto mb-4 text-rose-700" size={32} />
            <h3 className="text-xl font-semibold mb-2">Premarital Counseling</h3>
            <p>Access spiritual and practical guidance to prepare for a healthy, God-honoring marriage.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center">
            <Calendar className="mx-auto mb-4 text-rose-700" size={32} />
            <h3 className="text-xl font-semibold mb-2">Social Events</h3>
            <p>Join group activities and gatherings designed to foster community and organic connections.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center">
            <MessageCircle className="mx-auto mb-4 text-rose-700" size={32} />
            <h3 className="text-xl font-semibold mb-2">Exclusive WhatsApp Group</h3>
            <p>Premium and Platinum members get access to a private WhatsApp group for daily connection and encouragement.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}

<section id="how-it-works" className="bg-white py-20 px-6 scroll-mt-15 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-rose-700 mb-10">How It Works</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          At The Well Christian Club, we believe in God-led connections. Our platform blends faith, community, and guidance to help you form meaningful relationships.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-6 bg-rose-50 rounded-xl shadow text-center">
            <Users className="mx-auto text-rose-700 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-2">1. Create Your Profile</h3>
            <p>Share your story, values, interests, and what youre looking for in a Christ-centered relationship.</p>
          </div>

          <div className="p-6 bg-rose-50 rounded-xl shadow text-center">
            <HeartHandshake className="mx-auto text-rose-700 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-2">2. Connect with Matches</h3>
            <p>Explore profiles, get matched with like-minded believers, and start meaningful conversations.</p>
          </div>

          <div className="p-6 bg-rose-50 rounded-xl shadow text-center">
            <Church className="mx-auto text-rose-700 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-2">3. Grow Spiritually Together</h3>
            <p>Engage in devotionals, attend events, and access premarital counseling rooted in biblical values.</p>
          </div>

          <div className="p-6 bg-rose-50 rounded-xl shadow text-center">
            <Star className="mx-auto text-rose-700 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-2">4. Build Lasting Love</h3>
            <p>Whether its friendship or forever, we guide you to build strong, faith-driven relationships that glorify God.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h4 className="text-lg font-semibold mb-2">Start Your Journey Today</h4>
          <p className="mb-4">Sign up for free or choose a membership to unlock more ways to connect.</p>
          <a href="/signup" className="inline-block bg-rose-700 text-white px-6 py-2 rounded-full hover:bg-rose-800">
            Join The Well
          </a>
        </div>
      </div>
    </section>


       <section className="py-20 px-6 bg-rose-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-rose-700">Membership Plans</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">


        {/* Basic Plan */}
        <div className="bg-white p-8 rounded-2xl shadow border-t-4 border-gray-400">
          <h3 className="text-2xl font-bold mb-4">Basic</h3>
          <p className="text-xl font-semibold mb-2">Free</p>
          <ul className="text-sm mb-6 space-y-2">
            <li>✓ Access to social event announcements</li>
            <li>✗ No access to member profiles</li>
            <li>✗ No WhatsApp group access</li>
          </ul>
          <Button variant="outline">Sign Up</Button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white p-8 rounded-2xl shadow border-t-4 border-rose-700">
          <h3 className="text-2xl font-bold mb-4">Premium</h3>
          <p className="text-xl font-semibold mb-2">R80 / month</p>
          <ul className="text-sm mb-6 space-y-2">
            <li>✓ Access to all member profiles</li>
            <li>✓ Access to events with discount</li>
            <li>✓ Exclusive WhatsApp group access</li>
          </ul>
          <Button className="bg-rose-700 text-white hover:bg-rose-800">Subscribe</Button>
        </div>

        {/* Platinum Plan */}
        <div className="bg-white p-8 rounded-2xl shadow border-t-4 border-yellow-500">
          <h3 className="text-2xl font-bold mb-4">Platinum</h3>
          <p className="text-xl font-semibold mb-2">R550 / year</p>
          <ul className="text-sm mb-6 space-y-2">
            <li>✓ Full access to member profiles</li>
            <li>✓ discount on events</li>
            <li>✓ WhatsApp group access</li>
            <li>✓ Save 57% compared to monthly</li>
          </ul>
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Get Platinum</Button>
        </div>
      </div>
    </section>

    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-rose-700">Upcoming Events</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet, mingle, and grow your faith with our exciting in-person and online events tailored for Christian singles.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Event Card 1 */}
          <div className="bg-rose-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <CalendarCheck className="text-rose-700 mb-3" size={32} />
            <h3 className="text-xl font-semibold mb-1">Faith & Fellowship Night</h3>
            <p className="text-sm text-gray-500 mb-3">June 28, 2025 · 7:00 PM</p>
            <p className="mb-2">Join us for a night of worship, networking, and Christian encouragement. Open to all members!</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={16} /> The Grace Centre, Johannesburg
            </div>
            <Button className="mt-4 bg-rose-700 text-white hover:bg-rose-800 w-full">RSVP</Button>
          </div>

          {/* Event Card 2 */}
          <div className="bg-rose-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <Users className="text-rose-700 mb-3" size={32} />
            <h3 className="text-xl font-semibold mb-1">Singles Social Picnic</h3>
            <p className="text-sm text-gray-500 mb-3">July 13, 2025 · 1:00 PM</p>
            <p className="mb-2">Relax in nature and connect with other singles through games, prayer, and food in the park.</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={16} /> Zoo Lake Park, Johannesburg
            </div>
            <Button className="mt-4 bg-rose-700 text-white hover:bg-rose-800 w-full">Join Picnic</Button>
          </div>

          {/* Event Card 3 */}
          <div className="bg-rose-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <CalendarCheck className="text-rose-700 mb-3" size={32} />
            <h3 className="text-xl font-semibold mb-1">Online Matchmaking Workshop</h3>
            <p className="text-sm text-gray-500 mb-3">August 5, 2025 · 6:00 PM</p>
            <p className="mb-2">Get tips from Christian counselors and explore how to build lasting relationships on a biblical foundation.</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={16} /> Zoom Online
            </div>
            <Button className="mt-4 bg-rose-700 text-white hover:bg-rose-800 w-full">Register</Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h4 className="text-lg font-semibold mb-2">Don't miss out!</h4>
          <p className="mb-4">Premium and Platinum members enjoy exclusive access and discounts to all our events.</p>
          <Button className="bg-rose-700 text-white hover:bg-rose-800 px-6 py-2 rounded-full">Upgrade Membership</Button>
        </div>
      </div>
    </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Ready to find someone who shares your values?</h2>
        <p className="text-lg max-w-xl mx-auto">
          Sign up today and take the first step toward a Christ-centered relationship.
        </p>
        <Button className="mt-6 bg-rose-700 text-white hover:bg-rose-800 px-6 py-3 rounded-full text-lg">
          Create My Profile
        </Button>
      </section>
    </div>
  );
}
