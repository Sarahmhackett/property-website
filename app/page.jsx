import Hero from "./components/Hero";
import InfoBoxes from "./components/InfoBoxes";
import HomeProperties from "./components/HomeProperties";
import connectDB from "@/config/database";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
}
