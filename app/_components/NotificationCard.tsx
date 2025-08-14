/* eslint-disable */
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UpdateIsReadNotificationDocument, UpdateIsReadNotificationMutation, UpdateIsReadNotificationMutationVariables } from "@/data/gql/graphql";
import { useMutation } from "@apollo/client";
import { format } from "date-fns";
import * as Icons from "lucide-react"; // Import all icons
import Link from "next/link";



export default function NotificationsCard({ id, Icon, title, message, date, actionText, actionHref }) {


    const LucideIcon = Icons[Icon] 

    const [updateIsRead] = useMutation<UpdateIsReadNotificationMutation,UpdateIsReadNotificationMutationVariables>(UpdateIsReadNotificationDocument, {variables:{where: {id}, data: {isRead: true}}})
    return(
         <Card key={id} className="p-4 shadow-sm border border-rose-100">
          <div className="flex items-start gap-4">
            <LucideIcon className="w-6 h-6 text-rose-600 mt-1" />
            <div className="flex-1 space-y-2">
              <div>
                <h3 className="text-base font-semibold text-rose-900">{title}</h3>
                <p className="text-sm text-gray-700">{message}</p>
                <p className="text-xs text-gray-400">{format(new Date(date), 'MMMM d, yyyy · h:mm a')}</p>
              </div>
              <Link href={actionHref}>
                <Button variant="outline" onClick={() => updateIsRead()} className="text-rose-700 border-rose-300 hover:bg-rose-50">
                  {actionText}
                </Button>
              </Link>
            </div>
          </div>
        </Card>
    )
}