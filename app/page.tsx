import ResponsiveAppBar from "./components/ResponsiveNavbar";
import HeaderSection from "./components/HeaderSection";
import SkillSection from "./components/SkillSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div >
      <ResponsiveAppBar />
      <HeaderSection />
      <SkillSection />
      <Footer />
    </div>
  );
}
