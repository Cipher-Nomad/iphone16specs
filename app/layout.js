import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "iPhone 16 Specifications - Latest Features, Reviews, and Pricing",
  description:
    "Discover the all-new iPhone 16. Explore the full specifications, stunning photo gallery, user testimonials, and seamless purchase options. Learn more about its performance, design, and advanced technology. Responsive design for both desktop and mobile.",
  keywords:
    "iPhone 16, Apple, Specifications, Features, Pricing, Testimonials, Buy iPhone 16, iPhone Gallery",
  author: "Your Name or Company",
  openGraph: {
    type: "website",
    url: "https://yourwebsite.com/iphone16",
    title: "iPhone 16 Specifications - Latest Features, Reviews, and Pricing",
    description:
      "Explore the iPhone 16: cutting-edge performance, sleek design, and all-new features. View the product gallery, user reviews, and find out how to buy.",
    images: [
      {
        url: "/images/iphone16-thumbnail.jpg",
        width: 800,
        height: 600,
        alt: "iPhone 16",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
