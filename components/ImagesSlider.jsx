"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

export function ImagesSliderComponent() {
    const images = [
        "/images/all_colors__flhn5cmb1t26_xlarge.jpg",
        "/images/hero_camera__bsixees3ujte_xlarge.jpg",
        "/images/hero_chip_endframe__e48wzm1ey9ua_xlarge.jpg",
        "/images/hero_ios__b63xajomb936_large.png",
        "/images/hero_spatial__gna2d6arpimq_large.png",
    ];
    return (
        (<ImagesSlider className="h-screen" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center">
                <motion.p
                    className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    Experience the Future of Innovation <br /> with the iPhone 16
                </motion.p>
                <a
                    href="https://www.apple.com/shop/buy-iphone/iphone-16"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Buy Now
                    </button>
                </a>
            </motion.div>
        </ImagesSlider>)
    );
}
