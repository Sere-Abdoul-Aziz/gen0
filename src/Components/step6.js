import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';

export default function Step6() {
  const [venueDetails, setVenueDetails] = React.useState({
    venueName: '',
    venueLocation: '',
    venueCapacity: '',
  });

  const handleVenueChange = (field, value) => {
    setVenueDetails({
      ...venueDetails,
      [field]: value,
    });
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
          Étape 8 : Sélection du lieu
        </Typography>
        <Input
          type="text"
          placeholder="Nom du lieu"
          value={venueDetails.venueName}
          onChange={(e) => handleVenueChange('venueName', e.target.value)}
          sx={{ mb: '16px' }}
        />
        <Input
          type="text"
          placeholder="Emplacement du lieu"
          value={venueDetails.venueLocation}
          onChange={(e) => handleVenueChange('venueLocation', e.target.value)}
          sx={{ mb: '16px' }}
        />
        <Input
          type="text"
          placeholder="Capacité du lieu"
          value={venueDetails.venueCapacity}
          onChange={(e) => handleVenueChange('venueCapacity', e.target.value)}
        />
      </CardContent>
    </Card>
  );
}