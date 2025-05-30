/* eslint-disable */
"use client";


import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, CalendarDays, MessageCircle, Wallet } from "lucide-react";
import Link from "next/link";

const notifications = [
  {
    id: 1,
    type: "event",
    icon: CalendarDays,
    title: "Upcoming Event: Couples Retreat",
    message: "Join us for a weekend of connection and renewal, May 31st - June 2nd.",
    date: "2025-05-20",
    actionText: "View Event",
    actionHref: "/dashboard/events",
  },
  {
    id: 2,
    type: "subscription",
    icon: Wallet,
    title: "Subscription Renewal Reminder",
    message: "Your membership subscription expires in 3 days. Please renew to stay connected.",
    date: "2025-05-19",
    actionText: "Renew Subscription",
    actionHref: "/dashboard/settings",
  },
  {
    id: 3,
    type: "message",
    icon: MessageCircle,
    title: "New Message from Thabiso",
    message: "Hey! I saw your profile and would love to connect. Let’s chat!",
    date: "2025-05-18",
    actionText: "Open Chat",
    actionHref: "/dashboard/chat",
  },
  {
    id: 4,
    type: "event",
    icon: CalendarDays,
    title: "Youth Worship Night This Friday",
    message: "Come worship and fellowship with the youth this Friday at 7PM.",
    date: "2025-05-17",
    actionText: "See Details",
    actionHref: "/dashboard/events",
  },
  {
    id: 5,
    type: "message",
    icon: MessageCircle,
    title: "New Message from Amanda",
    message: "Hi! Let’s connect — I enjoyed your interests!",
    date: "2025-05-17",
    actionText: "Reply Now",
    actionHref: "/dashboard/chat",
  },
];

export default function NotificationsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold text-rose-700 mb-4 flex items-center gap-2">
        <Bell className="w-6 h-6" /> Notifications
      </h1>

      {notifications.map(({ id, icon: Icon, title, message, date, actionText, actionHref }) => (
        <Card key={id} className="p-4 shadow-sm border border-rose-100">
          <div className="flex items-start gap-4">
            <Icon className="w-6 h-6 text-rose-600 mt-1" />
            <div className="flex-1 space-y-2">
              <div>
                <h3 className="text-base font-semibold text-rose-900">{title}</h3>
                <p className="text-sm text-gray-700">{message}</p>
                <p className="text-xs text-gray-400">{new Date(date).toLocaleDateString()}</p>
              </div>
              <Link href={actionHref}>
                <Button variant="outline" className="text-rose-700 border-rose-300 hover:bg-rose-50">
                  {actionText}
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
