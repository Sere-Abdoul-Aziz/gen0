import React from 'react';
import { Box, Card, CardCover, CardContent, Typography } from '@mui/joy';

export default function Ban({ videoUrl, Titre, poster }) {
  return (
    <Card sx={{ 
      maxWidth: '90%',
        position: 'relative',
        overflow: 'hidden',
        // Définissez la hauteur de la bannière ici, par exemple :
        height: '400px', // Vous pouvez ajuster cette valeur en fonction de vos besoins
        //mettre au milieu
        margin: 'auto',
      
      }}>
      <CardCover>
      <video
        autoPlay
        loop
        muted
        poster={poster}
        >
        <source
          src={videoUrl}
          type="video/mp4"
        />
      </video>
      </CardCover>
      <CardContent
        // sx={{
        //   position: 'absolute',
        //   bottom: 0,
        //   left: 0,
        //   width: '100%',
        //   backgroundColor: 'rgba(0, 0, 0, 0.6)',
        // }}
      >
        <Typography
          level="h1"
          fontWeight="lg"
          textColor="#fff"
          textAlign="center" // Centre le texte horizontalement
          p={2} // Ajoute de l'espace autour du texte
          noWrap
          variant= "plain"
          mt={{ xs: 12, sm: 18 }}
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          {Titre}
        </Typography>
      </CardContent>
    </Card>
  );
}