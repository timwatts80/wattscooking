"use client";
import React, { useState } from 'react';
import { Box, Button, Container } from "@mui/material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

import './global.css';

export default function Home() {
  const [buttonLabel, setButtonLabel] = useState("this page is under construction.");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container maxWidth="sm" sx={{ height: '100vh', margin: 'auto', transition: '0.3s', }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <div style={{ position: 'relative', display: 'inline-block', width: '100%', }}>
          {isHovered &&
            <LightbulbOutlinedIcon
              sx={{
                position: 'absolute',
                top: '-70px',
                left: '50%',
                scale: '3',
                color: 'white',
                transform: 'translateX(-20%)'
              }}
            />
          }
          <Button
            variant="outlined"
            onMouseEnter={() => {
              setButtonLabel("Please come back later.");
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setButtonLabel("this site is under construction.");
              setIsHovered(false);
            }}
            sx={{
              width: '100%',
              padding: '15px',
              color: 'white',
              border: '1px solid white',
              transition: '0.3s',
              '&:hover': {
                border: '1px solid white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '30px',
              }
            }}
          >
            {buttonLabel}
          </Button>
        </div>
      </Box>
    </Container>
  );
}