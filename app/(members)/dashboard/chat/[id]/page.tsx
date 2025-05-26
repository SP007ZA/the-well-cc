"use client";

import { use } from "react"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const mockProfiles:any = {
  "1": { name: "Thabiso Nkosi", avatar: "/avatars/thabiso.jpg" },
  "2": { name: "Amanda Dube", avatar: "/avatars/amanda.jpg" },
  "3": { name: "Sipho Mahlangu", avatar: "/avatars/sipho.jpg" },
};

const mockMessages = [
  { id: 1, sender: "you", text: "Hi! I enjoyed your profile." },
  { id: 2, sender: "them", text: "Thanks! I'd love to connect further." },
  { id: 3, sender: "you", text: "Hi! I enjoyed your profile." },
  { id: 4, sender: "them", text: "Thanks! I'd love to connect further." },
];

export default function ChatDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params) // unwrap the async params
  
  const profile = mockProfiles[id] || { name: "Unknown", avatar: "" };

  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: "you", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col min-h-screen">
      <div className="flex items-center gap-4 mb-4">
        <Link href="/dashboard/chat">
          <ArrowLeft className="w-5 h-5 text-rose-600" />
        </Link>
        <Avatar>
          <AvatarImage src={profile.avatar} />
          <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h2 className="text-lg font-semibold text-rose-800">{profile.name}</h2>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-sm px-4 py-2 rounded-lg ${
              msg.sender === "you" ? "ml-auto bg-rose-100" : "mr-auto bg-gray-100"
            }`}
          >
            <p className="text-sm text-gray-800">{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-auto">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={`Message ${profile.name}...`}
        />
        <Button onClick={handleSend} className="bg-rose-600 hover:bg-rose-700 text-white">
          Send
        </Button>
      </div>
    </div>
  );
}
