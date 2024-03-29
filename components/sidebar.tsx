"use client";

import  Link  from "next/link";
import  Image from 'next/image';  // Import the Image component from Next.js
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, SettingsIcon, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { FreeCounter } from "@/components/free-counter";

const montserrat=Montserrat({weight:"600", subsets:["latin"]}); 
const routes=[
  {
  label:"Dashboard",
  href:"/dashboard",
  color:"text-sky-500",
  icon:LayoutDashboard
 },
 {
  label:"Conversation",
  href:"/conversation",
  color:"text-violet-500",
  icon:MessageSquare
 },{
  label:"Image Generation",
  href:"/image",
  color:"text-pink-700",
  icon:ImageIcon
 },{
  label:"Video Generation",
  href:"/video",
  color:"text-orange-700",
  icon:VideoIcon
 },
 {
  label:"Music Genration",
  href:"/music",
  color:"text-Green-700",
  icon:MusicIcon
 },{
  label:"Code Generation",
  href:"/code",
  color:"text-emerald-500",
  icon:CodeIcon
 },
 {
  label:"Settings",
  href:"/settings",
  icon:SettingsIcon
 },

]
interface SidebarProps{
  apiLimitCount: number;
  isPro: boolean;
};
const Sidebar = ({
  apiLimitCount = 0,
  isPro = false
}:SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex-items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo1.png" />
          </div>
          <h1 className={cn ("text-2xl font-bold ",montserrat.className)}>Newton</h1>
        </Link>
        <div className="space-y-1">
          {
            routes.map(route=>(
              <Link key={route.href} href={route.href}
               className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
              pathname === route.href? "text-white bg-white/10":"text-zinc-400")}>
                <div className="flex items-center">
                  <route.icon className={cn("h-5 w-5 mr-5", route.color)}/>
                    {route.label}
                </div>
              </Link>
          ))
          }

        </div>
      </div>
      <FreeCounter 
        isPro={isPro}
        apiLimitCount={apiLimitCount} />
    </div>
  );
};

export default Sidebar;
