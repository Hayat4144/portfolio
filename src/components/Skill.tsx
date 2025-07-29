import React, { Fragment } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Skill() {
    return (
        <Fragment>
            <div className="mx-5 my-20 md:w-[75%] md:mx-auto" id="skills">
                <div className="flex flex-col">
                    <h1 className="my-10 text-4xl font-bold">My Skills & Expertise</h1>
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-5"
                    >

                        <Card>
                            <CardHeader>
                                <CardTitle>Backend Development</CardTitle>
                                <CardDescription>
                                    Node js | Express js | Mongodb | Postgres | Database schema design
                                    | Containerization | Cloud Deployment | REST API Design
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                I am well-versed in Node.js and Express.js, harnessing their
                                power to build high-performance server applications. My focus is
                                on developing robust APIs that seamlessly connect the frontend
                                with the backend, ensuring smooth data flow and optimal system
                                functionality.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>API Development</CardTitle>
                                <CardDescription>
                                    REST API | Pagination | Searching | Filter | Authutentication
                                    | Authorization | Rate limiting | Performance monitoring
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                I specialize in API development, emphasizing RESTful
                                architecture. My skills include rate limiting, secure efficient
                                pagination,secure authentication and ensuring optimal
                                performance. Precise authorization control adds an extra layer
                                of security and functionality.
                            </CardContent>
                        </Card>
                        <Card className="text-justify">
                            <CardHeader>
                                <CardTitle>Frontend Development</CardTitle>
                                <CardDescription>
                                    React js | JavaScript | Next js | Tailwind | TypeScript |
                                    Redux | Radix UI | Shadcn UI | Responsive UI | HTML5 | CSS3
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                I thrive on creating engaging and responsive user interfaces. My
                                proficiency in React.js,Next js and Tailwind csss allows me to
                                build dynamic and intuitive UIs that enhance the overall user
                                experience.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
