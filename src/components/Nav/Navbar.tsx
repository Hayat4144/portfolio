import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="flex items-center mx-5 md:mx-10 lg:mx-16 xl:mx-20 justify-between">
      <div>
        <Image src="/logo.jpeg" alt="logo" width={100} height={20} />
      </div>
      <div className="right-menu">
        <Sheet>
          <SheetTrigger className="md:hidden" asChild>
            <Button className="" variant={"outline"} size={"icon"}>
              <Menu size={17} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <ul className="space-y-2 my-5">
              <li className="hover:translate-x-2 cursor-pointer">
                <a href="#home"> Home</a>
              </li>
              <li className="hover:translate-x-2 cursor-pointer">
                <a href="#about">About</a>
              </li>
              <li className="hover:translate-x-2  cursor-pointer">
                <a href="#skills">Skills</a>
              </li>
              <li className="hover:translate-x-2 cursor-pointer">
                <a href="#projects">Project</a>
              </li>
              <li className="hover:translate-x-2 cursor-pointer">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
        <ul
          className="md:flex md:items-center md:space-x-5 space-y-2
                    md:space-y-0 hidden"
        >
          <li
            className="hover:-translate-y-2 cursor-pointer 
          ease-in-out delay-75"
          >
            <a href="#home">Home</a>
          </li>
          <li className="hover:-translate-y-2 cursor-pointer ease-in-out delay-75">
            <a href="#about">About</a>
          </li>
          <li className="hover:-translate-y-2 cursor-pointer ease-in-out delay-75">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:-translate-y-2 cursor-pointer ease-in-out delay-75">
            <a href="#projects">Project</a>
          </li>
          <li className="hover:-translate-y-2 cursor-pointer ease-in-out delay-75">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
