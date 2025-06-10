"use client"

import ProtectedRoute from "@/app/(members)/dashboard/_components/ProtectedRoute";
import { XCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function TicketCancelPage() {
      const params = useParams();
  const id = params?.id as string;

  return (
    <ProtectedRoute>
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <XCircle className="text-rose-600 w-20 h-20 mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Cancelled</h1>
      <p className="text-lg text-gray-600 text-center max-w-md mb-4">
        It looks like your payment did not go through or was cancelled.
      </p>
      <p className="text-md text-gray-700 text-center max-w-md mb-6">
        If this was a mistake, do not worry — you can try again anytime to secure your spot at the event.
      </p>
      <Link href={`/dashboard/events/${id}/purchase`} className="mt-4 inline-block bg-rose-600 text-white px-6 py-3 rounded-xl shadow hover:bg-rose-700 transition">
          Back to Event 
      </Link>
    </div>
    </ProtectedRoute>
  );
}
