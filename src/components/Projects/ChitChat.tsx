import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Slider from "../Slider";
import { ChitChatImage } from "@/lib/constant";

export default function ChitChat() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 text-justify">
      <Slider images={ChitChatImage} />

      <Card>
        <CardHeader>
          <CardTitle>Chit-Chat</CardTitle>
          <CardDescription>A Featured Project</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Chit-Chat is a modern web application built with TypeScript,
            Next.js, MongoDB, Tailwind CSS, Node.js, and ShadcnUI. It offers a
            seamless chatting experience with advanced features such as
            authentication, live chat messaging, online/offline status, typing
            status, attachment support, and emoji support for both private and
            group chats.
          </p>
          <p className="my-2">
            This is chat app filled with lots of features such typing status,
            attachment support with most of the file type just
            png,webp,jpeg,jpg, docs,pdf etc. Online and offline status of the
            user,private and group chat , dark mode support. Real-time messaging
            for instant communication between users.
          </p>

          <p className="my-2 text-muted-foreground text-sm">
            React.js | Node.js | Express.js | Tailwind CSS | Mongodb |
            Cloudinary | TypeScript | Shadcn UI | Radix UI | ImageMagic |
            Graphicsmagic | Socket.js | Next.js
          </p>
        </CardContent>
        <CardFooter className="space-x-5">
          <a
            href="https://github.com/hayat4144/chit-chat"
            rel="noopener noreferrer"
            target="_blank"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Source Code
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
