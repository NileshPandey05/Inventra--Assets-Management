import { HeroSectionOne } from "@/components/Herosection";
import Footer from "@/components/footerc";

export default function Home() {
  return (
    <div className=" w-full h-screen">
      <main>
        <HeroSectionOne />
      </main>
      <Footer />
    </div>
  );
}

