/* eslint-disable */
"use client";

import { ReactNode, useState, useEffect, useRef } from "react";
import {
  User,
  CalendarDays,
  Bell,
  Sun,
  Moon,
  Monitor
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useMutation, useQuery } from "@apollo/client";
import { GetUnreadNotificationCountDocument, GetUnreadNotificationCountQuery, GetUnreadNotificationCountQueryVariables, GetUserProfilePictureDocument, GetUserProfilePictureQuery, GetUserProfilePictureQueryVariables, SignOutDocument, SignOutMutation, SignOutMutationVariables } from "@/data/gql/graphql";
import { useUser } from "@/lib/utils";
import ProtectedRoute from "./_components/ProtectedRoute";


interface MemberDashboardLayoutProps {
  children?: ReactNode;
}

const navItems = [
  { key: "dashboard", icon: Monitor, label: "Dashboard", href: "/dashboard" },
  { key: "profile", icon: User, label: "Profiles", href: "/dashboard/profiles" },
  { key: "events", icon: CalendarDays, label: "Events", href: "/dashboard/events" },
  { key: "notifications", icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
 /* { key: "chat", icon: MessageCircle, label: "Chat", href: "/dashboard/chat" } */,
];

export default function MemberDashboardLayout({ children }: MemberDashboardLayoutProps) {
  const user = useUser()
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState<any>()
const dropdownRef = useRef<HTMLDivElement>(null);
const [signOut] = useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument)
const {data} = useQuery<GetUserProfilePictureQuery, GetUserProfilePictureQueryVariables>(GetUserProfilePictureDocument, {variables: {where: {id: user?.id}}})

const {data:count} = useQuery<GetUnreadNotificationCountQuery, GetUnreadNotificationCountQueryVariables>(GetUnreadNotificationCountDocument, {variables:{where: {isRead: {equals: false}, AND: [{user: {id: {equals:user?.id}}}]}}, pollInterval:30000})



    const handleSignOut =  () => {
        
       return signOut().then(data => {return  window.location.href = '/'}).catch(err => {return  window.location.href = '/'})
        
    }

  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    if (storedMode === "dark") setDarkMode(true);

    if (data?.user) {
      setProfilePicture(data?.user?.profile?.profilePicture?.publicUrlTransformed)
    }
  }, [data, count]);



  const toggleDark = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  const breadcrumbs = pathname
    .replace("/dashboard/", "")
    .split("/")
    .filter(Boolean)
    .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1));

  return (
    <ProtectedRoute>
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Sidebar for Desktop */}
        <aside className="hidden md:flex md:flex-col w-64 bg-rose-700 text-white p-4">
          <h2 className="text-lg font-bold mb-6">The Well CC</h2>
          <nav className="space-y-3">
            {navItems.map(({ key, icon: Icon, label, href }) => (
              <Link
                key={key}
                href={href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
                  pathname === href
                    ? "bg-white text-rose-700 font-semibold"
                    : "hover:bg-rose-600"
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Section */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex justify-between items-center px-6 py-4 shadow bg-rose-700 text-white">
            <div className="flex items-center gap-4">
             
              <h1 className="text-xl font-semibold">Member Area</h1>
              <div className="hidden md:flex text-sm space-x-2 ml-4 text-rose-200">
                {breadcrumbs.map((crumb, idx) => (
                  <span key={idx}>
                    {idx > 0 && " / "}
                    {crumb}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={toggleDark} aria-label="Toggle Dark Mode">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link href={`/dashboard/notifications`}>
               <button
      className="relative p-2 hover:bg-gray-100 rounded-full transition"
      aria-label="Notifications"
    >
     <Bell className="w-5 h-5 cursor-pointer" />
      {count?.notificationsCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
          {count?.notificationsCount}
        </span>
      )}
    </button>
    </Link>
              
              <div className="relative group" ref={dropdownRef}>
                <div
                    onClick={() => setMenuOpen((prev) => !prev)}
                   className="w-8 h-8 rounded-full overflow-hidden border-2 border-white cursor-pointer"
                  >
                    <Image
                     src={profilePicture || '/default-avatar.png'}
                      alt="User Avatar"
                      width={32}
                      height={32}
                    />
                  </div>
                  {menuOpen && (
                                <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg py-2 z-50 w-40">
                                  <Link href="/dashboard/edit-profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                   Edit My Profile
                                  </Link>
                               {false &&    <Link href="/dashboard/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    Settings
                                  </Link>}
                                  <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    Logout
                                  </button>
                                </div>
                              )}
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-grow p-4 overflow-y-auto bg-rose-50 dark:bg-gray-800">
            {children ?? <p className="text-center text-gray-500 dark:text-gray-300">No content available.</p>}
          </main>

          {/* Mobile Footer Navigation */}
          <footer className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 border-t shadow-inner flex justify-around py-2 z-50">
            {navItems.map(({ key, icon: Icon, label, href }) => (
              <Link
                key={key}
                href={href}
                className={`flex flex-col items-center text-sm ${
                  pathname === href
                    ? "text-rose-700 dark:text-rose-300 font-semibold"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                {label}
              </Link>
            ))}
          </footer>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
}
