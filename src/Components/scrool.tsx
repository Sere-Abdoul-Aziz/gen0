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
  ["https://scontent.foua2-1.fna.fbcdn.net/v/t39.30808-6/365776557_238844759111242_528672792154084087_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEHOstum0xE550qSnbyM2S-glSAZ2JFch6CVIBnYkVyHkvbAcXbNSIO4w8unaAQFWAf-WLd86ZKrO0sKLkc7ZJm&_nc_ohc=gRhdlzGPvrcAX88ZKoT&_nc_ht=scontent.foua2-1.fna&oh=00_AfCsK7Uj3zuTBiTX4YJYZsehspn2362OWYmy7mq2d3gRmg&oe=64E6951A", 340, 10],
  ["https://scontent.foua2-1.fna.fbcdn.net/v/t39.30808-6/368007507_243121005350284_2509348996313371806_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGcfUOm4D1D6WJnWHwa-2OUXvkxiFYqyYpe-TGIVirJirdwzS_K9MoAO82FqJkGayzmyXPh9eeRHcbk9CcnT5Az&_nc_ohc=1W3xUCdLxL4AX_lu3FU&_nc_ht=scontent.foua2-1.fna&oh=00_AfDRflN1Q_d3mh63il51OySvSxAttMRKdG1ECmEUJL0OJA&oe=64E7C65F", 20, 40],
  ["https://scontent.foua2-1.fna.fbcdn.net/v/t39.30808-6/365787115_238825899113128_4682528688286924241_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHR9547yPcSe0jrDxfYCggRzp45rc4dmWnOnjmtzh2ZaQ49J57RkXZ9FgXtIJ8qx3u4RediMzNzKYYwVzdafUwe&_nc_ohc=bxIfOvfKTQMAX-Qh-us&_nc_ht=scontent.foua2-1.fna&oh=00_AfD2D_eg5bKHJTN9zwNJqDZifTlwdwOEj-oUOi3_43O4Lg&oe=64E815A4", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320]
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
        `}
      </style>
    </div>
  );
}
