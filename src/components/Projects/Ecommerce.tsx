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
import { EcommerceImage } from "@/lib/constant";

export default function Ecommerce() {
  return (
    <div className="project-1 grid grid-cols-1 md:grid-cols-2 gap-5 text-justify">
      <Card>
        <CardHeader>
          <CardTitle>Ecommerce</CardTitle>
          <CardDescription>A Featured Project</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            This is a full stack multi vendor an e-commerce web application
            built using modern web technologies such as React, Redux, and
            Material UI. The app provides a seamless user experience for
            browsing and purchasing products online.{" "}
          </p>
          <p className="my-2">
            The user can filter and sort the products by price, rating, and name
            using the filter controls on the product listing page.Advance add to
            cart functionality has been added from changing producti varient to
            add and remove product from the cart.The app supports online
            payments using credit/debit cards with Strip.
          </p>

          <p className="my-2">
            The app displays a list of similar products on the product details
            page, which are products that are similar in category, style, or
            price to the current product.
          </p>

          <p className="my-2 text-muted-foreground text-sm">
            React.js | Node.js | Express.js | Nodemailer | Strip | Redux |
            Tailwind CSS | Mongodb | | Cloudinary
          </p>
        </CardContent>
        <CardFooter className="space-x-5">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={"https://frontend-hayat4144.vercel.app/"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Visit Site
          </a>
          <a
            href="https://github.com/hayat4144/Frontend"
            rel="noopener noreferrer"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Source Code
          </a>
        </CardFooter>
      </Card>
      <Slider images={EcommerceImage} />
    </div>
  );
}
