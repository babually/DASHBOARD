'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Settings,
  Users,
  Home,
  Bell,
  Inbox,
  Menu,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = [
  { name: 'Overview', href: '/', icon: Home },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Messages', href: '/messages', icon: Inbox },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function DashboardNav() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-3 z-50 md:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Desktop Navigation */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
        {
          "-translate-x-full": !isMobileOpen, // Mobile closed
          "translate-x-0": isMobileOpen, // Mobile open
          "w-64": !isCollapsed, // Desktop expanded
          "w-16": isCollapsed, // Desktop collapsed
        }
      )}>
        <div className="flex h-full flex-col border-r bg-background">
          <div className="flex h-14 items-center justify-between border-b px-4">
            <span className={cn("font-semibold transition-opacity", {
              "opacity-0": isCollapsed,
              "opacity-100": !isCollapsed,
            })}>
              Dashboard
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>

          <nav className="flex-1 space-y-2 p-4">
            {links.map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === link.href ? "bg-accent" : "transparent",
                    {
                      "justify-center": isCollapsed,
                    }
                  )}
                >
                  <LinkIcon className={cn("h-4 w-4", {
                    "mr-2": !isCollapsed
                  })} />
                  <span className={cn("transition-opacity", {
                    "opacity-0 hidden": isCollapsed,
                    "opacity-100": !isCollapsed,
                  })}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}