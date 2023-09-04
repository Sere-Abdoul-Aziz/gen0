import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

const Gesture = () => {
  return (
    <Box
      sx={{
        width: '200px',
        height: '200px',
        backgroundColor: '#2E765E', // Couleur avec effet de flou transparent
        backdropFilter: 'blur(5px)', // Effet de flou
        position: 'fixed', // Position fixe pour le rendre visible en permanence
        top: '50%', // Centrage vertical
        left: '30px', // Position de gauche ajustable
        transform: 'translateY(-50%)', // Centrage vertical
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '20px',
      }}
    >
      <Button
        variant="outlined"
        sx={{
          width: '100%',
          marginBottom: '10px',
        }}
        color="neutral"
      >
        Corporate Events
      </Button>
      <Button
        variant="outlined"
        sx={{
          width: '100%',
          marginBottom: '10px',
        }}
        color="neutral"
      >
        Couple Events
      </Button>
      <Button
        variant="outlined"
        sx={{
          width: '100%',
        }}
        color="neutral"
      >
        Autres Events
      </Button>
    </Box>
  );
};

export default Gesture;
