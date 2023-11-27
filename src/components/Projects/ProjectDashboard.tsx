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
import { DashboardImage } from "@/lib/constant";

export default function ProjectDashboard() {
  return (
    <div className="project-1 grid grid-cols-1 md:grid-cols-2 gap-5 my-10 text-justify">
      <Slider images={DashboardImage} />
      <Card>
        <CardHeader>
          <CardTitle>Ecommerce Dashboard</CardTitle>
          <CardDescription>A Featured Project</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            This is an E-commerce Dashboard built using React, Tailwind CSS,
            Vite, Redux, and Chart.js. The dashboard provides various features
            for managing products, orders, and transactions. It also includes a
            chat functionality and supports light and dark themes.
            Authentication is implemented for secure access to the dashboard.{" "}
          </p>
          <p className="my-2">
            Provides a comprehensive overview of the store's performance with
            visually appealing charts, including order charts displaying metrics
            such as total orders, revenue, and order status, as well as a
            transaction donut chart visualizing the distribution of transactions
            by date.
          </p>
          <p className="my-2 text-muted-foreground text-sm">
            React.js | Chart.js | JavaScript | Tailwind CSS | Cloudinary | Redux
          </p>
        </CardContent>
        <CardFooter className="space-x-5">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={"https://dashboard-hayat4144.vercel.app"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Visit Site
          </a>
          <a
            href="https://github.com/Hayat4144/Dashboard"
            rel="noopener noreferrer"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Source Code
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
