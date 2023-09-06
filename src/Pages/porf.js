import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/joy';
import { motion } from 'framer-motion';
import Cart from '../Components/cart';
import Navbar from '../Components/navbar';
import F00ter from '../Components/footer';
import Ban from '../Components/ban';

const PortfolioPage = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Mariage élégant',
      location: 'Château de rêve',
      image: 'https://i.pinimg.com/564x/dc/62/b5/dc62b547913255a0492b04076012d6b6.jpg',
      description: 'EventPlanner 1',
    },
    {
      id: 2,
      title: 'Soirée VIP',
      location: 'Lounge exclusif',
      image: 'https://i.pinimg.com/564x/57/51/16/5751161f1e7375f3651289634d0537a9.jpg',
      description: 'EventPlanner 2',
    },
    {
        id: 3,
        title: 'Soirée VIP',
        location: 'Lounge exclusif',
        image: 'https://i.pinimg.com/564x/57/51/16/5751161f1e7375f3651289634d0537a9.jpg',
        description: 'EventPlanner 3',
      },
      {
        id: 4,
        title: 'Soirée VIP',
        location: 'Lounge exclusif',
        image: 'https://i.pinimg.com/564x/57/51/16/5751161f1e7375f3651289634d0537a9.jpg',
        description: 'EventPlanner 4',
      },
    // Ajoutez d'autres éléments de portfolio ici
  ];

  return (
    <div 
    style={{backgroundColor: '#f7f3eb'}}
   
    ><Navbar />
              <Ban
            videoUrl={
              "https://firebasestorage.googleapis.com/v0/b/geno-41aa5.appspot.com/o/video%2FDesign%20sans%20titre.mp4?alt=media&token=858248a2-0163-454d-8871-04280a6fbc25"
            }
            Titre={"Portfolio"} 
            poster={""}
           
          />
    <Box sx={{ padding: '80px 0' }}>
          <Container>
              <Typography variant="h2" align="center" sx={{ mb: 4 }}>
                  Notre Portfolio d'Événements
              </Typography>
              <Grid container spacing={3}>
                  {portfolioItems.map((item) => (
                      <Grid item xs={12} md={6} key={item.id}>
                          <motion.div
                              initial={{ opacity: 0, translateY: 20 }}
                              animate={{ opacity: 1, translateY: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                          >
                              <Cart
                                  title={item.title}
                                  location={item.location}
                                  image={item.image}
                                  description={item.description} />
                          </motion.div>
                      </Grid>
                  ))}
              </Grid>
          </Container>
      </Box>
      <footer>
        <F00ter/>
        </footer>
      </div>
  );
};

export default PortfolioPage;