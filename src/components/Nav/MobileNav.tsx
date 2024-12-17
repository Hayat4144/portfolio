'use client'
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from '../ui/button';


const MobileNav = () => {
    const [open, setOpen] = useState<boolean>(false)
    const onClick = () => setOpen(prevState => !prevState)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden" asChild>
                <Button className="" variant={"outline"} size={"icon"}>
                    <Menu size={17} />
                </Button>
            </SheetTrigger>
            <SheetContent onCloseAutoFocus={event => event.preventDefault()}>
                <ul className="space-y-2 my-5">
                    <li className="cursor-pointer" onClick={onClick}>
                        <a href="#home"> Home</a>
                    </li>
                    <li className="cursor-pointer" onClick={onClick}>
                        <a href="#about">About</a>
                    </li>
                    <li className="cursor-pointer" onClick={onClick}>
                        <a href="#skills">Skills</a>
                    </li>
                    <li className=" cursor-pointer" onClick={onClick}>
                        <a href="#projects">Project</a>
                    </li>
                    <li className=" cursor-pointer" onClick={onClick}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;
