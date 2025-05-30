import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events?filter=upcoming') // Build this API or use GraphQL
      .then(res => res.json())
      .then(setEvents);
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
       <Card className="overflow-hidden border shadow-sm p-6">
   
              <h3 className="text-xl font-semibold">Prayer & Praise Night</h3>
              <p className="text-sm text-gray-500 mb-2">Start  July 20, 2025 · 6:30 PM</p>
              <p className="text-sm text-gray-500 mb-2">End  July 20, 2025 · 6:30 PM</p>
              <p>Gather for an evening of worship, prayer, and community. Open to all members.</p>
              <button className="mt-4 bg-rose-700 text-white hover:bg-rose-800">RSVP</button>
           
            </Card>
      <div className="p-6 rounded-xl shadow bg-rose-50">
              <h3 className="text-xl font-semibold">Prayer & Praise Night</h3>
              <p className="text-sm text-gray-500 mb-2">Start  July 20, 2025 · 6:30 PM</p>
              <p className="text-sm text-gray-500 mb-2">End  July 20, 2025 · 6:30 PM</p>
              <p>Gather for an evening of worship, prayer, and community. Open to all members.</p>
              <button className="mt-4 bg-rose-700 text-white hover:bg-rose-800">RSVP</button>
            </div>
      <div className="p-6 rounded-xl shadow bg-rose-50">
              <h3 className="text-xl font-semibold">Prayer & Praise Night</h3>
              <p className="text-sm text-gray-500 mb-2">Start  July 20, 2025 · 6:30 PM</p>
              <p className="text-sm text-gray-500 mb-2">End  July 20, 2025 · 6:30 PM</p>
              <p>Gather for an evening of worship, prayer, and community. Open to all members.</p>
              <button className="mt-4 bg-rose-700 text-white hover:bg-rose-800">RSVP</button>
            </div>
      <div className="p-6 rounded-xl shadow bg-rose-50">
              <h3 className="text-xl font-semibold">Prayer & Praise Night</h3>
              <p className="text-sm text-gray-500 mb-2">Start  July 20, 2025 · 6:30 PM</p>
              <p className="text-sm text-gray-500 mb-2">End  July 20, 2025 · 6:30 PM</p>
              <p>Gather for an evening of worship, prayer, and community. Open to all members.</p>
              <button className="mt-4 bg-rose-700 text-white hover:bg-rose-800">RSVP</button>
            </div>
      <div className="p-6 rounded-xl shadow bg-rose-50">
              <h3 className="text-xl font-semibold">Prayer & Praise Night</h3>
              <p className="text-sm text-gray-500 mb-2">Start  July 20, 2025 · 6:30 PM</p>
              <p className="text-sm text-gray-500 mb-2">End  July 20, 2025 · 6:30 PM</p>
              <p>Gather for an evening of worship, prayer, and community. Open to all members.</p>
              <button className="mt-4 bg-rose-700 text-white hover:bg-rose-800">RSVP</button>
            </div>
    </div>
  );
}
