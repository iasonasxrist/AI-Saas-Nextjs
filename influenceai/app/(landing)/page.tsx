import { LandingNavbar } from "../../components/landing-navbar";
import { LandingHero } from "../../components/landing-hero";
import { LandingContent } from "../../components/landing-content";
import { LandingFooter } from "../../components/landing-footer";
const LandingPage = () => {
  return (
    <div className="h-full bg-[#2d55ab] ">
      <>
        <LandingNavbar />
        <LandingHero />
        <LandingContent />
        <LandingFooter />
      </>
    </div>
  );
};

export default LandingPage;
