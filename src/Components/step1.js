import * as React from 'react';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import Typography from '@mui/joy/Typography';

export default function Step1() {
  const menus = React.useRef<Array<HTMLButtonElement>>([]);
  const itemProps = {
    onClick: () => menus.current[0]?.focus(),
  };

  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
        Étape 1 : Type d'événement
      </Typography>
      <Menu onClose={() => menus.current[0]?.focus()}>
        <ListItem nested>
          <List aria-label="Corporate Events">
            <MenuItem {...itemProps}>Corporate Events</MenuItem>
            <MenuItem {...itemProps}>CONFÉRENCES</MenuItem>
            <MenuItem {...itemProps}>TEAM BUILDING</MenuItem>
            <MenuItem {...itemProps}>LANCEMENT DE PRODUIT</MenuItem>
            <MenuItem {...itemProps}>JOURNÉE PORTE OUVERTE</MenuItem>
            <MenuItem {...itemProps}>DÎNER GALA</MenuItem>
            <MenuItem {...itemProps}>SALON PROFESSIONNEL ET EXPOSITION</MenuItem>
            <MenuItem {...itemProps}>CONGRÈS</MenuItem>
            <MenuItem {...itemProps}>SÉMINAIRE</MenuItem>
            <MenuItem {...itemProps}>INCENTIVE</MenuItem>
            <MenuItem {...itemProps}>AFTERWORK</MenuItem>
            <MenuItem {...itemProps}>COLLOQUE</MenuItem>
            <MenuItem {...itemProps}>SOIRÉE PARTENAIRE</MenuItem>
            <MenuItem {...itemProps}>ANNIVERSAIRE D'ENTREPRISE</MenuItem>
          </List>
        </ListItem>
        <ListDivider />
        <ListItem nested>
          <List aria-label="Couple Events">
            <MenuItem {...itemProps}>Couple Events</MenuItem>
            <MenuItem {...itemProps}>MARIAGE COMPLET</MenuItem>
            <MenuItem {...itemProps}>DEMANDE EN MARIAGE</MenuItem>
            <MenuItem {...itemProps}>LUNE DE MIEL</MenuItem>
            <MenuItem {...itemProps}>ENTERREMENT DE VIE DE JEUNE FILLE/GARÇON</MenuItem>
            <MenuItem {...itemProps}>DINER ROMANTIQUE</MenuItem>
            <MenuItem {...itemProps}>WEEKEND ROMANTIQUE</MenuItem>
            <MenuItem {...itemProps}>ANNIVERSAIRE DE MARIAGE</MenuItem>
            <MenuItem {...itemProps}>SURPRISE</MenuItem>
          </List>
        </ListItem>
        <ListDivider />
        <ListItem nested>
          <List aria-label="Autres Events">
            <MenuItem {...itemProps}>Autres Events</MenuItem>
            <MenuItem {...itemProps}>FESTIVALS</MenuItem>
            <MenuItem {...itemProps}>CONCERTS</MenuItem>
            <MenuItem {...itemProps}>FOIRES</MenuItem>
            <MenuItem {...itemProps}>ANNIVERSAIRE</MenuItem>
            <MenuItem {...itemProps}>SURPRISE</MenuItem>
          </List>
        </ListItem>
      </Menu>
    </>
  );
}