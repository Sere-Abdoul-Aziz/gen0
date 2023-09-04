import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input'; // Importez le composant Input
import Button from '@mui/joy/Button'; // Importez le composant Button

export default function Step4() {
  const [programItems, setProgramItems] = React.useState([
    { time: '09:00 AM', event: 'Accueil et enregistrement' },
    { time: '10:00 AM', event: 'Séance douverture' },
    { time: '11:30 AM', event: 'Pause café' },
  ]);

  const addProgramItem = () => {
    const newItem = { time: '', event: '' };
    setProgramItems([...programItems, newItem]);
  };

  const handleProgramItemChange = (index, field, value) => {
    const updatedItems = [...programItems];
    updatedItems[index][field] = value;
    setProgramItems(updatedItems);
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
          Étape 4 : Programme de l'événement
        </Typography>
        {programItems.map((item, index) => (
          <div key={index} style={{ marginBottom: '16px' }}>
            <Input
              type="text"
              placeholder="Heure"
              value={item.time}
              onChange={(e) =>
                handleProgramItemChange(index, 'time', e.target.value)
              }
              style={{ marginRight: '16px' }}
            />
            <Input
              type="text"
              placeholder="Événement"
              value={item.event}
              onChange={(e) =>
                handleProgramItemChange(index, 'event', e.target.value)
              }
            />
          </div>
        ))}
        <Button variant="contained" color="primary" onClick={addProgramItem}>
          Ajouter un élément de programme
        </Button>
      </CardContent>
    </Card>
  );
}