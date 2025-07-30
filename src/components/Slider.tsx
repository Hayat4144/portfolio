"use client";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface ImageObject {
    id: string;
    url: string;
    alt?: string
}

interface SliderProps {
    images: ImageObject[]
    autoPlay?: boolean
    autoPlayInterval?: number
    showDots?: boolean
    className?: string
}

export default function Slider({ images,
    autoPlay = false,
    autoPlayInterval = 3000,
    showDots = true,
    className = "", }: SliderProps) {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length)
    }, [images.length])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
    }, [images.length])

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index)
    }, [])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") {
                prevSlide()
            } else if (event.key === "ArrowRight") {
                nextSlide()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [nextSlide, prevSlide])

    // Auto-play functionality
    useEffect(() => {
        if (!autoPlay) return

        const interval = setInterval(nextSlide, autoPlayInterval)
        return () => clearInterval(interval)
    }, [autoPlay, autoPlayInterval, nextSlide])

    if (!images.length) {
        return (
            <div className="flex items-center justify-center h-64 bg-muted rounded-md">
                <p className="text-muted-foreground">No images to display</p>
            </div>
        )
    }
    return (
        <TooltipProvider>
            <div
                className=" overflow-hidden md:flex-col md:flex md:items-center
        md:justify-center"
            >
                {/* Main image container */}
                <div className="relative aspect-video w-full">
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                            aria-hidden={index !== currentSlide}
                        >
                            <Image
                                src={image.url || "/placeholder.svg"}
                                alt={image.alt || `Slide ${index + 1}`}
                                fill
                                className="object-cover rounded-md"
                                priority={index === 0}
                                onLoad={() => setIsLoading(false)}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}

                    {/* Loading state */}
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-muted">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        </div>
                    )}

                    {/* Navigation buttons */}
                    {images.length > 1 && (
                        <>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        onClick={prevSlide}
                                        variant="secondary"
                                        size="icon"
                                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-200"
                                        aria-label="Previous image"
                                    >
                                        <ArrowLeftIcon size={16} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Previous</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        onClick={nextSlide}
                                        variant="secondary"
                                        size="icon"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-200"
                                        aria-label="Next image"
                                    >
                                        <ArrowRightIcon size={16} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="left">
                                    <p>Next</p>
                                </TooltipContent>
                            </Tooltip>
                        </>
                    )}

                    {/* Slide counter */}
                    <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                        {currentSlide + 1} / {images.length}
                    </div>
                </div>

                {/* Dot indicators */}
                {showDots && images.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4 pb-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentSlide
                                    ? "bg-primary scale-125"
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </TooltipProvider>
    );
}
