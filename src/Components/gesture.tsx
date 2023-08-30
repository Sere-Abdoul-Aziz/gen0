import * as React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Box from '@mui/joy/Box';
import { MenuItem } from './MenuItems.tsx';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};  

const Gesture = () => {
  const itemIds = [0, 1, 2, 3, 4]
  const itemHeight = 150;
  return (
    <div>
      <style>
        {`
          

          .example-container div {
            background: rgba(0, 0, 0, 0.2); /* Couleur de fond transparente */
            border-radius: 30px;
            width: 300px;
            height: 150px;
            filter: blur(0px); /* Effet de flou */
           // border: 2px solid black; /* Bordure noire solide */
            box-sizing: border-box;
            position: fixed;
            top: 30%; /* Centré verticalement */
            left: 0%;
          }

          .refresh {
            padding: 10px;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 10px;
            width: 20px;
            height: 20px;
            top: 10px;
            right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
        `}
      </style>
      <div className="example-container">
        <motion.ul variants={variants}>
          {itemIds.map(i => (
            <motion.li key={i} variants={variants} style={{ top: `${i * itemHeight}px` }} >
              <MenuItem i={i} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};
render(<Gesture />, document.getElementById("root"));
export default Gesture;