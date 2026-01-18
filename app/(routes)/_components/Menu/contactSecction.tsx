"use client";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Facebook,
  X
} from 'lucide-react'


export default function ContactSection() {
  return (
    <div id="contact" className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-bold mb-4 text-rose-700">Contact & Connect</h3>

      <ul className="space-y-3 text-muted-foreground">
        <li className="flex items-start">
          <Mail className="w-5 h-5 text-rose-600 mt-1 mr-3" />
          <a href="mailto:admin@thewellcc.co.za" className="hover:underline">
            admin@thewellcc.co.za
          </a>
        </li>
        <li className="flex items-start">
          <Phone className="w-5 h-5 text-rose-600 mt-1 mr-3" />
          <a href="tel:+27111234567" className="hover:underline">
            +27 69 143 2863
          </a>
        </li>
        <li className="flex items-start">
          <Globe className="w-5 h-5 text-rose-600 mt-1 mr-3" />
          <a href="https://www.thewellcc.co.za" className="hover:underline" target="_blank" rel="noopener noreferrer">
            www.thewellcc.co.za
          </a>
        </li>
        <li className="flex items-start">
          <MapPin className="w-5 h-5 text-rose-600 mt-1 mr-3" />
          <span>4th Floor TBE, 96 Rivonia Road, Sandton, 2196</span>
        </li>
      </ul>
      {/* Contact & Social */}
<div>


  {/* Social Media Icons */}
  <div className="flex justify-center md:justify-start gap-4 mt-4">
    <a
      href="https://www.facebook.com/DWAP947"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="text-gray-600 hover:text-blue-600 transition"
    >
      <Facebook size={22} />
    </a>

   <a
  href="https://x.com/dwap595?t=jknLK_lvGlXnuq0iYc8QVQ&s=09"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="X (formerly Twitter)"
  className="text-gray-600 hover:text-black transition"
>
  <X size={22} />
</a>

  </div>
</div>


     {false &&  <div className="mt-6">
        <label htmlFor="newsletter" className="block text-sm font-medium text-gray-700 mb-1">
          Subscribe to our newsletter
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            id="newsletter"
            type="email"
            placeholder="Your email"
            className="px-3 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
          />
          <button className="bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded">
            Subscribe
          </button>
        </div>
      </div>}
    </div>
  )
}
