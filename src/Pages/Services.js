import React from 'react';
import { Container, Typography, Card, CardContent, CardCover } from '@mui/joy';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Navbar from '../Components/navbar';
import Banner from '../Components/banner';
import CardVariants from '../Components/card';

const ServicesPage = () => {
  const [cardVariantsRef, cardVariantsInView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });
  return (
    <div>
      {/* Bannière */}
      <Navbar />
      <header>
        <div className="banner">
          <Banner
            imageUrl={
              "https://firebasestorage.googleapis.com/v0/b/geno-41aa5.appspot.com/o/banner%2FAbout%20us.png?alt=media&token=db0c156b-6ffd-47a5-bf6e-7431f0506cdd"
            }
            Titre={"Nos Services"} // Titre doit être passé en tant que prop au composant Banner
          />
        </div>
      </header>

      <section >
        <Container>
          <Typography variant="h4" gutterBottom>
            Introduction
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            tortor non justo ultrices facilisis vel id sapien.
          </Typography>
          <div style={{ position: 'relative' }}>
            {/* Contenu gauche */}
            <Card
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '50%',
                height: '300px',
                zIndex: 1,
              }}
            >
              <CardCover>
                <img
                  src="https://e3events.com.au/wp-content/uploads/2022/08/eventum-img8-1024x683.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  alt="Image Gauche"
                />
              </CardCover>
            </Card>

            {/* Contenu droit */}
            <Card
              style={{
                position: 'absolute',
                right: 0,
                top: 40,
                width: '50%',
                height: '200px',
                zIndex: 2,
                border: '15px solid white'
              }}
              
            >
              <CardCover>
                <img
                  src="https://e3events.com.au/wp-content/uploads/2022/08/eventum-img8-1024x683.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  alt="Image Droite"
                />
              </CardCover>
            </Card>
          </div>
        </Container>
      </section>
      <section  style={{ marginTop: '400px' }}
        
      >
        <motion.div
          ref={cardVariantsRef}
          initial={{ opacity: 0, y: -100 }}
          animate={cardVariantsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            width: '100%',
            marginLeft: '250px',
            bottom: '500px',

          }}
        >
          <CardVariants />
        </motion.div>
        

      </section>
    </div>
  );
};

export default ServicesPage;