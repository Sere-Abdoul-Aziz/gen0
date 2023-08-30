import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import '../style/navbar.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import {Button, Grid, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, CardContent, Typography   } from '@mui/joy/';
import CardVariants from '../Components/card';
import CardCover from '@mui/joy/CardCover';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Box from '@mui/joy/Box';
import Navbar from '../Components/navbar';
import MediaCover from '../Components/picture';
import Scrool from '../Components/scrool.tsx';
import Square from '../Components/square.tsx';
import Gesture from '../Components/gesture.tsx';
import Slider from '../Components/slider';
import PortfolioPage from './porfolio';


const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visibleSections, setVisibleSections] = useState([]);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  const [cardVariantsRef, cardVariantsInView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });
  const [BoxRef, BoxInView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });
  const [B0xRef, B0xInView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });
  const [B1xRef, B1xInView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });
  const [B2xRef, B2xInView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  const [MediaCoverRef, MediaCoverInView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const calculateBackgroundColor = () => {
    // Calculate the percentage of scrolling progress
    const percentage = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;

    // Define your color stops based on scrolling progress
    if (percentage < 10) {
      return '#305421';
    } else if (percentage < 20) {
      return ' #40652f';
    } else if (percentage < 30) {
      return ' #507a3d';
    } else if (percentage < 40) {
      return ' #609e4c';
    } else if (percentage < 50) {
      return '#70b95a';
    } else if (percentage < 60) {
      return '#80d369';
    } else if (percentage < 70) {
      return ' #91e777';
    } else if (percentage < 80) {
      return '  #a1fc86';
    } else if (percentage < 90) {
      return ' #b1f5b6';
    } else if (percentage < 100) {
      return '#40652f';
    }

    return '#305421';
  };
  return (
    <div>
      <style>
        {`
          /* ... Your other styles ... */
          .main-section {
            background-color: ${calculateBackgroundColor()};
            transition: background-color 0.5s ease-in-out;
          }
        `}
      </style>

      <Navbar />


      <section
        style={{ backgroundSize: '50%', zIndex: -1 }}
        className="main-section"
      >
        <Slider />

      </section>
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Ajustez la hauteur à vos besoins
      }}
        className="main-section"
      >
        <motion.div
          ref={cardVariantsRef}
          initial={{ opacity: 0, y: -100 }}
          animate={cardVariantsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 1, delay: 0.2 }} // Ajustez ces valeurs selon vos préférences
        >
          <CardVariants />
        </motion.div>
        

      </section>

      <div >
        <h1>Notre Vision</h1>
      </div>
      <section style={{ padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="main-section" >
        <div style={{ flex: 1 }} >

          
          <motion.div
          ref={BoxRef}
          initial={{ opacity: 0, x: -100 }}
          animate={BoxInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.2 }} // Ajustez ces valeurs selon vos préférences
        >
          <Box
            sx={{
              width: '100%',
              height: 400,
              maxWidth: 500,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
            }}
          >


            <Card variant="soft"
              sx={{
                borderRadius: '200px 200px 30px 30px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
                marginLeft: '100px', // Ajuster la marge à droite pour décaler la carte
              }}

            >
              <CardCover
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 'inherit', // Hériter de la bordure de la Card
                  overflow: 'hidden', // Cacher tout contenu dépassant de la CardCover
                  //ajoute de l'ombre au composant


                }}
              >
                <img
                  src="https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/363979827_238828579112860_3648883382059748956_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG1qdsPlz86ROTC1biR-j2x_UczD4QeLF_9RzMPhB4sX21lABeDORy5sLp2luqZFw6wiJxAASC-23ONKx8YbVqo&_nc_ohc=Ou5PhPm1kqIAX8k8WiX&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfAzDChxABeFQI7pz_ETfYEGJWiFYd9xTizjoLn_nRR4jg&oe=64F47EF9"
                  // srcSet={ image }
                  loading="lazy"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // Ajuster l'image pour qu'elle couvre toute la CardCover
                  }}
                />
              </CardCover>

              <CardContent>
                {/* Contenu de la carte */}
              </CardContent>
            </Card>

          </Box>
        </motion.div>
        </div>



        
        <motion.div
          ref={BoxRef}
          initial={{ opacity: 0, x: 100 }}
          animate={BoxInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.2 }} // Ajustez ces valeurs selon vos préférences
        >
          <div style={{ flex: 1 }}>
          <h2>Notre Mission</h2>
          <p>Nous sommes là pour rendre votre événement inoubliable...</p>
        </div>
        </motion.div>




      </section>
      <div >
        <h1>Notre Vision</h1>
        <section className="main-section" >
          <div style={{ marginBottom: '150px' }}>
             <motion.div
          ref={MediaCoverRef}
          initial={{ opacity: 0, y: -10 }}
          animate={MediaCoverInView ? { opacity: 1, x: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 1, delay: 0.2 }} // Ajustez ces valeurs selon vos préférences
        >
          <MediaCover mwith={1000} height={100} image='https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=8YGR2cQiEQgAX8t0_ib&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfDhYBfb7ylVnO6xgWpb3MdXTgCIvwAECV0h_-pMrfKQUQ&oe=64F4D5C8' />
           
        </motion.div>
          </div>
          <div style={{ display: 'flex', marginBottom: '50px' }}>
            <div style={{ flex: 1, marginLeft: '100px' }}>
             <motion.div
          ref={MediaCoverRef}
          initial={{ opacity: 0, x: -100 }}
          animate={MediaCoverInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.2 }} // Ajustez ces valeurs selon vos préférences
        >
           <MediaCover mwith={300} height={300} image='https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=8YGR2cQiEQgAX8t0_ib&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfDhYBfb7ylVnO6xgWpb3MdXTgCIvwAECV0h_-pMrfKQUQ&oe=64F4D5C8' />
              
        </motion.div>
            </div>
            <div style={{ flex: 1 }}>
             <motion.div
          ref={MediaCoverRef}
          initial={{ opacity: 0, y: 100 }}
          animate={MediaCoverInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.2 }} // Ajustez ces valeurs selon vos préférences
        >
            <MediaCover mwith={300} height={300} image='https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=8YGR2cQiEQgAX8t0_ib&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfDhYBfb7ylVnO6xgWpb3MdXTgCIvwAECV0h_-pMrfKQUQ&oe=64F4D5C8' />
                
        </motion.div>
            </div>
            <div style={{ flex: 1, marginRight: '100px' }}>
              <motion.div
          ref={MediaCoverRef}
          initial={{ opacity: 0, x: 100 }}
          animate={MediaCoverInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.2 }} // Ajustez ces valeurs selon vos préférences
        >
             <MediaCover mwith={300} height={300} image='https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=8YGR2cQiEQgAX8t0_ib&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfDhYBfb7ylVnO6xgWpb3MdXTgCIvwAECV0h_-pMrfKQUQ&oe=64F4D5C8' />
                
        </motion.div>
            </div>

          </div>
          <div style={{ display: 'flex', marginBottom: '100px' }}>
            <div style={{ flex: 1, marginLeft: '110px' }}>
             <motion.div
          ref={MediaCoverRef}
          initial={{ opacity: 0, x: -100 }}
          animate={MediaCoverInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.2 }} // Ajustez ces valeurs selon vos préférences
        >
              <MediaCover mwith={500} height={300} image='https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=8YGR2cQiEQgAX8t0_ib&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfDhYBfb7ylVnO6xgWpb3MdXTgCIvwAECV0h_-pMrfKQUQ&oe=64F4D5C8' />
                
        </motion.div>
            </div>
            <div style={{ flex: 1, marginRight: '110px' }}>
             <motion.div
          ref={MediaCoverRef}
          initial={{ opacity: 0, x: -100 }}
          animate={MediaCoverInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.2 }} // Ajustez ces valeurs selon vos préférences
        >
         <MediaCover mwith={500} height={300} image='https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=8YGR2cQiEQgAX8t0_ib&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfDhYBfb7ylVnO6xgWpb3MdXTgCIvwAECV0h_-pMrfKQUQ&oe=64F4D5C8' />
                     
        </motion.div>
            </div>


          </div>


        </section>
        <section className="main-section" style={{ padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <div style={{ flex: 1 }}>
            <h2>Notre Mission</h2>
            <p>Nous sommes là pour rendre votre événement inoubliable...</p>
          </div>
          <div style={{ flex: 1 }} >
          <Box
              sx={{
                width: '100%',
                height: 400,
                maxWidth: 500,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',

              }}
            >
              <motion.div
          ref={B0xRef}
          initial={{ opacity: 0, x: -100 }}
          animate={B0xInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.2 }} // Ajustez ces valeurs selon vos préférences
        >
                <Card variant="soft"
                sx={{
                  borderRadius: '200px 30px 30px 30px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
                  marginLeft: '100px', // Ajuster la marge à droite pour décaler la carte
                  marginBottom: '50px',

                }}
              >
                <CardCover
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 'inherit', // Hériter de la bordure de la Card
                    overflow: 'hidden', // Cacher tout contenu dépassant de la CardCover
                    background: `url("https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/355745557_209922245336827_5388237656287230886_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHd5PkTAfqaXlsBlXxkm0yNAxXCoeQdPOADFcKh5B084BgmwrPg5Q3_WP7QlkOy0mk6XnCFDLu6naR-JeIgpb8Z&_nc_ohc=zvIAhItSingAX_3r2d-&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfCIDKkEuwkj7uj4_rAN6rVXhhkvtNJHHaFUzc2UmzBGkg&oe=64F48776")`,
                    backgroundPosition: '50% 0%', // Positionner l'image au centre en bas de la CardCover
                    backgroundSize: 'cover', // Ajuster la taille de l'image pour couvrir toute la CardCover
                  }}
                />
                
                <CardContent>
                  {/* Contenu de la carte */}
                </CardContent>
              </Card>
        </motion.div>
              
              <motion.div
          ref={B0xRef}
          initial={{ opacity: 0, x: 0,  y:100 }}
          animate={B0xInView ? { opacity: 1, x: 0, y:0 } : { opacity: 0, x: 0,  y:100 }}
          transition={{ duration: 1, delay: 0.2 }} // Ajustez ces valeurs selon vos préférences
        >
                <Card variant="soft"
                sx={{
                  borderRadius: '30px 30px 200px 30px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
                  marginLeft: '100px', // Ajuster la marge à droite pour décaler la carte
                }}
              >
                <CardCover
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 'inherit', // Hériter de la bordure de la Card
                    overflow: 'hidden', // Cacher tout contenu dépassant de la CardCover
                    background: `url("https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/355745557_209922245336827_5388237656287230886_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHd5PkTAfqaXlsBlXxkm0yNAxXCoeQdPOADFcKh5B084BgmwrPg5Q3_WP7QlkOy0mk6XnCFDLu6naR-JeIgpb8Z&_nc_ohc=zvIAhItSingAX_3r2d-&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfCIDKkEuwkj7uj4_rAN6rVXhhkvtNJHHaFUzc2UmzBGkg&oe=64F48776")`,
                    backgroundPosition: '50% 100%', // Positionner l'image au centre en bas de la CardCover
                    backgroundSize: 'cover', // Ajuster la taille de l'image pour couvrir toute la CardCover
                  }}
                />
                <CardContent>
                  {/* Contenu de la carte */}
                </CardContent>
              </Card>
        </motion.div>
              
            </Box>   
            
          </div>



        </section>
        <section className="main-section" style={{ padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>

          <div style={{ flex: 1 }} >
            
            <motion.div
          ref={B0xRef}
          initial={{ opacity: 0, x: 100 }}
          animate={B0xInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.2 }} // Ajustez ces valeurs selon vos préférences
        >
         <Box
              sx={{
                width: '100%',
                height: 400,
                maxWidth: 500,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',

              }}
            >
              <Card variant="soft"
                sx={{
                  borderRadius: '200px 200px 30px 30px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
                  marginLeft: '100px', // Ajuster la marge à droite pour décaler la carte
                  marginBottom: '50px',

                }}
              >
                <CardCover
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 'inherit', // Hériter de la bordure de la Card
                    overflow: 'hidden', // Cacher tout contenu dépassant de la CardCover
                    background: `url("https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/368007507_243121005350284_2509348996313371806_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGcfUOm4D1D6WJnWHwa-2OUXvkxiFYqyYpe-TGIVirJirdwzS_K9MoAO82FqJkGayzmyXPh9eeRHcbk9CcnT5Az&_nc_ohc=YO0y1PNYBqQAX8izEe6&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfCIrkrZ4h56SQlfStGDeP8DUzQWDrKKvR6EQ4xKkh1f4w&oe=64F3A3DF")`,
                    backgroundPosition: '50% 0%', // Positionner l'image au centre en bas de la CardCover
                    backgroundSize: 'cover', // Ajuster la taille de l'image pour couvrir toute la CardCover
                  }}
                />
                <CardContent>
                  {/* Contenu de la carte */}
                </CardContent>
              </Card>
              <Card variant="soft"
                sx={{
                  borderRadius: '30px 30px 200px 200px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
                  marginLeft: '100px', // Ajuster la marge à droite pour décaler la carte
                }}
              >
                <CardCover
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 'inherit', // Hériter de la bordure de la Card
                    overflow: 'hidden', // Cacher tout contenu dépassant de la CardCover
                    background: `url("https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/368007507_243121005350284_2509348996313371806_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGcfUOm4D1D6WJnWHwa-2OUXvkxiFYqyYpe-TGIVirJirdwzS_K9MoAO82FqJkGayzmyXPh9eeRHcbk9CcnT5Az&_nc_ohc=YO0y1PNYBqQAX8izEe6&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfCIrkrZ4h56SQlfStGDeP8DUzQWDrKKvR6EQ4xKkh1f4w&oe=64F3A3DF")`,
                    backgroundPosition: '50% 100%', // Positionner l'image au centre en bas de la CardCover
                    backgroundSize: 'cover', // Ajuster la taille de l'image pour couvrir toute la CardCover
                  }}
                />
                <CardContent>
                  {/* Contenu de la carte */}
                </CardContent>
              </Card>
            </Box>           
        </motion.div>
          </div>
          <div style={{ flex: 1 }}>
            <h2>Notre Mission</h2>
            <p>Nous sommes là pour rendre votre événement inoubliable...</p>
          </div>


        </section>
        <section className="scroll-section main-section" style={{ height: "calc(100vh - 100px)", overflow: "scroll", padding: '40px', alignItems: 'center', justifyContent: 'center', }} >
          <Scrool />
        </section>
        <section style={{ zIndex: 9999 }}>
          <Gesture />
        </section>
      </div>



    </div>
  );
};

export default HomePage;