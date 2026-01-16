/* eslint-disable */
"use client";

import RandomScriptures from '@/app/_components/RandonScripture';
import Link from 'next/link';
import ContactSection from './contactSecction';
import { usePathname, useRouter } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (targetId: string) => {
    if (pathname === "/") {
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${targetId}`);
    }
  };

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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li>
              <button
                onClick={() => handleNavClick('how-it-works')}
                className="hover:underline text-left"
              >
                How It Works
              </button>
            </li>
            <li><Link href="/#membership-plans">Membership Plans</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/login">Sign In</Link></li>
          </ul>
        </div>

        {/* Safety & Legal */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-rose-700">Trust & Safety</h3>
          <ul className="space-y-1">
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/safety">Online Dating Safety Tips</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <ContactSection />
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-gray-500">
        <RandomScriptures />
        <p>&copy; {new Date().getFullYear()} The Well Christian Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
