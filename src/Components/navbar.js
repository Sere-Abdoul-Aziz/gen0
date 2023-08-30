import React, { useState, useEffect } from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import '../style/navbar.css';


export default function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
     
     <div className={`navbar-container ${navbarVisible ? 'visible' : 'hidden'}`}>
      <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' }}>
        <TabList
          disableUnderline
          sx={{
            p: 0.5,
            gap: 1,
            borderRadius: 'xl',
            bgcolor: 'transparent', /* Fond transparent */
            display: 'flex',
            justifyContent: 'center', /* Centrage horizontal */
          }}
        >
          <Tab disableIndicator className="nav-tab" label="Accueil" >Accueil </Tab>
          <Tab disableIndicator className="nav-tab" label="Événements" > Événements</Tab>
          <Tab disableIndicator className="nav-tab" label="Devis Gratuit" > Devis Gratuit</Tab>
          <Tab disableIndicator className="nav-tab" label="Contact" >Contact </Tab>
        </TabList>
      </Tabs>
      </div>
    </div>
  );
}
