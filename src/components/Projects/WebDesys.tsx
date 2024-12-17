import React from 'react'
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
import { WebDesysImage } from "@/lib/constant";
import Slider from "../Slider";


export default function WebDesysProject() {
    return (
        <div className="project-1 grid grid-cols-1 md:grid-cols-2 gap-5 my-10 text-justify">
            <Slider images={WebDesysImage} />
            <Card>
                <CardHeader>
                    <CardTitle>WebDesys</CardTitle>
                    <CardDescription>
                        A software company based in Noida which provide web development and digital
                        marketing services.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        I  recently completed a comprehensive project for a software company,
                        developing their website from scratch. This involved building the entire backend
                        and integrating numerous features to enhance functionality and user experience.                    </p>
                    <p className="my-2">

                        One of the key features I implemented was a robust payment gateway, supporting
                        three payment types: one-time, progress-based, and subscription. This versatility
                        caters to diverse client needs, ensuring smooth and secure transactions.
                    </p>
                    <p className="my-2">
                        Additionally,
                        I incorporated a detailed project management system,
                        allowing users to add new projects, track progress, and manage tasks efficiently.</p>
                    <p className="my-2 text-muted-foreground text-sm">
                        React.js | Next.js | Redis | BullMq | REST API
                        | Node.js | Express.js | TypeScript | Docker | Drizzle ORM |
                        Postgres
                    </p>
                </CardContent>
                <CardFooter className="space-x-5">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"https://webdesys.com"}
                        className={cn(buttonVariants({ variant: "default" }))}
                    >
                        Visit Site
                    </a>
                </CardFooter>
            </Card>
        </div>
    )
}

