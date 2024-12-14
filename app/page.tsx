import ResponsiveAppBar from "./components/ResponsiveNavbar";
import HeaderSection from "./components/HeaderSection";
import SkillSection from "./components/SkillSection";

export default function Home() {
  return (
    <div >
      <ResponsiveAppBar />
      <HeaderSection />
      <SkillSection />
    </div>
  );
}
