import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Slider from '@mui/joy/Slider';
import Typography from '@mui/joy/Typography';

export default function Step3() {
  const [budget, setBudget] = React.useState(5000);

  const handleChange = (event, newValue) => {
    setBudget(newValue);
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
        <h2>Étape 3 : Sélectionnez votre budget</h2>
        <Typography gutterBottom>
          Définissez le budget que vous prévoyez pour votre événement.
        </Typography>
        <Typography variant="h4" sx={{ mt: '16px' }}>
          ${budget}
        </Typography>
        <Slider
          value={budget}
          onChange={handleChange}
          min={1000}
          max={10000}
          step={100}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `$${value}`}
          sx={{ mt: '24px' }}
        />
      </CardContent>
    </Card>
  );
}
