import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardCover, CardOverflow, AspectRatio, Button, CardActions, Checkbox, Divider, FormControl, FormLabel, Input, MenuItem, Select, Option } from '@mui/joy';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Navbar from '../Components/navbar';
import Banner from '../Components/banner';
import F00ter from '../Components/footer';
import BorderAllRoundedIcon from '@mui/icons-material/BorderAllRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

const ContactPage = () => {
    const eventTypes = [
        'Type d\'événement 1',
        'Type d\'événement 2',
        'Type d\'événement 3',
        // Ajoutez d'autres types d'événements ici
    ];
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [eventType, setEventType] = useState('');
    const [message, setMessage] = useState('');

    const handlePhoneNumberChange = (e) => {
        // Limitez la longueur du numéro de téléphone à 8 caractères
        const input = e.target.value.slice(0, 8);
        setPhoneNumber(input);
    };

    const handleEmailChange = (e) => {
        // Validez l'adresse e-mail
        const input = e.target.value;
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
            setEmail(input);
        }
    };

    const handleEventTypeChange = (e) => {
        setEventType(e.target.value);
    };

    const handleMessageBoxChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {
        // Effectuez ici votre logique d'envoi de formulaire
        // phoneNumber, email, eventType et message contiendront les données du formulaire
    };
    return (
        <div 
        style={{backgroundColor: '#f7f3eb'}}
        >
            {/* Bannière */}
            <Navbar />
            <header>
                <div className="banner">
                    <Banner
                        imageUrl={
                            "https://firebasestorage.googleapis.com/v0/b/geno-41aa5.appspot.com/o/banner%2FAbout%20us.png?alt=media&token=db0c156b-6ffd-47a5-bf6e-7431f0506cdd"
                        }
                        Titre={"Contact"} // Titre doit être passé en tant que prop au composant Banner
                    />
                </div>
            </header>

            {/* <section >
                <Container>
                    <Typography variant="h4" gutterBottom>
                        Introduction
                    </Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
                        tortor non justo ultrices facilisis vel id sapien.
                    </Typography>
                </Container>
            </section> */}
            {/* cartes */}
            <section style={{
                 marginTop: '100px',
                display: 'flex',
                // justifyContent: 'space-between'
            }}
            >
                <div style={{
                    flex: 1,
                    margin: 'auto',
                    position: 'relative',
                }}>
                    <Card
                        data-resizable
                        sx={{
                            textAlign: 'center',
                            alignItems: 'center',
                            width: 280,
                            overflow: 'auto',
                            resize: 'horizontal',
                            '--icon-size': '100px',
                            left: 55,
                        }}
                    >
                        <CardOverflow >
                            <AspectRatio
                                variant="outlined"
                                color="warning"
                                ratio="1"
                                sx={{
                                    m: 'auto',
                                    transform: 'translateY(50%)',
                                    borderRadius: '50%',
                                    width: 'var(--icon-size)',
                                    boxShadow: 'sm',
                                    bgcolor: 'background.surface',
                                    position: 'relative',
                                }}
                            >
                                <div>
                                    <EmailRoundedIcon color="warning" sx={{ fontSize: '4rem' }} />
                                </div>
                            </AspectRatio>
                        </CardOverflow>
                        <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
                            EMAIL
                        </Typography>
                        <CardContent sx={{ maxWidth: '40ch' }}>
                            genoevent@gmail.com
                        </CardContent>
                        <CardActions
                            orientation="vertical"
                            buttonFlex={1}
                            sx={{
                                '--Button-radius': '40px',
                                width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',

                            }}
                        >
                        </CardActions>
                    </Card>
                </div>
                <div style={{
                    flex: 1,
                    margin: 'auto',
                    position: 'relative',
                }}>
                    <Card
                        data-resizable
                        sx={{
                            textAlign: 'center',
                            alignItems: 'center',
                            width: 280,
                            // to make the demo resizable
                            overflow: 'auto',
                            resize: 'horizontal',
                            '--icon-size': '100px',
                            left: 55,
                        }}
                    >
                        <CardOverflow >
                            <AspectRatio
                                variant="outlined"
                                color="warning"
                                ratio="1"
                                sx={{
                                    m: 'auto',
                                    transform: 'translateY(50%)',
                                    borderRadius: '50%',
                                    width: 'var(--icon-size)',
                                    boxShadow: 'sm',
                                    bgcolor: 'background.surface',
                                    position: 'relative',
                                }}
                            >
                                <div>
                                    <LocalPhoneRoundedIcon color="primary" sx={{ fontSize: '4rem' }} />
                                </div>
                            </AspectRatio>
                        </CardOverflow>
                        <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
                            NUMERO DE TELEPHONE
                        </Typography>
                        <CardContent sx={{ maxWidth: '40ch' }}>
                            00-00-00-00
                        </CardContent>
                        <CardActions
                            orientation="vertical"
                            buttonFlex={1}
                            sx={{
                                '--Button-radius': '40px',
                                width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',

                            }}
                        >
                        </CardActions>
                    </Card>
                </div>
                <div style={{
                    flex: 1,
                    margin: 'auto',
                    position: 'relative',
                }}>
                    <Card
                        data-resizable
                        sx={{
                            textAlign: 'center',
                            alignItems: 'center',
                            width: 280,
                            // to make the demo resizable
                            overflow: 'auto',
                            resize: 'horizontal',
                            '--icon-size': '100px',
                            left: 55,
                        }}
                    >
                        <CardOverflow >
                            <AspectRatio
                                variant="outlined"
                                color="warning"
                                ratio="1"
                                sx={{
                                    m: 'auto',
                                    transform: 'translateY(50%)',
                                    borderRadius: '50%',
                                    width: 'var(--icon-size)',
                                    boxShadow: 'sm',
                                    bgcolor: 'background.surface',
                                    position: 'relative',
                                }}
                            >
                                <div>
                                    <PlaceRoundedIcon color="danger" sx={{ fontSize: '4rem' }} />
                                </div>
                            </AspectRatio>
                        </CardOverflow>
                        <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
                            ADRESSE
                        </Typography>
                        <CardContent sx={{ maxWidth: '40ch' }}>
                            Ouagadougou
                        </CardContent>
                        <CardActions
                            orientation="vertical"
                            buttonFlex={1}
                            sx={{
                                '--Button-radius': '40px',
                                width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',

                            }}
                        >
                        </CardActions>
                    </Card>
                </div>

            </section>
            {/* Formulaire */}
            <section style={{ marginTop: '100px' }}>
                <Card
                    variant="outlined"
                    sx={{
                        maxWidth: '50%',
                        mx: 'auto',
                        overflow: 'auto',
                        resize: 'horizontal',
                        margin: 'auto',
                    }}
                >
                    <Typography level="title-lg" startDecorator={<InfoOutlined />}>
                        Envoyer un message
                    </Typography>
                    <Divider inset="none" />
                    <CardContent
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                            gap: 1.5,
                        }}
                    >
                        <FormControl>
                            <FormLabel>Nom</FormLabel>
                            <Input />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Prénom</FormLabel>
                            <Input />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Téléphone</FormLabel>
                            <Input
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                endDecorator={<LocalPhoneRoundedIcon />}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Mail</FormLabel>
                            <Input
                                value={email}
                                onChange={handleEmailChange}
                                endDecorator={<EmailRoundedIcon />}
                                required
                            />
                        </FormControl>

                        <FormControl sx={{ gridColumn: '1/-1' }}>
                            <FormLabel>Type d'événement</FormLabel>
                            <Select
                            // value={eventType}
                            // onChange={handleEventTypeChange}
                            >

                                <Option value="dog">Dog</Option>
                                <Option value="cat">Cat</Option>
                                <Option value="fish">Fish</Option>
                                <Option value="bird">Bird</Option>
                            </Select>
                        </FormControl>


                        <FormControl sx={{ gridColumn: '1/-1' }}>
                            <FormLabel>Message</FormLabel>
                            <Input
                                minRows={4}
                                value={message}
                                onChange={handleMessageBoxChange}
                                size="lg"
                                required
                            />
                        </FormControl>

                        {/* <Checkbox label="Sauvegarder le formulaire" sx={{ gridColumn: '1/-1', my: 1 }} /> */}
                        <CardActions sx={{ gridColumn: '1/-1' }}>
                            <Button variant="solid" color="primary" onClick={handleSubmit}>
                                Envoyer
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </section>
            <footer>
        <F00ter/>
        </footer>
        </div>
    );
};

export default ContactPage;