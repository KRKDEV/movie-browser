import TheatersIcon from '@mui/icons-material/Theaters';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar sx={{ gap: '20px' }}>
          <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <TheatersIcon />
            <Typography>2023 Movie Browser. All rights reserved.</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};
