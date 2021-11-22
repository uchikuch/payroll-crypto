import Hero from "./components/Landing/Hero";
import FeatureAchievements from "./components/Landing/FeatureAchievements";
import GetStarted from "./components/Landing/GetStarted";
import CrypOverview from "./components/Landing/CrypOverview";
import Workflow from "./components/Landing/Workflow";
import Footer from "./components/Landing/Footer";

function App() {
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

export default App;
