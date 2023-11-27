import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function About() {
  return (
    <section
      className="about mx-5 mb-10 md:grid md md:grid-cols-2
         md:place-items-center md:mx-auto md:w-[75%]"
      id="about"
    >
      <div className="w-full">
        <AspectRatio ratio={16 / 13}>
          <Image src="/images.png" alt="Photo" fill className="" />
        </AspectRatio>
      </div>
      <div className="text-justify">
        <p className="leading-7">
          Hello! I'm Hayat ilyas, a tech enthusiast skilled in building cool
          websites. I'm great at making things look awesome on the screen using
          React.js and creating the brains of the website with Node.js and
          Express.js.
        </p>
        <p className="leading-7 my-3">
          I'm not just about the flashy stuff; I'm a problem solver too! When
          things get tricky, I know how to find solutions fast. Plus, I'm really
          good at talking with people. Clear communication is my thing. I make
          sure everyone involved knows what's going on every step of the way.
        </p>
        <p className=" leading-7">
          Whether it's making a website look amazing, giving it a smart brain,
          or solving any hiccups along the way, I'm here to turn your ideas into
          a fantastic online reality! Let's chat and make something awesome
          together!
        </p>
        <div className="my-5 space-x-5">
          <Link
            href={"resume.pdf"}
            target="_blank"
            className={`${cn(buttonVariants({ variant: "default" }))}`}
            rel="noopener noreferrer"
            locale={false}
            download
          >
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
