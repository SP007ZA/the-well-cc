'use client'

import ProtectedRoute from "../_components/ProtectedRoute";
import PastEvents from "./_components/PastEvents";
import UpcomingEvents from "./_components/UpcomingEvents";



export default function MemberEventsPage() {
  return (
    <ProtectedRoute>
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold">Upcoming Events</h1>

      <UpcomingEvents member={true} />

    {false &&   <div className="border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">Past Events</h2>
        <PastEvents />
      </div>}
    </div>
    </ProtectedRoute>
  );
}
