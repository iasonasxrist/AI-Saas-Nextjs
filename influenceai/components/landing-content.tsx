"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
];

export const LandingContent = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="px-10 pb-20 bg-[#2d55ab]">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#355db2] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="px-10 py-10 flex flex-col items-center justify-center h-screen">
        {/* Image with explicit width and height */}
        <Image
          alt="Generated"
          src="/xillustration-1.png"
          width={500}
          height={500}
          className="mb-8 rounded-lg shadow-md" // Optional styling for image
        />

        <h1 className="text-xl text-white font-bold  text-center mb-4">
          Since you've come this far,
        </h1>
        <h2 className="text-2xl  text-white font-bold text-center mb-8">
          let's make your time worthwhile.
        </h2>

        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Try it for free
          </Button>
        </Link>
      </div>
    </div>
  );
};
