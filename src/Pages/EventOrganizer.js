import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';

import Step1 from '../Components/step1';
import Step2 from '../Components/step2';
import Step3 from '../Components/step3';
import Step4 from '../Components/step4';
import Step5 from '../Components/step5';
import Step6 from '../Components/step6';
import Step7 from '../Components/step7';

const EventOrganizer = () => {
  const [step, setStep] = React.useState(1);

  // Définissez la fonction handleSubmit ici
  const handleSubmit = () => {
    // Vous pouvez enregistrer les données ici
    console.log('Données de l\'événement enregistrées');
    // Réinitialisez les détails de l'événement ou effectuez d'autres actions
  };

  const handleNextStep = () => {
    if (step < 7) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Card
          variant="outlined"
          sx={{
            backgroundColor: 'white',
            borderRadius: '16px',
            p: 2,
            textAlign: 'center',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <CardContent>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}
            {step === 5 && <Step5 />}
            {step === 6 && <Step6 />}
            {step === 7 && <Step7 />}
            
            <Divider sx={{ my: 2 }} />
            <div>
              {step > 1 && (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handlePreviousStep}
                  sx={{ mr: 2 }}
                >
                  Précédent
                </Button>
              )}
              {step < 7 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNextStep}
                >
                  Suivant
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit} // Utilisez handleSubmit ici
                >
                  Enregistrer l'événement
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EventOrganizer;
