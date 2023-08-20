import { motion } from "framer-motion";
import styled from "styled-components";
import * as React from "react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const StyledSvg = styled(motion.svg)`
  width: 600px;
  height: 600px;
`;

const StyledCircle = styled(motion.circle)`
  stroke: #ff0055;
  stroke-width: 20px;
  stroke-linecap: round;
  fill: transparent;
`;

const CircleText = styled.text`
  fill: white;
  font-size: 18px;
  text-anchor: middle;
  dominant-baseline: central;
`;

export default function Square({ children }) {
  return (
    <StyledSvg initial="hidden" animate="visible">
      <StyledCircle
        width="400"
        cx="300"
        cy="300"
        r="250"
        stroke="#00cc88"
        variants={draw}
        custom={5}
      />
      <CircleText x="300" y="300">
        {children}
      </CircleText>
    </StyledSvg>
  );
}
