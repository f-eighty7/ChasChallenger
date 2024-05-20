
import { Carousel } from "@material-tailwind/react";
import { CharacterCard } from "./CharacterCard";
 
export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
		  <CharacterCard />
		  <CharacterCard />
		  <CharacterCard />
		  <CharacterCard />
		  
    </Carousel>
  );
}	

