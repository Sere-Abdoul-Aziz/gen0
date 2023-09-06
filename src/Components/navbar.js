import React, { useState, useEffect } from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Menu from '@mui/joy/Menu';
import MenuItem, { menuItemClasses } from '@mui/joy/MenuItem';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListDivider from '@mui/joy/ListDivider';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import '../style/navbar.css';
import { Link } from "react-router-dom";
import EventOrganizer from '../Pages/EventOrganizer';
import Button from '@mui/joy/Button';

const MenuBarButton = React.forwardRef(
  ({ children, menu, open, onOpen, onKeyDown, ...props }, ref) => {
    return (
      <Dropdown open={open} onOpenChange={onOpen}>
        <MenuButton
          {...props}
          slots={{ root: ListItemButton }}
          ref={ref}
          role="menuitem"
          variant={open ? 'soft' : 'plain'}
        >
          {children}
        </MenuButton>
        {React.cloneElement(menu, {
          slotProps: {
            listbox: {
              id: `toolbar-example-menu-${children}`,
              'aria-label': children,
            },
          },
          placement: 'bottom-start',
          disablePortal: false,
          variant: 'soft',
          sx: (theme) => ({
            width: 288,
            boxShadow: '0 2px 8px 0px rgba(0 0 0 / 0.38)',
            '--List-padding': 'var(--ListDivider-gap)',
            '--ListItem-minHeight': '32px',
            [`&& .${menuItemClasses.root}`]: {
              transition: 'none',
              '&:hover': {
                ...theme.variants.solid.primary,
                [`& .${typographyClasses.root}`]: {
                  color: 'inherit',
                },
              },
            },
          }),
        })}
      </Dropdown>
    );
  },
);

export default function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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

  const menus = React.useRef([]);
  const [menuIndex, setMenuIndex] = React.useState(null);

  const renderShortcut = (text) => (
    <Typography level="body-sm" textColor="text.tertiary" ml="auto">
      {text}
    </Typography>
  );

  const openNextMenu = () => {
    if (typeof menuIndex === 'number') {
      if (menuIndex === menus.current.length - 1) {
        setMenuIndex(0);
      } else {
        setMenuIndex(menuIndex + 1);
      }
    }
  };

  const openPreviousMenu = () => {
    if (typeof menuIndex === 'number') {
      if (menuIndex === 0) {
        setMenuIndex(menus.current.length - 1);
      } else {
        setMenuIndex(menuIndex - 1);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      openNextMenu();
    }
    if (event.key === 'ArrowLeft') {
      openPreviousMenu();
    }
  };

  const createHandleButtonKeyDown = (index) => (event) => {
    if (event.key === 'ArrowRight') {
      if (index === menus.current.length - 1) {
        menus.current[0]?.focus();
      } else {
        menus.current[index + 1]?.focus();
      }
    }
    if (event.key === 'ArrowLeft') {
      if (index === 0) {
        menus.current[menus.current.length]?.focus();
      } else {
        menus.current[index - 1]?.focus();
      }
    }
  };

  const itemProps = {
    onClick: () => setMenuIndex(null),
    onKeyDown: handleKeyDown,
  };

  return (
    <div>

      <div className={`navbar-container ${navbarVisible ? 'visible' : 'hidden'}`}>
        <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' }}>
          <div className="navbar-content">
            <div className="navbar-left">
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
                <Link to="/" className="link-style" >
                  <Tab disableIndicator className="nav-tab" label="Accueil" >Accueil </Tab>
                </Link>
                <Button className="nav-tab" variant="plain" onClick={handleOpen}>

                <Tab disableIndicator className="nav-tab" label="Event"  >Event </Tab>
                
                </Button>
                <Link to="/Services" className="link-style" >
                  <Tab disableIndicator className="nav-tab" label="Accueil" >Services </Tab>
                </Link>
                
              
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <div>
                    
                    <EventOrganizer />
                  </div>
                </Modal>
              </TabList>
            </div>
            <div className="navbar-center">
              <img
                className="navbar-logo"
                src='https://firebasestorage.googleapis.com/v0/b/geno-41aa5.appspot.com/o/logo%2Fwedding_logo.jpg?alt=media&token=d9c4069d-d909-45fc-a53a-894500aae958'
                alt="Logo"
              />
            </div>
            <div className="navbar-right">
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
                <Link to="/Porfolio" className="link-style">
                  <Tab disableIndicator className="nav-tab" label="Porfolio" >Porfolio </Tab>
                </Link>
                <Link to="/About" className="link-style" >
                  <Tab disableIndicator className="nav-tab" label="A Propos" >A Propos </Tab>
                </Link>
                <Link to="/Contact" className="link-style" >
                <Tab disableIndicator className="nav-tab" label="Contact" >Contact </Tab>
                </Link>

                

              </TabList>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
