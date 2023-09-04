import React from 'react';
import { Card, CardCover, CardContent, Typography } from '@mui/joy';

export default function Banner({ imageUrl, Titre }) {
  return (
    <Card
      component="li"
      sx={{
        maxWidth: '90%',
        position: 'relative',
        overflow: 'hidden',
        // Définissez la hauteur de la bannière ici, par exemple :
        height: '400px', // Vous pouvez ajuster cette valeur en fonction de vos besoins
        //mettre au milieu
        margin: 'auto',
      }}
    >
      <CardCover>
        <img
          src={imageUrl}
          alt="Banner"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </CardCover>
      <CardContent
        // sx={{
        //   position: 'absolute',
        //   top: '50%', // Centre le contenu verticalement
        //   left: 0,
        //   width: '100%',
        //   backgroundColor: 'rgba(0, 0, 0, 0.6)',
        //   transform: 'translateY(-50%)', // Centre le contenu verticalement
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