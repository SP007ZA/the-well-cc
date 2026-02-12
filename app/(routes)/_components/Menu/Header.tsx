/* eslint-disable */
"use client";

import React, { useEffect, useState } from 'react'
import Link from "next/link";
import {  Menu, X } from "lucide-react";
import Image from 'next/image';
import {usePathname } from 'next/navigation';
import { useUser } from '@/lib/utils';
import { useMutation } from '@apollo/client';
import { SignOutDocument, SignOutMutation, SignOutMutationVariables } from '@/data/gql/graphql';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const user = useUser()
const pathname = usePathname();

const [signOut] = useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument)


useEffect(() => {


}, [user?.id])


    const handleSignOut =  () => {
        
       return signOut({fetchPolicy: "no-cache"}).then(() => {return  window.location.href = '/'}).catch(() => {return  window.location.href = '/'})
        
    }

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
    <header className="bg-white shadow-md sticky top-0 left-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex  items-center justify-between">
         <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo_well_cc.PNG"
          alt="The Well CC Logo"
          width={80}
          height={80}
          priority
        />
        <div className='flex flex-col'>
          <span className="text-xl font-bold text-gray-700">The Well CC</span>
           <span className="text-md  text-rose-700">CHRISTIAN CLUB | GENESIS 2:18</span>
        </div>
        
      </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="#how-it-works"
          onClick={() => handleNavClick('how-it-works')}
          >How It Works</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About Us</Link>
          <Link href="#contact"
          onClick={() => handleNavClick('contact')}
          >Contact</Link>
        </nav>

        {/* Auth buttons */}
        <div className="hidden md:flex gap-4">
          {user?.id === undefined ? <>
          <Link
            href="/signup"
            className="px-4 py-2 bg-rose-700 text-white rounded-md hover:bg-red-700"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 border border-rose-700 text-rose-700 rounded-md hover:bg-blue-50"
          >
            Login
          </Link></>  :  <Link
            href="/"
            onClick={handleSignOut}
            className="px-4 py-2 border border-rose-700 text-rose-700 rounded-md hover:bg-blue-50"
          >
            Logout
          </Link> }
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-4 border-t">
          <nav className="flex flex-col items-center gap-2 text-gray-700 font-medium">
            <Link href="/"
            onClick={() => setMenuOpen(false)}
            >Home</Link>
             <Link href="/#how-it-works"
             onClick={() => setMenuOpen(false)}
             >How It Works</Link>
          <Link href="/events"
          onClick={() => setMenuOpen(false)}
          >Events</Link>
            <Link href="/about"
            onClick={() => setMenuOpen(false)}
            >About Us</Link>
            <Link href="/#contact"
            onClick={() => setMenuOpen(false)}
            >Contact</Link>
          </nav>

         
          <div className="flex flex-col gap-2 pt-2">
             { user?.id === undefined ? <>
               <Link
              href="/signup"
              className="px-4 py-2 bg-rose-600 text-white rounded-md text-center"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 border border-rose-600 text-rose-600 rounded-md text-center"
            >
              Login
            </Link></> : <>
             <Link
              href="/"
              className="px-4 py-2 border border-rose-600 text-rose-600 rounded-md text-center"
               onClick={handleSignOut}
            >
              Logout
            </Link>
            </>}
          
          </div>
        </div>
      )}
    </header>
  )
}

export default Header