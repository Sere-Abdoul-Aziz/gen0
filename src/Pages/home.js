import React from 'react';
//import {Button, Grid, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, CardContent, Typography   } from '@mui/joy/';
import CardVariants from '../Components/card';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Box from '@mui/joy/Box';
import Navbar from '../Components/navbar';
import MediaCover from '../Components/picture';
 import Scrool from '../Components/scrool.tsx';
import Square from '../Components/square.tsx';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <section>
        <CardVariants />
      </section>
      <div >
        <h1>Notre Vision</h1>
      </div>
      <section style={{ padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink' }}>
        <div style={{ flex: 1 }} >
          
          <Box
            sx={{
              width: '100%',
              height: 400,
              maxWidth: 500,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
            }}
          >
           
            
            <Card variant="soft"
              sx={{
                borderRadius: '200px 200px 30px 30px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
                marginLeft: '100px', // Ajuster la marge à droite pour décaler la carte
              }}
            >
              
              <CardContent>
                {/* Contenu de la carte */}
              </CardContent>
            </Card>
            
          </Box>
        </div>
        
        
      
        <div style={{ flex: 1 }}>
            <h2>Notre Mission</h2>
            <p>Nous sommes là pour rendre votre événement inoubliable...</p>
          </div>
          
        
       

      </section>
      <div >
        <h1>Notre Vision</h1>
        <section>
          <div style={{ marginBottom: '150px' }}>
            <MediaCover mwith={1000} height={100} image='https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=rays1xmbVqYAX9ntJeL&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfBrQnZrVMrxjDY6Chg1jQYZRujgi37vJ_T3xeTDYWJyVg&oe=64E30988' />

          </div>
          <div style={{ display: 'flex', marginBottom: '50px' }}>
            <div style={{ flex: 1, marginLeft: '100px' }}>
              <MediaCover mwith={300} height={300} image='https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=rays1xmbVqYAX9ntJeL&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfBrQnZrVMrxjDY6Chg1jQYZRujgi37vJ_T3xeTDYWJyVg&oe=64E30988' />
            </div>
            <div style={{ flex: 1 }}>
              <MediaCover mwith={300} height={300} image='https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=rays1xmbVqYAX9ntJeL&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfBrQnZrVMrxjDY6Chg1jQYZRujgi37vJ_T3xeTDYWJyVg&oe=64E30988' />
            </div>
            <div style={{ flex: 1, marginRight: '100px' }}>
              <MediaCover mwith={300} height={300} image='https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=rays1xmbVqYAX9ntJeL&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfBrQnZrVMrxjDY6Chg1jQYZRujgi37vJ_T3xeTDYWJyVg&oe=64E30988' />
            </div>

          </div>
          <div style={{ display: 'flex', marginBottom: '100px' }}>
            <div style={{ flex: 1, marginLeft: '110px' }}>
              <MediaCover mwith={500} height={300} image='https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=rays1xmbVqYAX9ntJeL&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfBrQnZrVMrxjDY6Chg1jQYZRujgi37vJ_T3xeTDYWJyVg&oe=64E30988' />
            </div>
            <div style={{ flex: 1, marginRight: '110px' }}>
              <MediaCover mwith={500} height={300} image='https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=rays1xmbVqYAX9ntJeL&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfBrQnZrVMrxjDY6Chg1jQYZRujgi37vJ_T3xeTDYWJyVg&oe=64E30988' />
            </div>


          </div>


        </section>
        <section style={{ padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
          <div style={{ flex: 1 }}>
            <h2>Notre Mission</h2>
            <p>Nous sommes là pour rendre votre événement inoubliable...</p>
          </div>
          <div style={{ flex: 1 }} >
            <Box
              sx={{
                width: '100%',
                height: 400,
                maxWidth: 500,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
                
              }}
            >
              <Card variant="soft"
                sx={{
                  borderRadius: '200px 30px 30px 30px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
                  marginLeft: '100px', // Ajuster la marge à droite pour décaler la carte
                  marginBottom: '50px',
                  
                }}
              >
                <CardContent>
                  {/* Contenu de la carte */}
                </CardContent>
              </Card>
              <Card variant="soft"
                sx={{
                  borderRadius: '30px 30px 200px 30px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
                  marginLeft: '100px', // Ajuster la marge à droite pour décaler la carte
                }}
              >
                <CardContent>
                  {/* Contenu de la carte */}
                </CardContent>
              </Card>
            </Box>
          </div>



        </section>
        <section style={{ padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
          
          <div style={{ flex: 1 }} >
            <Box
              sx={{
                width: '100%',
                height: 400,
                maxWidth: 500,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
                
              }}
            >
              <Card variant="soft"
                sx={{
                  borderRadius: '200px 200px 30px 30px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
                  marginLeft: '100px', // Ajuster la marge à droite pour décaler la carte
                  marginBottom: '50px',
                  
                }}
              >
                <CardContent>
                  {/* Contenu de la carte */}
                </CardContent>
              </Card>
              <Card variant="soft"
                sx={{
                  borderRadius: '30px 30px 200px 200px', // Arrondir les coins supérieurs gauche, supérieurs droit et inférieur gauche
                  marginLeft: '100px', // Ajuster la marge à droite pour décaler la carte
                }}
              >
                <CardContent>
                  {/* Contenu de la carte */}
                </CardContent>
              </Card>
            </Box>
          </div>
          <div style={{ flex: 1 }}>
            <h2>Notre Mission</h2>
            <p>Nous sommes là pour rendre votre événement inoubliable...</p>
          </div>


        </section>
        <section style={{ height: "calc(100vh - 100px)", overflow: "scroll", padding: '40px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }} >
        <Scrool/> 
        
        </section>
      </div>



    </div>
  );
};

export default HomePage;



