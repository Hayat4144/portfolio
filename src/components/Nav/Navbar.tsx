import React from "react";
import Image from "next/image";
import dynamic from 'next/dynamic'
const MobileNav = dynamic(() => import('@/components/Nav/MobileNav'))

export default function Navbar() {
    return (
        <nav className="flex items-center mx-5 md:mx-10 lg:mx-16 xl:mx-20 justify-between">
            <div>
                <Image src="/logo.jpeg" alt="logo" width={100} height={20} />
            </div>
            <div className="right-menu">
                <MobileNav />
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
