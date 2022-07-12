import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useLayoutEffect, useRef } from "react";
import { waves } from "./waves";

const App = () => {
  const ref = useRef();

  return (
    <Parallax pages={3} ref={ref}>
      {waves.map((wave, index) => (
        <ParallaxLayer
          key={index}
          offset={0.25 + 0.02 * index}
          speed={-0.6 - 0.03 * index}
        >
          <svg
            viewBox="25 150 850 300"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <path id="wave-1-from" d={wave.from} fill={wave.fill}></path>
            <path id="wave-1-to" d={wave.to} fill={wave.fill}></path>
          </svg>
        </ParallaxLayer>
      ))}
    </Parallax>
  );
};

export default App;
