"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AlignRight, ChevronDown, LogIn, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About Us",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Contact Us",
      path: "/contact-us",
    },
  ];
  const { user } = useKindeBrowserClient();
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Hello mobile menu!", isOpen);
  };

  return (
    <div className="border-gray-100 border-b shadow-md">
      <div className="h-[90px] flex items-center justify-between mx-4 md:mx-20">
        <div className="">
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              width={180}
              height={80}
              alt="Logo Image"
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-6">
          <div className="">
            <ul className="md:flex items-center gap-3 font-medium text-[16px] text-gray-500">
              {Menu &&
                Menu.map((item, index) => {
                  return (
                    <li
                      className={`${
                        item.path == pathname && "text-primary"
                      } hover:text-primary
                    cursor-pointer hover:scale-105
                    transition-all ease-in-out`}
                      key={index}
                    >
                      <Link href={item.path}>{item.name}</Link>
                    </li>
                  );
                })}

              {user ? (
                <li className="flex items-center p-1 border-gray-300 border">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center">
                      <span>
                        {user?.picture ? (
                          <Image
                            src={user?.picture}
                            alt="profile-image"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        ) : (
                          <Image
                            src={
                              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                            }
                            alt="profile-image"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        )}
                      </span>
                      <ChevronDown />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="mr-16">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link
                          href={"/my-booking"}
                          className="cursor-pointer
             hover:bg-slate-100 p-2 rounded-md"
                        >
                          My Booking
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuItem>
                        <LogoutLink>Log out</LogoutLink>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ) : (
                <>
                  <li className="border-gray-400 border p-2">
                    <LoginLink className="flex">Sign In</LoginLink>
                  </li>
                  <li className="border-gray-400 border p-2">
                    <RegisterLink> Sign up</RegisterLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* Drop down Menu */}

          {/* Drop Down Menu End */}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <AlignRight />
            {isOpen && (
              <div className="mt-4 bg-white shadow-lg absolute top-20 left-0 w-full z-50">
                <ul className="flex flex-col items-center gap-4 py-4">
                  {Menu.map((item, index) => (
                    <li
                      key={item.id}
                      className={`${
                        item.path == pathname && "text-primary"
                      } hover:text-primary
                    cursor-pointer hover:scale-105
                    transition-all ease-in-out`}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        key={index}
                        cla
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
