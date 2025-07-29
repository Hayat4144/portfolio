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
import { noteverseImage } from "@/lib/constant";
import ProjectDashboard from "./ProjectDashboard";
import Ecommerce from "./Ecommerce";
import ChitChat from "./ChitChat";
import WritedailyProject from "./Writedaily";
import WebDesysProject from "./WebDesys";

export default function Projects() {
    return (
        <div
            className="mx-5 my-5 min-h-screen md:w-[75%] md:mx-auto text-justify"
            id="projects"
        >
            <h1 className="text-4xl font-bold my-5">Some Things I've built</h1>
            <div className="projects my-10">
                <WebDesysProject />
                <WritedailyProject />
                <div className="project-1 grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <Card>
                        <CardHeader>
                            <CardTitle>Noteverse</CardTitle>
                            <CardDescription>A Featured Project</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Noteverse is a versatile and intuitive note-taking and task
                                management application designed to simplify and enhance your
                                digital note-taking experience.you can effortlessly capture and
                                organize your ideas, thoughts, and important information in a
                                seamless and efficient manner.
                            </p>
                            <p className="my-2">
                                This is a full stack web app built with modern technology. It is
                                user friendly and easy to use, light and dark mode are
                                supported.Image uploading , table intgeration,Emoji, short cut
                                for editing notes etc are supported.
                            </p>
                            <p className="my-2 text-muted-foreground text-sm">
                                React.js | Next.js | Slate.js | Shadcn UI | Radix UI |
                                TypeScript | Next-auth | Tailwind CSS | Node.js | Express.js |
                                Prisma | Postgress | Cloudinary
                            </p>
                        </CardContent>
                        <CardFooter className="space-x-5">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={"https://noteverse-woad.vercel.app"}
                                className={cn(buttonVariants({ variant: "default" }))}
                            >
                                Visit Site
                            </a>
                            <a
                                href="https://github.com/hayat4144/noteverse"
                                rel="noopener noreferrer"
                                target="_blank"
                                className={cn(buttonVariants({ variant: "outline" }))}
                            >
                                Source Code
                            </a>
                        </CardFooter>
                    </Card>
                    <Slider images={noteverseImage} />
                </div>
                <ProjectDashboard />
                <Ecommerce />
                <ChitChat />
            </div>
        </div>
    );
}
