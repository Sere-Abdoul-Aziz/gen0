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

const AboutPage = () => {
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
              "https://firebasestorage.googleapis.com/v0/b/geno-41aa5.appspot.com/o/video%2Fvidban3.mp4?alt=media&token=fab98866-6cb5-40e0-9073-65c9a3c4d82f"
            }
            Titre={"A Propos"} 
            poster={""}
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
    Introduction
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
        </Container>
      </section>
      {/* cartes */}
      <section  style={{ 
        marginTop: '100px',
        display: 'flex',
        // justifyContent: 'space-between'
      }}
      >
      <div style={{ 
        flex: 1,
        margin: 'auto',
        position: 'relative',
        }}>
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 280,
        overflow: 'auto',
        resize: 'horizontal',
        '--icon-size': '100px',
        left: 55,
      }}
    >
      <CardOverflow variant="solid" color="success">
        <AspectRatio
          variant="outlined"
          color="warning"
          ratio="1"
          sx={{
            m: 'auto',
            transform: 'translateY(50%)',
            borderRadius: '50%',
            width: 'var(--icon-size)',
            boxShadow: 'sm',
            bgcolor: 'background.surface',
            position: 'relative',
          }}
        >
          <div>
            <AutoAwesomeRoundedIcon color="warning" sx={{ fontSize: '4rem' }} />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
      QUE FAISONS-NOUS ?
      </Typography>
      <CardContent sx={{ maxWidth: '40ch' }}>
        You just gain one Cookhat for Salad cooking. Share your achievement with your
        friends.
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
        sx={{
          '--Button-radius': '40px',
          width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
          
        }}
      >
      </CardActions>
    </Card>
      </div>
      <div style={{ 
        flex: 1,
        margin: 'auto',
        position: 'relative',
        }}>
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 280,
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
        '--icon-size': '100px',
        left: 55,
      }}
    >
      <CardOverflow variant="solid" color="success">
        <AspectRatio
          variant="outlined"
          color="warning"
          ratio="1"
          sx={{
            m: 'auto',
            transform: 'translateY(50%)',
            borderRadius: '50%',
            width: 'var(--icon-size)',
            boxShadow: 'sm',
            bgcolor: 'background.surface',
            position: 'relative',
          }}
        >
          <div>
            <Diversity1RoundedIcon color="primary" sx={{ fontSize: '4rem' }} />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
        QUI SOMMES-NOUS ?
      </Typography>
      <CardContent sx={{ maxWidth: '40ch' }}>
        You just gain one Cookhat for Salad cooking. Share your achievement with your
        friends.
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
        sx={{
          '--Button-radius': '40px',
          width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
          
        }}
      >
      </CardActions>
    </Card>
      </div>
      <div style={{ 
        flex: 1,
        margin: 'auto',
        position: 'relative',
        }}>
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 280,
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
        '--icon-size': '100px',
        left: 55,
      }}
    >
      <CardOverflow variant="solid" color="success">
        <AspectRatio
          variant="outlined"
          color="warning"
          ratio="1"
          sx={{
            m: 'auto',
            transform: 'translateY(50%)',
            borderRadius: '50%',
            width: 'var(--icon-size)',
            boxShadow: 'sm',
            bgcolor: 'background.surface',
            position: 'relative',
          }}
        >
          <div>
            <RocketLaunchRoundedIcon color="danger" sx={{ fontSize: '4rem' }} />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
      NOTRE OBJECTIF ET MISSION
      </Typography>
      <CardContent sx={{ maxWidth: '40ch' }}>
        You just gain one Cookhat for Salad cooking. Share your achievement with your
        friends.
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
        sx={{
          '--Button-radius': '40px',
          width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
          
        }}
      >
      </CardActions>
    </Card>
      </div>

      </section>
    </div>
  );
};

export default AboutPage;