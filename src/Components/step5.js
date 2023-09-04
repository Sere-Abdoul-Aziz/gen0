import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input'; // Importez le composant Input
import Button from '@mui/joy/Button'; // Importez le composant Button
import Autocomplete from '@mui/joy/Autocomplete'; // Importez le composant Autocomplete

const statusOptions = ['Confirmé', 'En attente', 'Décliné'];

export default function Step5() {
  const [guests, setGuests] = React.useState([
    { name: 'John Doe', status: 'Confirmé' },
    { name: 'Jane Smith', status: 'Confirmé' },
    { name: 'Alice Johnson', status: 'En attente' },
  ]);

  const addGuest = () => {
    const newGuest = { name: '', status: '' };
    setGuests([...guests, newGuest]);
  };

  const handleGuestChange = (index, field, value) => {
    const updatedGuests = [...guests];
    updatedGuests[index][field] = value;
    setGuests(updatedGuests);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: '600px',
        mx: 'auto',
        my: '40px',
      }}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Étape 5 : Liste des invités
        </Typography>
        <List>
          {guests.map((guest, index) => (
            <ListItem key={index}>
              <div>
                <Input
                  type="text"
                  placeholder="Nom de l'invité"
                  value={guest.name}
                  onChange={(e) =>
                    handleGuestChange(index, 'name', e.target.value)
                  }
                />
              </div>
              <div>
                <Autocomplete
                  options={statusOptions}
                  value={guest.status}
                  onChange={(_, newValue) =>
                    handleGuestChange(index, 'status', newValue)
                  }
                  renderInput={(params) => <Input {...params} />}
                />
              </div>
            </ListItem>
          ))}
        </List>
        <Button variant="contained" color="primary" onClick={addGuest}>
          Ajouter un invité
        </Button>
      </CardContent>
    </Card>
  );
}