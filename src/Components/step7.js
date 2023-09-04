import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

export default function Step7() {
  const [activityList, setActivityList] = React.useState([
    { time: '09:00 AM', activity: 'Accueil des invités' },
    { time: '10:00 AM', activity: 'Séance douverture' },
    { time: '11:30 AM', activity: 'Pause café' },
  ]);

  const addActivity = () => {
    const newActivity = { time: '', activity: '' };
    setActivityList([...activityList, newActivity]);
  };

  const handleActivityChange = (index, field, value) => {
    const updatedActivities = [...activityList];
    updatedActivities[index][field] = value;
    setActivityList(updatedActivities);
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
          Étape 9 : Planification des activités
        </Typography>
        {activityList.map((activity, index) => (
          <div key={index} style={{ marginBottom: '16px' }}>
            <Input
              type="text"
              placeholder="Heure"
              value={activity.time}
              onChange={(e) =>
                handleActivityChange(index, 'time', e.target.value)
              }
              style={{ marginRight: '16px' }}
            />
            <Input
              type="text"
              placeholder="Activité"
              value={activity.activity}
              onChange={(e) =>
                handleActivityChange(index, 'activity', e.target.value)
              }
            />
          </div>
        ))}
        <Button variant="contained" color="primary" onClick={addActivity}>
          Ajouter une activité
        </Button>
      </CardContent>
    </Card>
  );
}