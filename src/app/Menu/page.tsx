
import Dessert from "@/components/Dessert/Dessert";
import Drink from "@/components/Drinks/Drinks";
import Experience from "@/components/Experience/Experience";
import MainCours from "@/components/MainCourse/MainCourse";
import StarterMenu from "@/components/Menu/Menu";
import PartnersAndClients from "@/components/PartnerClient/PartnerClient";
import Hero from "@/components/HeroSection/HeroSection";

export default function Menu() {
  return (
<div>
  <Hero/>
  <StarterMenu/>
  <MainCours/>
  <Experience/>
  <Dessert/>
  <Drink/>	
  <PartnersAndClients/>
</div>
  );
}