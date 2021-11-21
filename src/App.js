import Hero from "./components/Landing/Hero";
import FeatureAchievements from "./components/Landing/FeatureAchievements";
import GetStarted from "./components/Landing/GetStarted";
import CrypOverview from "./components/Landing/CrypOverview";

function App() {
  return (
    <div className="font-Poppins">
      <Hero />
      <FeatureAchievements />
      <GetStarted />
      <CrypOverview />
    </div>
  );
}

export default App;
