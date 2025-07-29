import React from "react";
import { TypographyH3 } from "./ui/heading";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Linkedin, MailIcon, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-8 md:w-[75%] md:mx-auto mx-5" id="contact">
            <h1 className="text-4xl font-bold">Contact me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                <div>
                    <TypographyH3>I'm here</TypographyH3>
                    <p className="leading-7 text-muted-foreground">
                        I'm always interested in new opportunities and exciting projects. Whether you need a robust backend system, a full-stack application, or technical consultation, I'd love to hear from you.          </p>
                </div>

                <Card className="mx-0 w-full">
                    <CardHeader>
                        <CardTitle>Let's Talk.</CardTitle>
                        <CardDescription>Feel free to reach me. </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-start">
                        <Button className="px-0 space-x-3" variant={"link"}>
                            <Linkedin size={25} />
                            <a
                                href="https://www.linkedin.com/in/hayat-ilyas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700"
                            >
                                LinkedIn
                            </a>
                        </Button>
                        <Button className="px-0 space-x-3" variant={"link"}>
                            <Twitter size={25} />
                            <a
                                href="https://twitter.com/HayatIlyas22"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700"
                            >
                                Twitter
                            </a>
                        </Button>
                        <Button className="px-0 space-x-3" variant={"link"}>
                            <MailIcon size={25} />
                            <a
                                href="mailto:ihayat855@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700"
                            >
                                ihayat855@gmail.com
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
