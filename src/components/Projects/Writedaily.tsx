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
import { WritedailyImage } from "@/lib/constant";
import Slider from "../Slider";

export default function WritedailyProject() {
    return (
        <div className="project-1 grid grid-cols-1 md:grid-cols-2 gap-5 my-10 text-justify">
            <Slider images={WritedailyImage} />
            <Card>
                <CardHeader>
                    <CardTitle>Writedaily</CardTitle>
                    <CardDescription>
                        A blogging plateform similar to medium where users can write their
                        thoughts and ideas.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        I developed a robust blogging platform named WriteDaily, similar to
                        Medium.com . With a focus on user experience and performance
                        optimization, I optimized search functionality by leveraging
                        PostgreSQL's full-text search with GIN indexing, reducing article
                        search time by 17%. Additionally, I implemented efficient image
                        processing using Busboy and Cloudinary, ensuring smooth image
                        uploads with proper validation.
                    </p>
                    <p className="my-2">
                        The platform also boasts nested comment functionality for enhanced
                        engagement, alongside a user-friendly WYSIWYG editor powered by
                        Slate.js. With markdown support, code block highlighting, and image
                        resizing, WriteDaily empowers users to create compelling content
                        effortlessly.
                    </p>
                    <p className="my-2 text-muted-foreground text-sm">
                        React.js | Next.js | JavaScript | Tailwind CSS | Cloudinary | Shadcn
                        UI | Node.js | Express.js | TypeScript | Docker | Drizzle ORM |
                        Postgres
                    </p>
                </CardContent>
                <CardFooter className="space-x-5">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"https://writedaily.vercel.app/"}
                        className={cn(buttonVariants({ variant: "default" }))}
                    >
                        Visit Site
                    </a>
                    <a
                        href="https://github.com/Hayat4144/writedaily"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline" }))}
                    >
                        Source Code
                    </a>
                    <a
                        href="https://documenter.getpostman.com/view/31984472/2s9Ykt4JVs"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline" }))}
                    >
                        API documentation
                    </a>
                </CardFooter>
            </Card>
        </div>
    );
}
