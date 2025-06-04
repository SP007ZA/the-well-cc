import RandomScriptures from '@/app/_components/RandonScripture'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-20 border-t">
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
            <li><Link href="/how-it-works" className="hover:underline">How It Works</Link></li>
            <li><Link href="/membership" className="hover:underline">Membership Plans</Link></li>
            <li><Link href="/events" className="hover:underline">Events</Link></li>
            <li><Link href="/login" className="hover:underline">Sign In</Link></li>
          </ul>
        </div>

        {/* Safety & Legal */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-rose-700">Trust & Safety</h3>
          <ul className="space-y-1">
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            <li><a href="/safety" className="hover:underline">Online Dating Safety Tips</a></li>
            <li><a href="/report" className="hover:underline">Report a Concern</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-rose-700">Contact & Connect</h3>
          <p>Email: <a href="mailto:admin@thewellcc.co.za" className="underline">admin@thewellcc.co.za</a></p>
          <p>PO Box 5536, CRESTA, 2118</p>
          <div className="mt-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-2 py-1 border rounded w-full mt-2"
            />
            <button className="mt-2 bg-rose-700 hover:bg-rose-800 text-white px-4 py-1 rounded">
              Subscribe
            </button>
          </div>
        </div>
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