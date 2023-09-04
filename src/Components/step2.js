import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Input from '@mui/joy/Input'; // Importez Input depuis @mui/joy

export default function Step2() {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: '400px',
        mx: 'auto',
        my: '40px',
        p: '16px',
      }}
    >
      <CardContent>
        <h2>Étape 2 : Détails de l'événement</h2>
        <Input
          type="date"
          label="Date de l'événement" // Vous pouvez également ajouter un label si nécessaire
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
          fullWidth
          sx={{ mb: '16px' }}
        />
        <Input
          label="Lieu de l'événement"
          variant="outlined"
          fullWidth
          sx={{ mb: '16px' }}
        />
        <Input
          label="Description de l'événement"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
      </CardContent>
    </Card>
  );
}