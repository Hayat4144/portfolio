import React, { Fragment } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        <Tabs defaultValue="coding" className="flex flex-col">
          <TabsList className="mb-2">
            <TabsTrigger value="coding">Coding Skills</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>
          <TabsContent
            value="coding"
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            <Card className="text-justify">
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>
                  React js | JavaScript | Next js | Tailwind | TypeScript |
                  Redux | Radix UI | Shadcn UI
                </CardDescription>
              </CardHeader>
              <CardContent>
                I thrive on creating engaging and responsive user interfaces. My
                proficiency in React.js,Next js and Tailwind csss allows me to
                build dynamic and intuitive UIs that enhance the overall user
                experience.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
                <CardDescription>
                  Node js | Express js | Mongodb | Postgres
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
                <CardTitle>Api Development</CardTitle>
                <CardDescription>
                  REST API | Pagination | Searching | Filter | Authutentication
                  | Authorization
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
          </TabsContent>
          <TabsContent
            value="soft"
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            <Card className="text-justify">
              <CardHeader>
                <CardTitle>Communication</CardTitle>
              </CardHeader>
              <CardContent>
                When it comes to communicate with other people i am good at it.
                I effectively exchage information and ideas with people.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                Collaborative expert—bridging diverse skills to achieve
                seamless, innovative solutions for success in every project.{" "}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Problem solving</CardTitle>
              </CardHeader>
              <CardContent>
                My problem-solving skills enable me to tackle challenges
                efficiently, ensuring timely and effective solutions.
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Fragment>
  );
}
