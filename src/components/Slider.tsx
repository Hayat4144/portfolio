"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface imageObject {
  id: string;
  url: string;
}

interface SliderProps {
  images: imageObject[];
}

export default function Slider({ images }: SliderProps) {
  const [currentSlide, setcurrentSlide] = useState(1);

  const nextSlide = (slideImages: imageObject[]) => {
    if (currentSlide < slideImages.length) {
      setcurrentSlide((prevState) => prevState + 1);
    } else {
      setcurrentSlide(1);
    }
  };
  console.log(currentSlide);
  const backSlide = (slideImages: imageObject[]) => {
    if (currentSlide !== 1) {
      setcurrentSlide((prevState) => prevState - 1);
    } else if (currentSlide === 1) {
      setcurrentSlide(slideImages.length);
    }
  };
  return (
    <Fragment>
      <div
        className="overflow-hidden md:flex-col md:flex md:items-center
        rounded-md md:justify-center"
      >
        {images.map((image) => (
          <div
            key={image.id}
            className={`${
              currentSlide === Number(image.id) ? "relative" : "hidden"
            }`}
          >
            <Image
              alt="pic"
              src={image.url}
              width={500}
              height={500}
              className={` w-full rounded-md transition ease-in-out`}
            />
            <div
              className="btn-group absolute top-28 w-[90%] flex justify-between
             left-5"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => backSlide(images)}
                      variant={"default"}
                      size={"icon"}
                      className="rounded-full"
                    >
                      <ArrowLeftIcon size={17} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Previous</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => nextSlide(images)}
                      variant={"default"}
                      size={"icon"}
                      className="rounded-full"
                    >
                      <ArrowRightIcon size={17} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Next</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
