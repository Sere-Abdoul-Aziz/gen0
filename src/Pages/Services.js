import React from 'react';
import { Container, Typography, Card, CardContent, CardCover,CardOverflow, AspectRatio, Button, CardActions } from '@mui/joy';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Navbar from '../Components/navbar';
import Banner from '../Components/banner';
import Ban from '../Components/ban';
import CardVariants from '../Components/card';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';

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
          <Ban
            videoUrl={
              "https://firebasestorage.googleapis.com/v0/b/geno-41aa5.appspot.com/o/video%2Fvidban2.mp4?alt=media&token=968f3c04-ed04-4ce2-9d72-3fd3397392ac"
            }
            Titre={"Nos Services"}
            poster={"https://firebasestorage.googleapis.com/v0/b/geno-41aa5.appspot.com/o/video%2FvidBan1.png?alt=media&token=8d10867a-c7e2-482b-913a-6a8f06330d69"}
          />
        </div>
      </header>

      <section  >
        <Container >
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginTop: '100px',
          marginBottom: '100px',
          
          position: 'relative',
           }}>
      {/* Texte "Introduction" à gauche */}
      <div style={{display: 'flex',}}
       >
        <div flex={1}>
  <Typography
    variant="h1"
    color="neutral"
    gutterBottom
    sx={{
      fontWeight: 'bold',
      fontSize: '4rem', // Ajustez la taille de police selon votre préférence
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Ajoutez une ombre au texte
      color: 'red', // Changez la couleur du texte selon votre préférence
    }}
  >
    Services
  </Typography>
</div>

       
      

      {/* Paragraphe à droite */}
      <div  flex={1}
      >
        <Card variant="soft" sx={{ 
          borderRadius: '8px',
          width: '50%',
          height: '200px',
          left: 200,
           }}>
          <CardContent>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
              tortor non justo ultrices facilisis vel id sapien.jdoewfjiwohwogwqbdyuoywqdwqpwqo
            </Typography>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>

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
      {/* services */}

      <section  style={{ marginTop: '500px' }}
        
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