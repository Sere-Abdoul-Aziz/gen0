import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import Navbar from '../Components/navbar';

const ServicesPage = () => {
  const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Bannière */}
      <Navbar />
      <header>
        <div className="banner">
          </Banner>
        </div>
      </header>

      {/* Liste des Services */}
      <section>
        <Container>
          <Grid container spacing={3}>
            {/* Service 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={serviceVariants}
              >
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Service 1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description du service 1.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Service 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={serviceVariants}
              >
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Service 2
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description du service 2.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Ajoutez plus de services ici */}
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default ServicesPage;