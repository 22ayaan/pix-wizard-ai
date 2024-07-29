"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/Wizard-cropped.png"
            alt="logo"
            width={60}
            height={28}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((navLink) => {
                const isActive = navLink.route === pathname;
                return (
                  <li
                    key={navLink.route}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-slate-600 text-white" : "text-gray-900"
                    }`}
                  >
                    <Link className="sidebar-link" href={navLink.route}>
                      <Image
                        src={navLink.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {navLink.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((navLink) => {
                const isActive = navLink.route === pathname;
                return (
                  <li
                    key={navLink.route}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-slate-600 text-white" : "text-gray-900"
                    }`}
                  >
                    <Link className="sidebar-link" href={navLink.route}>
                      <Image
                        src={navLink.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {navLink.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
