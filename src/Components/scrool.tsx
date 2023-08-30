import React from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  imageSrc: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ imageSrc, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <img src={imageSrc} alt="" className="rounded-image" />
      </motion.div>
    </motion.div>
  );
}

const food: [string, number, number][] = [
  ["https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/368007507_243121005350284_2509348996313371806_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGcfUOm4D1D6WJnWHwa-2OUXvkxiFYqyYpe-TGIVirJirdwzS_K9MoAO82FqJkGayzmyXPh9eeRHcbk9CcnT5Az&_nc_ohc=YO0y1PNYBqQAX8izEe6&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfCIrkrZ4h56SQlfStGDeP8DUzQWDrKKvR6EQ4xKkh1f4w&oe=64F3A3DF", 340, 10],
  ["https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365776557_238844759111242_528672792154084087_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEHOstum0xE550qSnbyM2S-glSAZ2JFch6CVIBnYkVyHkvbAcXbNSIO4w8unaAQFWAf-WLd86ZKrO0sKLkc7ZJm&_nc_ohc=GMCSZB23a-gAX-bDVjS&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfB-lMJfjc6_IsPIWbNQ1iJPsKMJ59qDJkTfO6pi2OY3wQ&oe=64F46CDA", 20, 40],
  ["https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=8YGR2cQiEQgAX8t0_ib&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfDhYBfb7ylVnO6xgWpb3MdXTgCIvwAECV0h_-pMrfKQUQ&oe=64F4D5C8", 60, 90],
  ["https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/363979827_238828579112860_3648883382059748956_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG1qdsPlz86ROTC1biR-j2x_UczD4QeLF_9RzMPhB4sX21lABeDORy5sLp2luqZFw6wiJxAASC-23ONKx8YbVqo&_nc_ohc=Ou5PhPm1kqIAX8k8WiX&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfAzDChxABeFQI7pz_ETfYEGJWiFYd9xTizjoLn_nRR4jg&oe=64F47EF9", 80, 120],
  ["https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/332046176_210645078213676_1962009040011621716_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFQTLVulTBUAuXJj-z6cybf471dtbgPUqzjvV21uA9SrNU0vA-0g_4ZxKLAxMStYiD8erF2QA_Da_jsIUV4IN_h&_nc_ohc=nafMtLHAdmUAX_J4tC5&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfB8H1B3wV8dyHpP3qkFlVygv4kp1pnHnMVccr73fpN10g&oe=64F4DC8E", 100, 140],
  
];

export default function App() {
  return (
    <div id="root">
      {food.map(([imageSrc, hueA, hueB]) => (
        <Card imageSrc={imageSrc} hueA={hueA} hueB={hueB} key={imageSrc} />
      ))}
      <style>
        {`
          #root {
            margin: 100px auto;
            // max-width: 500px;
            padding-bottom: 100px;
          }

          .card {
            font-size: 164px;
            width: 300px;
            height: 430px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 20px;
            box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
              0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
              0 0 16px hsl(0deg 0% 0% / 0.075);
            transform-origin: 10% 60%;
          }

          .card-container {
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding-top: 20px;
            margin-bottom: -120px;
          }

          .splash {
            position: absolute;
            width: 800px;
            height: 430px;
            // display: flex;
            align-items: center;
            justify-content: center;
            bottom: 0;
            left: 1;
            right: 0;
            top: 0;
            clip-path: path(
              "M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
            );
          }
          .rounded-image {
            width: 500px;
            height: 500px;
            border-radius: 20px; /* Ajoutez le rayon de bordure que vous souhaitez */
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); /* Ajoutez l'ombre souhaitée */
          
          }
          .scroll-section::-webkit-scrollbar {
            width: 0.5em; /* Largeur de la barre de défilement */
          }

          .scroll-section::-webkit-scrollbar-track {
            background: transparent; /* Couleur de fond de la barre de défilement */
          }

          .scroll-section::-webkit-scrollbar-thumb {
            background: transparent; /* Couleur de la poignée de la barre de défilement */
          }
        `}
      </style>
    </div>
  );
}
