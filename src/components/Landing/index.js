import Hero from "./Hero";
import FeatureAchievements from "./FeatureAchievements";
import GetStarted from "./GetStarted";
import CrypOverview from "./CrypOverview";
import Workflow from "./Workflow";
import Footer from "./Footer";

function Landing() {
  return (
    <div className="font-Poppins">
      <Hero />
      <FeatureAchievements />
      <GetStarted />
      <CrypOverview />
      <Workflow />
      <Footer />
    </div>
  );
}

export default Landing;
