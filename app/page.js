'use client'
import Header from "./components/header";
import Hero_Section from './components/herosection'
import Service_Section from "./components/service_section";
import Stories_Transformations from './components/stories_transformations'
import Marquee_Scroll from './components/marqueescroll'
import Achievements from "./components/achievements";
export default function Home() {
  return (
    <>
    <Header/>
    <Hero_Section/>
    <Service_Section/>
    <Stories_Transformations/>
    <Marquee_Scroll/>
    <Achievements/>
    </>
  );
}
