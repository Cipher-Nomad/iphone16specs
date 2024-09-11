"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarousel() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        (<div id="specifications" className="w-full h-full py-20">
            <h2
                className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Get to know your iPhone16.
            </h2>
            <Carousel items={cards} />
        </div>)
    );
}

const ContentDisplay = () => {
    return <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Experience the brilliance of the iPhone 16’s display.
            </span>
            <br />
            The 6.1-inch All-Screen OLED Super Retina XDR display delivers vibrant colors and sharp details with a resolution of 2556x1179 pixels at 460 ppi. Whether you're watching videos, browsing photos, or reading text, every image comes to life with stunning clarity and precision. Enjoy an immersive visual experience that makes every interaction extraordinary.
        </p>
        <br />
        <Image
            src="/images/display_iphone__fmxtjmn7726a_large_2x.jpg"
            alt="Display Size Image"
            height={665}
            width={750}
            className="w-full h-auto mx-auto object-contain" />
    </div>
};

const ContentProcessor = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Unleash the power of the A18 chip.
                </span>
                <br />
                The new A18 chip features a 6-core CPU with 2 high-performance cores and 4 efficiency cores, delivering exceptional speed and efficiency. Experience enhanced graphics with the new 5-core GPU, and benefit from advanced AI capabilities with the new 16-core Neural Engine. Whether you're running intensive apps or multitasking with ease, the A18 chip ensures a smooth and responsive performance.
            </p>
            <br />
            <Image
                src="/images/gdbcjN8sJAT6mjm4K35MeW-1200-80.png"
                alt="Processor Image"
                height={665}
                width={1200}
                className="w-full h-auto mx-auto object-contain"
            />
        </div>
    );
};

const ContentCamera = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Capture the world with the advanced dual-camera system.
                </span>
                <br />
                The iPhone 16’s camera system features a 48MP Fusion camera with a 26 mm, ƒ/1.6 aperture, sensor-shift optical image stabilization, and 100% Focus Pixels for stunning high-resolution photos. It also includes a 12MP 2x Telephoto camera and a 12MP Ultra Wide lens with 120° field of view for versatile shooting. With 4x optical zoom range, 10x digital zoom, and advanced features like Night mode, Deep Fusion, Smart HDR 5, and next-generation portraits, you’ll capture every detail with precision.
            </p>
            <br />
            <Image
                src="/images/maxresdefault.jpg"
                alt="Camera Image"
                height={720}
                width={1280}
                className="w-full h-auto mx-auto object-contain"
            />
        </div>
    );
};

const ContentBattery = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Enjoy all-day battery life with fast charging.
                </span>
                <br />
                The iPhone 16 is designed to keep up with your day, featuring up to 22 hours of video playback, 18 hours of streamed video playback, and 80 hours of audio playback.
                With a built-in rechargeable lithium-ion battery, the iPhone 16 supports MagSafe wireless charging up to 25W with a 30W adapter or higher, Qi2 wireless charging up to 15W, and fast charging capabilities to get up to 50% charge in around 30 minutes with a 20W adapter or higher paired with a USB-C cable, or 30W adapter paired with a MagSafe Charger (sold separately).
            </p>
            <br />
            <Image
                src="/images/430179283_383185521087274_3715722466213636038_n.jpg"
                alt="Battery Life Image"
                height={1350}
                width={1080}
                className="w-full h-auto mx-auto object-contain"
            />
        </div>
    );
};

const ContentStorage = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Choose the storage that fits your needs
                </span>
                <br />
                The iPhone 16 offers flexible storage options to match your usage patterns.
                Select from 128GB, 256GB, or 512GB configurations to ensure you have the right space for your photos, videos, apps, and files. Whether you need room for high-quality media or large files, there's a storage option perfect for your lifestyle.
            </p>
            <br />
            <Image
                src="/images/post-image-what-storage-capacty-is-my-iphone.png"
                alt="Battery Life Image"
                height={600}
                width={1200}
                className="w-full h-auto mx-auto object-contain"
            />
        </div>
    );
};

const data = [
    {
        category: "Display Size",
        title: (
            <>
                Super Retina XDR Display<br />
                6.1-inch All-Screen OLED
                2556x1179 Resolution at 460 ppi
            </>
        ),
        src: "/images/display_iphone__fmxtjmn7726a_large_2x.jpg",
        content: <ContentDisplay />,
    },
    {
        category: "Processor",
        title: "A18 Chip with 6-Core CPU, 5-Core GPU, and 16-Core Neural Engine",
        src: "/images/gdbcjN8sJAT6mjm4K35MeW-1200-80.png",
        content: <ContentProcessor />,
    },
    {
        category: "Camera",
        title: "Advanced Dual Camera System: 48MP Fusion, 12MP Telephoto, and 12MP Ultra Wide",
        src: "/images/maxresdefault.jpg",
        content: <ContentCamera />,
    },

    {
        category: "Battery Life",
        title: "All-Day Battery Life with Fast Charging Capabilities",
        src: "/images/430179283_383185521087274_3715722466213636038_n.jpg",
        content: <ContentBattery />,
    },
    {
        category: "Storage",
        title: "Flexible storage options for every need",
        src: "/images/post-image-what-storage-capacty-is-my-iphone.png",
        content: <ContentStorage />,
    },
    // {
    //     category: "Hiring",
    //     title: "Hiring for a Staff Software Engineer",
    //     src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     // content: <DummyContent />,
    // },
];
