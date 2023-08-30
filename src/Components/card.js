import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardCover from '@mui/joy/CardCover';
// import Typography from '@mui/joy/Typography';
import { motion } from "framer-motion"; // Importer motion depuis Framer Motion



export default function CardVariants() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 500,
        maxWidth: 800,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 8,
      }}
    >
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Card variant="soft"
      sx={{
        borderRadius: '30px 0px 30px 30px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
      
       height: 200,
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
      background: `url("https://i.pinimg.com/564x/20/7a/15/207a1538554f53e0422bff213502bd1b.jpg")`,
      backgroundPosition: '100% 20%', // Positionner l'image au centre en bas de la CardCover
      backgroundSize: 'cover', // Ajuster la taille de l'image pour couvrir toute la CardCover
    }}
  />
      <CardContent>
        
      </CardContent>
    </Card>
    </motion.div>
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
    <Card variant="soft"
      sx={{
        borderRadius: '0px 100px 0px 100px',
        height: 200, // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
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
      background: `url("https://i.pinimg.com/564x/62/58/3d/62583d7d3574baa44a36a601652d0c2e.jpg")`,
      backgroundPosition: '100% 20%', // Positionner l'image au centre en bas de la CardCover
      backgroundSize: 'cover', // Ajuster la taille de l'image pour couvrir toute la CardCover
    }}
  />
      <CardContent>
        
      </CardContent>
    </Card>
    </motion.div>
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
    <Card variant="soft"
      sx={{
        borderRadius: '100px 0px 100px 100px',
        height: 200, // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
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
      background: `url("https://i.pinimg.com/564x/7d/e7/4a/7de74a7a93ca3b206a884777b065383a.jpg")`,
      backgroundPosition: '100% 50%', // Positionner l'image au centre en bas de la CardCover
      backgroundSize: 'cover', // Ajuster la taille de l'image pour couvrir toute la CardCover
    }}
  />
      <CardContent>
        
      </CardContent>
    </Card>
    </motion.div>
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
    <Card variant="soft"
      sx={{
        borderRadius: '100px 100px 100px 100px',
        height: 200, // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
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
      background: `url("https://i.pinimg.com/564x/ae/30/ac/ae30ac61a5ad86bd513fdd55c1b652e4.jpg")`,
      backgroundPosition: '100% 50%', // Positionner l'image au centre en bas de la CardCover
      backgroundSize: 'cover', // Ajuster la taille de l'image pour couvrir toute la CardCover
    }}
  />
      <CardContent>
        
      </CardContent>
    </Card>
    </motion.div>
    </Box>
  );
}
