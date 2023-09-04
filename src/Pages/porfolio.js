import React from 'react';
import DyPic from '../Components/mansory.tsx';
import Navbar from '../Components/navbar';

const portfolioItems = [
  {
    imageSrc: 'https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/360171506_223484917313893_6368954980875090223_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFp1Zi3LjxDJ8SYADH4173DksKdutQokh6Swp261CiSHorBecMSID38vmX1x1AfYC3IcuW2H6j6H466FxzPC6EC&_nc_ohc=A2J9WWxKWAIAX9IqQsd&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfA39oKMMpcY4p8sb5woUrYywdgOjX-4-2gartgwDXJIWA&oe=64E8BDBA',
    borderRadius: '30px 0px 30px 30px',
  },
  {
    imageSrc: 'https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/360161660_223484923980559_1529757444038052852_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHXMJR2k3uCng8VuxSlTwxOHZQwmwE6OZgdlDCbATo5mPyDBPzQeb1IIcyqorm3c6Kcd6dmTVKKker3OCxZcyFy&_nc_ohc=ofqM-SoSUJcAX8rA7NQ&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfCTbeWKsLPbUrMCxumhE9rAf4f2g8vsfk_ubPnknYB0Rw&oe=64E95770',
    borderRadius: '0px 100px 0px 100px',
  },
  // Ajoutez plus d'éléments de portfolio ici
];

const PortfolioPage = () => {
  return (
    <><Navbar /><DyPic /></>
  );
};

export default PortfolioPage;
