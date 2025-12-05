import Presentation from "@/components/Presentation";
import IntroSlide from "@/components/slides/IntroSlide";
import History12Slide from "@/components/slides/History12Slide";
import History3Slide from "@/components/slides/History3Slide";
import History4Slide from "@/components/slides/History4Slide";
import AdviceSlide from "@/components/slides/AdviceSlide";

export default function Home() {
  const slides = [
    IntroSlide,
    History12Slide,
    History3Slide,
    History4Slide,
    AdviceSlide,
  ];

  return <Presentation slides={slides} />;
}
