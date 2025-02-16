import Image from "next/image";
import HeroSection from "./components/hero-section";

const Home = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/images/background.webp"
        alt="hero's background"
        width={1000}
        height={1000}
        className="fixed top-0 left-0 w-full h-screen -z-10"
      />
      <div className="max-w-5xl mx-auto px-5 pt-10 pb-5">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
