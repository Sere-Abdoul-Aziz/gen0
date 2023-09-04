import React from 'react';
import { Box, Card, CardCover, CardContent, Typography } from '@mui/joy';

export default function Ban({ videoUrl, Titre }) {
  return (
    <Card sx={{ maxWidth: '100%', position: 'relative', overflow: 'hidden' }}>
      <CardCover>
      <video
        autoPlay
        loop
        muted
        //poster={videoUrl}
      >
        <source
          src={videoUrl}
          type="video/mp4"
        />
      </video>
      </CardCover>
      <CardContent
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <Typography
          level="body-lg"
          fontWeight="lg"
          textColor="#fff"
          mt={{ xs: 2, sm: 3 }}
          mx={2}
        >
          {Titre}
        </Typography>
      </CardContent>
    </Card>
  );
}