import { TypographyH3 } from "@/components/ui/heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Fragment } from "react";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects/Projects";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Contact from "@/components/Contact";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <Fragment>
      <main
        id="home"
        className="flex flex-col items-center py-10 md:py-16
             px-5 min-h-screen"
      >
        <TypographyH3>Frontend , Backend & Full-stack Developer</TypographyH3>
        <p className="py-2 leading-7">
          I design and code beautifuly simple things and I love what I do.
        </p>

        <div className="my-5">
          <Avatar className="h-32 w-32 md:h-36 md:w-36">
            <AvatarImage src="http://github.com/hayat4144.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
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
