/* eslint-disable */
"use client";
import { Bell, CalendarDays, MessageCircle, Wallet } from "lucide-react";
import NotificationsCard from "@/app/_components/NotificationCard";
import { useQuery } from "@apollo/client";
import { GetUnreadNotificationsDocument, GetUnreadNotificationsQuery, GetUnreadNotificationsQueryVariables } from "@/data/gql/graphql";
import { useEffect } from "react";

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

 const {data, loading, error} = useQuery<GetUnreadNotificationsQuery, GetUnreadNotificationsQueryVariables>(GetUnreadNotificationsDocument, {variables: {where: {isRead: {equals: false}, AND: [{user:{id: {equals:"cmbbmfjf3000032ztrz1zyk3b" }}}]}}})

  

  useEffect(() =>{

  }, [data, loading])




  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold text-rose-700 mb-4 flex items-center gap-2">
        <Bell className="w-6 h-6" /> Notifications
      </h1>



      {data?.notifications.length === 0 ? (
        <div className="text-center text-gray-500 mt-8">
          <p className="text-lg">No notifications yet.</p>
        </div>
      ) :(
      
      
      data?.notifications.map(({ id, icon: Icon, title, content, createdAt, actionText, actionHref }) => (
       <NotificationsCard key={id} id={id} Icon={Icon} title={title} message={content} date={createdAt} actionText={actionText} actionHref={actionHref}/>
      )))}
    </div>
  );
}
