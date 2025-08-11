import { useLottie } from "lottie-react";
import beeAnimation from "./lotties/Bee.json";

const style = {
  height: 200,
};


const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [0, 45],
    },
    {
      visibility: [0.45, 1.0],
      type: "loop",
      frames: [45, 60],
    },
  ],
};

const LottieBee = ({loop, autoplay, delay}) => {
  const options = {
    animationData: beeAnimation,
    loop: {loop},
    autoplay: {autoplay},
    delay: {delay},
    interactivity:{interactivity}
  };

  const { View } = useLottie(options, style);

  return View;
};

export default LottieBee;