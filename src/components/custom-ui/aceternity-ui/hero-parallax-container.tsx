"use client";
import { HeroParallax } from "@/components/custom-ui/aceternity-ui/hero-parallax";
// import { Atom } from "lucide-react";

export function HeroParallaxContainer({ randomCharacters }: { randomCharacters: Character[] }) {

  const characters = randomCharacters.map(c => {
    return {
      title: c.name,
      // link: `/characters/${c.id}?name=${c.name}`,
      link: `/${c.id}`,
      thumbnail:
        c.images.md,
    }
  })

  return <>
    <div 
    //hidden md:block 
    className="max-h-screen"
    >
      <HeroParallax characters={characters} />
    </div>
  </>;
}