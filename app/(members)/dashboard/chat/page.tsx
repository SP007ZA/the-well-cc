/* eslint-disable */
"use client";
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Plus } from "lucide-react";
import Link from "next/link";
import ProtectedRoute from '../_components/ProtectedRoute';

const chatInbox = [
  // Example empty array. Replace with your actual chat data or fetch dynamically.
 /*  {
     id: "1",
     name: "Thabiso Nkosi",
    lastMessage: "Looking forward to meeting you!",
    timestamp: "2h ago",
   imageUrl: "/avatars/thabiso.jpg",
   },
   {
     id: "2",
     name: "Thabiso Nkosi",
    lastMessage: "Looking forward to meeting you!",
    timestamp: "2h ago",
   imageUrl: "/avatars/thabiso.jpg",
   },
   {
     id: "3",
     name: "Thabiso Nkosi",
    lastMessage: "Looking forward to meeting you!",
    timestamp: "2h ago",
   imageUrl: "/avatars/thabiso.jpg",
   },
   {
     id: "4",
     name: "Thabiso Nkosi",
    lastMessage: "Looking forward to meeting you!",
    timestamp: "2h ago",
   imageUrl: "/avatars/thabiso.jpg",
   } */
];

export default function ChatInboxPage() {
  return (
    <ProtectedRoute>
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-rose-700 flex items-center gap-2">
          <MessageCircle className="w-6 h-6" /> Chat Inbox
        </h1>
        <Link href="/dashboard/profiles">
          <Button variant="default" className="bg-rose-600 hover:bg-rose-700">
            <Plus className="w-4 h-4 mr-2" /> Start New Chat
          </Button>
        </Link>
      </div>

      {chatInbox.length === 0 ? (
        <div className="text-center text-gray-500 mt-8">
          <p className="text-lg">No messages yet.</p>
          <p className="text-sm">Browse profiles and start a conversation!</p>
        </div>
      ) : (
        chatInbox.map(({ id, name, lastMessage, timestamp, imageUrl }) => (
          <Link href={`/dashboard/chat/${id}`} key={id}>
            <Card className="p-4 flex items-center gap-4 mb-4 hover:bg-rose-50 cursor-pointer">
              <Avatar>
                <AvatarImage src={imageUrl} alt={name} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-semibold text-rose-800">{name}</p>
                <p className="text-sm text-gray-600 truncate">{lastMessage}</p>
              </div>
              <p className="text-xs text-gray-400 whitespace-nowrap">{timestamp}</p>
            </Card>
          </Link>
        ))
      )}
    </div>
    </ProtectedRoute>
  );
}
