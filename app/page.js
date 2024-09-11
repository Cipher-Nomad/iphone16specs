import { AppleCardsCarousel } from "@/components/AppleCardsCarousel";
import Contact from "@/components/ContactForm";
import { FloatingNavComponent } from "@/components/FloatingNav";
import { ImagesSliderComponent } from "@/components/ImagesSlider";
import { InfiniteMovingCardsComponent } from "@/components/InfiniteMovingCards";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <FloatingNavComponent />
      <ImagesSliderComponent />
      <AppleCardsCarousel />
      <InfiniteMovingCardsComponent />
      <Contact />
    </div>
  );
}
