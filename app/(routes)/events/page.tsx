/* eslint-disable */
"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { EventGallery } from "./_components/EventGallery";

import UpcomingEvents from "@/app/(members)/dashboard/events/_components/UpcomingEvents";


export default function EventsPage() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(true); // Simulate subscription status

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
      setIsSubscribed(true)
    }
  };
  

  return (
    <div className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-rose-700 mb-10">Events</h1>

        {/* Future Events */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
      

           <UpcomingEvents member={false}/>
     
          
        </section>

        {/* Past Events */}
    {false &&   <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Previous Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Event Video"
                className="w-full h-64"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Faith Conference 2024 Recap</h3>
                <p className="text-sm text-gray-600">A day of worship, guest speakers, and connection.</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow">
              <iframe
                src="https://www.youtube.com/embed/oHg5SJYRHA0"
                title="Event Video"
                className="w-full h-64"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Singles Brunch 2024</h3>
                <p className="text-sm text-gray-600">Great food, open hearts, and new connections.</p>
              </div>
            </div>
          </div>
        </section>}
         {/* Gallery section below events */}
      <EventGallery />

        {/* Comments Section */}
     {false &&    <section className="max-w-3xl mt-10 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Comments & Reflections</h2>

          {isSubscribed ? (
            <>
              <Textarea
                placeholder="Share your thoughts..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-4"
              />
              <Button onClick={handleCommentSubmit} className="bg-rose-700 text-white hover:bg-rose-800 mb-6">
                Post Comment
              </Button>
              <div className="space-y-4">
                {comments.map((comment, index) => (
                  <div key={index} className="p-4 bg-gray-100 rounded shadow">
                    <p>{comment}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
             <div className="text-center mt-16">
            <p className="text-gray-600 italic">Only subscribed members can comment. Please upgrade to participate.</p>
              <Button className="bg-rose-700 mt-5 text-white hover:bg-rose-800 px-6 py-2 rounded-full">Upgrade Membership</Button>
              </div>
          )}
        </section>}
      </div>
    </div>
  );
}
