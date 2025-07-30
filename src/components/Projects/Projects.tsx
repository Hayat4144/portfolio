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
import { projects } from "@/lib/constant";

export default function Projects() {
    return (
        <div
            className="mx-5 my-5 min-h-screen md:w-[75%] md:mx-auto text-justify"
            id="projects"
        >
            <h1 className="text-4xl font-bold my-5">Some Things I've built</h1>
            <div className="projects my-10 space-y-10 md:space-y-16">
                {projects.map((project, index) => (
                    <div className="project-1 grid grid-cols-1 lg:grid-cols-2 gap-5" key={project.id}>
                        <Card className={`${index % 2 === 0 ? "order-2" : ""}`}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <CardTitle>{project.name}</CardTitle>
                                    <span className="text-sm text-muted-foreground">{project.date}</span>
                                </div>
                                <CardDescription>{project.subheading}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className='space-y-2'>

                                    {project.description.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))}
                                </div>
                                <p className="my-2 text-muted-foreground text-sm">
                                    {project.tags.join(" | ")}
                                </p>
                            </CardContent>
                            <CardFooter className="space-x-5">
                                {project.link && (
                                    <a
                                        className={cn(buttonVariants({ variant: "default" }))}
                                        target="_blank"
                                        href={project.link}
                                        rel="noopener noreferrer"
                                    >Visit Site</a>
                                )}
                                {project.sourceCode && (
                                    <a href={project.sourceCode} rel="noopener noreferrer" target="_blank" className={cn(buttonVariants({ variant: "outline" }))}>
                                        Source Code
                                    </a>
                                )}
                            </CardFooter>
                        </Card>
                        <Slider images={project.images} autoPlay={true} />
                    </div>

                ))}
            </div>
        </div>
    );
}
