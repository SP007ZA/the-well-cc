"use client"

import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function TicketSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <CheckCircle className="text-rose-600 w-20 h-20 mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-600 text-center max-w-md mb-4">
        Thank you for reserving your spot! Your payment was processed successfully.
      </p>
      <p className="text-md text-gray-700 text-center max-w-md mb-6">
        💌 A digital ticket with your unique QR code has been sent to your email. Please check your inbox (and spam folder just in case).
      </p>
      <Link href="/events"  className="mt-4 inline-block bg-rose-600 text-white px-6 py-3 rounded-xl shadow hover:bg-rose-700 transition">
          Back to Events
      </Link>
    </div>
  );
}
