import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Code, Database, Server } from "lucide-react";

export default function About() {
    return (
        <section
            className="about mx-5 my-5 md:w-[75%] md:mx-auto"
            id="about"
        >
            <h1 className="my-5 md:my-10 text-4xl font-bold">About Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="text-justify">
                    <p className="leading-7">
                        Hello, I’m Hayat Ilyas—a backend-focused full stack developer with a strong
                        foundation in modern web architecture. I have deep experience in designing RESTful APIs,
                        optimizing databases, and building secure, scalable server-side applications using Node.js,
                        Express.js, PostgreSQL, and MongoDB. </p>
                    <p className="leading-7 my-3">
                        Beyond code, I’m dedicated to clear communication and effective collaboration,
                        ensuring all stakeholders remain aligned throughout a project’s lifecycle.
                        My approach is solution-oriented: whether architecting core systems or troubleshooting tough issues,
                        I thrive on delivering efficient results.
                    </p>
                    <p className="leading-7 my-3">
                        Let’s create high-performance, reliable applications—together.
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
                <div className="space-y-6">
                    <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-3">
                                <Server className="h-6 w-6 text-blue-600 mr-3" />
                                <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Backend Architecture</h4>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300">
                                Designing scalable server-side solutions with Node.js, Express.js, and modern database technologies.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-500 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-3">
                                <Database className="h-6 w-6 text-purple-600 mr-3" />
                                <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Database Optimization</h4>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300">
                                Expert in PostgreSQL and MongoDB optimization, schema design, and performance tuning.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-3">
                                <Code className="h-6 w-6 text-green-600 mr-3" />
                                <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Full Stack Development</h4>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300">
                                Building complete web applications with React, Next.js, and modern frontend technologies.
                            </p>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </section>
    );
}
