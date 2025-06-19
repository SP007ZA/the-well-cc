/* eslint-disable */
"use client";

import RandomScriptures from '@/app/_components/RandonScripture'
import Link from 'next/link'
import React from 'react'
import ContactSection from './contactSecction'
import { usePathname } from 'next/navigation'

const Footer = () => {

  const pathname = usePathname();


  const handleNavClick = (targetId: string) => {
  if (pathname === "/") {
    // Already on homepage
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  } else {

    // Navigate to homepage with hash
    window.location.href = `/#${targetId}`;
  }
};
  return (
    <footer  className="bg-gray-100 text-gray-700 py-10 mt-20 border-t">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10 text-sm">

        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-rose-700">About The Well</h3>
          <p>
            The Well Christian Club is a faith-based platform helping singles grow spiritually and find meaningful relationships grounded in shared beliefs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-rose-700">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="#how-it-works" className="hover:underline">How It Works</Link></li>
            <li><Link href="/#membership-plans" className="hover:underline">Membership Plans</Link></li>
            <li><Link href="/events" className="hover:underline">Events</Link></li>
            <li><Link href="/login" className="hover:underline">Sign In</Link></li>
          </ul>
        </div>

        {/* Safety & Legal */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-rose-700">Trust & Safety</h3>
          <ul className="space-y-1">
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            <li><a href="/safety" className="hover:underline">Online Dating Safety Tips</a></li>
         {false &&  <li><a href="/report" className="hover:underline">Report a Concern</a></li>}
          </ul>
        </div>


        {/* Contact & Social */}
        <ContactSection/>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-gray-500">
        <RandomScriptures/>
        <p>&copy; {new Date().getFullYear()} The Well Christian Club. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer