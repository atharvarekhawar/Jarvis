"use client";

import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { BotIcon } from "lucide-react";
import { useNavigation } from "@/lib/context/navigation";

export default function rHeader() {
  const { setIsMobileNavOpen, isMobileNavOpen } = useNavigation();

  return (
    <header className="border-b border-gray-200/50 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="md:hidden text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
          >
            {isMobileNavOpen ? (
              <Cross1Icon className="h-5 w-5" />
            ) : (
              <HamburgerMenuIcon className="h-5 w-5" />
            )}
          </Button>
          <div className="flex gap-1 font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            <p>Chat with Jarvis</p>
            <BotIcon className="h-6 w-6 text-gray-600" />
          </div>
        </div>
        <div className="flex items-center">
          <UserButton
            appearance={{
              elements: {
                avatarBox:
                  "h-8 w-8 ring-2 ring-gray-200/50 ring-offset-2 rounded-full transition-shadow hover:ring-gray-300/50",
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}
