import AboutUs from "./components/about-us";
import IpTimeline from "./components/ip-timeline";
import OurTeam from "./components/our-team";
import WeExist from "./components/we-exist";

const About = () => {
  return (
    <div className="container mx-auto p-5">
      <AboutUs />
      <WeExist />
      <IpTimeline />
      <OurTeam />
    </div>
  );
};

export default About;
