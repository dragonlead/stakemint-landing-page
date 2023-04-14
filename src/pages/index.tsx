import { useEffect, useState } from "react";
import Header from "./components/Header";
import AssetOwnership from "./sections/AssetOwnership";
import Navbar from "./components/Navbar";
import EarnCrypto from "./sections/EarnCrypto";
import Yield from "./sections/Yield";
import Youtube from "./sections/Youtube";
import Mood from "./sections/Mood";
import PotentialEarnings from "./sections/PotentialEarnings";
import DailyRateSec from "./sections/DailyRateSec";
import Automated from "./sections/Automated";
import NetworksSec from "./sections/NetworksSec";
import FAQ from "./sections/FAQ";
import FooterA from "./sections/FooterA";
import NewsletterSocials from "./sections/NewsletterSocials";
import FooterB from "./sections/FooterB";

export default function Home() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") : "light"
  );

  const [gradientValue, setGradientValue] = useState(
    theme === "light" ? 255 : 0
  );

  const [isLight, setIsLight] = useState(theme === "light" ? true : false);

  useEffect(() => {
    console.log(theme);
    console.log(isLight);
    const element = document.documentElement;
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setGradientValue(0);
        break;

      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setGradientValue(255);
        break;

      default:
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setGradientValue(255);
        break;
    }
  }, [theme, isLight]);

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-black text-primary dark:text-white">
        <Navbar />
        <AssetOwnership />
        <EarnCrypto />
        <Yield />
        <Youtube />
        <Mood />
        <PotentialEarnings />
        <DailyRateSec />
        <Automated />
        <NetworksSec />
        <FAQ />
        <FooterA />
        <NewsletterSocials />
        <FooterB />
      </main>
    </>
  );
}
