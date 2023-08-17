import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function CardVariants() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 300,
        maxWidth: 500,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 2,
      }}
    >
      <Card variant="soft"
      sx={{
        borderRadius: '30px 0px 30px 30px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
      }}
    >
      <CardContent>
        
      </CardContent>
    </Card>

    <Card variant="soft"
      sx={{
        borderRadius: '0px 100px 0px 100px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
      }}
    >
      <CardContent>
        
      </CardContent>
    </Card>

    <Card variant="soft"
      sx={{
        borderRadius: '100px 0px 100px 100px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
      }}
    >
      <CardContent>
        
      </CardContent>
    </Card>

    <Card variant="soft"
      sx={{
        borderRadius: '100px 100px 100px 100px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
      }}
    >
      <CardContent>
        
      </CardContent>
    </Card>
    </Box>
  );
}
