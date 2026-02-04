/* eslint-disable */
"use client";

import UpcomingEvents from "@/app/(members)/dashboard/events/_components/UpcomingEvents";
import { Button } from "@/components/ui/button";
import { Heart, Users, Calendar, MessageCircle, Church, Star, HeartHandshake } from "lucide-react";
import Link from "next/link";
import ScrollToTop from "../_components/Menu/ScrollToTop";
import IsMembershipFormComplete from "@/app/(auth)/components/isMembershipFormComplete";
export default function Home() {
  return (
    <IsMembershipFormComplete>
    <div  className="bg-gray-50  text-gray-800">
      
      {/* Hero Section */}
      <section id="Home" className="bg-gradient-to-r from-rose-100 to-rose-200 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Companionship. Build Faith. Grow Together.</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Welcome to The Well Christian Club, a faith-based dating platform where Christian singles connect through shared beliefs, spiritual growth, and Christ-centered relationships.
        </p>
        <Link href={"/signup"}>
        <Button className="mt-6 text-white bg-rose-700 hover:bg-rose-800 px-6 py-3 rounded-full text-lg">
          Join Now
        </Button>
        </Link>
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
            <h3 className="text-xl font-semibold mb-2">Faith-Based Courting</h3>
            <p>Connect with Christians who share your love for God and your desire to build a Christ-centered relationship.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center">
            <Users className="mx-auto mb-4 text-rose-700" size={32} />
            <h3 className="text-xl font-semibold mb-2">Premarital Counseling for Christian Relationships</h3>
            <p>Access spiritual and practical guidance to prepare for a healthy, God-honoring marriage.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center">
            <Calendar className="mx-auto mb-4 text-rose-700" size={32} />
            <h3 className="text-xl font-semibold mb-2">Face to Face Social Events</h3>
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
            <h3 className="text-xl font-semibold mb-2">4. Building Lasting Companionship</h3>
            <p>Whether its friendship or forever, we guide you to build strong, faith-driven relationships that glorify God.</p>
          </div>
        </div>

        <div id="membership-plans" className="mt-16 text-center">
          <h4 className="text-lg font-semibold mb-2">Start Your Journey Today</h4>
          <p className="mb-4">Sign up for free or choose a membership to unlock more ways to connect.</p>
          <a href="/signup" className="inline-block bg-rose-700 text-white px-6 py-2 rounded-full hover:bg-rose-800">
            Join The Well
          </a>
        </div>
      </div>
    </section >


       <section  className="py-20 px-6 bg-rose-50">
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
           <Link href={"/signup"}>
          <Button variant="outline">Sign Up</Button>
          </Link>
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
           <Link href={"/signup"}>
          <Button className="bg-rose-700 text-white hover:bg-rose-800">Get Basic</Button>
          </Link>
        </div>

        {/* Platinum Plan */}
        <div className="bg-white p-8 rounded-2xl shadow border-t-4 border-yellow-500">
          <h3 className="text-2xl font-bold mb-4">Get Platinum</h3>
          <p className="text-xl font-semibold mb-2">R600 / year</p>
          <ul className="text-sm mb-6 space-y-2">
            <li>✓ Full access to member profiles</li>
            <li>✓ discount on events</li>
            <li>✓ WhatsApp group access</li>
            <li>✓ Save 37% compared to monthly</li>
          </ul>
           <Link href={"/signup"}>
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Get Platinum</Button>
          </Link>

        </div>
      </div>
    </section>

    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-rose-700">Upcoming Events</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet, mingle, and grow your faith with our exciting in-person and online events tailored for Christian singles.
        </p>

       
          {/* Event Card 1 */}
          <UpcomingEvents member={false}/>
        

        {/* Call to Action */}
         {false && <div className="text-center mt-16">
          <h4 className="text-lg font-semibold mb-2">Dont miss out!</h4>
          <p className="mb-4">Premium and Platinum members enjoy exclusive access and discounts to all our events.</p>
           <Link href={"/login?membership=upgrade"}>
          <Button className="bg-rose-700 text-white hover:bg-rose-800 px-6 py-2 rounded-full">Upgrade Membership</Button>
          </Link>
        </div>}
      </div>
    </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Ready to find someone who shares your values?</h2>
        <p className="text-lg max-w-xl mx-auto">
          Sign up today and take the first step toward a Christ-centered relationship.
        </p>
         <Link href={"/signup"}>
        <Button className="mt-6 bg-rose-700 text-white hover:bg-rose-800 px-6 py-3 rounded-full text-lg">
          Create My Profile
        </Button>
        </Link>
      </section>
    </div>
    </IsMembershipFormComplete>
  );
}
