import * as React from "react";
import { motion } from "framer-motion";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';

export const MenuItem = ({ i }) => {
  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

  return (
    <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' }}>
      <TabList
        disableUnderline
        sx={{
          display: "flex",
          flexDirection: "column", // Alignement vertical
          p: 0.5,
          gap: 0.5,
          borderRadius: 'xl',
          bgcolor: 'background.level1',
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: 'sm',
            bgcolor: 'background.surface',
          },
          // Effet de survol
          [`& .${tabClasses.root}:hover`]: {
            bgcolor: colors[i],
          },
        }}
      >
        <Tab disableIndicator>Couple Event</Tab>
        <Tab disableIndicator>Corporate Event</Tab>
        <Tab disableIndicator>Autres</Tab>
      </TabList>
    </Tabs>
  );
};
