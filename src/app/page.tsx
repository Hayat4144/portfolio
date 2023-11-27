import { TypographyH3 } from "@/components/ui/heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Fragment } from "react";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <Fragment>
      <main
        className="flex flex-col items-center py-10 md:py-16
             px-5"
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
      </main>
      <About />
      <Skill />
      <Projects />
    </Fragment>
  );
}
