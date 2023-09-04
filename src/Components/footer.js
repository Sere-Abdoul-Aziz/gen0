import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/joy';
import { Facebook, Twitter, Instagram, Email } from '@mui/icons-material';

const F00ter = () => {
  return (
    <Box sx={{ backgroundColor: '#20232a', color: 'white', padding: '40px 0' }}>
      <Container>
        <Typography variant="h5" gutterBottom>
          Restez connecté
        </Typography>
        <Typography variant="body1" gutterBottom>
          Suivez-nous sur les réseaux sociaux pour rester à jour avec nos dernières nouvelles et événements.
        </Typography>
        <IconButton color="inherit" aria-label="Facebook">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" aria-label="Twitter">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" aria-label="Instagram">
          <Instagram />
        </IconButton>
        <IconButton color="inherit" aria-label="Email">
          <Email />
        </IconButton>
      </Container>
      <Box sx={{ borderTop: '1px solid #464d56', marginTop: '20px', paddingTop: '20px' }}>
        <Container>
          <Typography variant="body2">
            © {new Date().getFullYear()} Geno. Tous droits réservés.
          </Typography>
          <Link color="inherit" href="/terms">
            Conditions d'utilisation
          </Link>
          <Link color="inherit" href="/privacy">
            Politique de confidentialité
          </Link>
        </Container>
      </Box>
    </Box>
  );
};
export default F00ter;