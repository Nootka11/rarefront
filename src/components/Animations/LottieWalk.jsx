import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./lotties/groovyWalk.json";

const style = {
  height: 300,
};

const LottieWalk = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default LottieWalk;