"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsComponent() {
    return (
        (<div id="testimonials"
            className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>)
    );
}

const testimonials = [
    {
        quote:
            "The iPhone 16 has revolutionized the way I work and play. The A18 chip delivers lightning-fast performance, and the camera quality is beyond anything I’ve experienced before. It truly feels like a leap into the future.",
        name: "John Doe",
        title: "Tech Enthusiast",
    },
    {
        quote:
            "Switching to the iPhone 16 was the best decision I made. From its sleek design to its powerful battery life, it’s the perfect companion for my on-the-go lifestyle. I can get through my entire day without worrying about charging.",
        name: "Sarah Miller",
        title: "Frequent Traveler",
    },
    {
        quote:
            "The display on the iPhone 16 is just stunning! Watching videos and editing photos on this phone feels like I’m using professional-grade equipment. It’s an absolute game-changer for creatives.",
        name: "Alex Johnson",
        title: "Photographer & Designer",
    },
    {
        quote:
            "With the iPhone 16, everything runs so smoothly. Multitasking is effortless, and the speed of the A18 chip makes even the most demanding apps feel lightweight. This phone has really set the bar high for the next generation of smartphones.",
        name: "Michael Lee",
        title: "App Developer",
    },
    {
        quote:
            "As someone who relies heavily on my phone for work, I was blown away by the iPhone 16’s capabilities. The battery life is fantastic, and the 48MP camera ensures that every photo I take looks professional, no matter the lighting conditions.",
        name: "Emily Davis",
        title: "Content Creator",
    },
];

