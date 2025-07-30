import { TypographyH1, } from "@/components/ui/heading";
import { Fragment } from "react";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects/Projects";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Contact from "@/components/Contact";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <Fragment>
            <main
                id="home"
                className="flex flex-col items-center py-10 md:py-16
             px-5 min-h-screen my-10"
            >
                <TypographyH1 className="text-center text-5xl md:text-6xl font-extrabold">Backend-Focused Full Stack Developer</TypographyH1>
                <p className="py-2 px-3 md:leading-7 text-center md:w-[45rem]">
                    I architect and deliver robust web applications, specializing in building powerful server-side solutions and seamless APIs. My passion lies in solving
                    complex challenges and applying best practices in scalable backend development.</p>

                <div className="my-5 space-x-4">
                    <Link href='#projects'
                        title="My Work"
                        className={`${cn(buttonVariants({ variant: "default" }))}`}>
                        View My Work
                    </Link>
                    <Link href={"resume.pdf"}
                        target="_blank"
                        className={`${cn(buttonVariants({ variant: "outline" }))}`}
                        rel="noopener noreferrer"
                        locale={"false"}
                        download
                    >
                        Download Resume
                    </Link>
                </div>
                <div className="absolute left-[50%] bottom-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    className="rounded-full animate-bounce"
                                    variant={"outline"}
                                    size={"icon"}
                                    asChild
                                >
                                    <a href="#about">
                                        <ArrowDown size={17} />
                                    </a>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Scroll</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </main>
            <About />
            <Skill />
            <Projects />
            <Contact />
        </Fragment>
    );
}
