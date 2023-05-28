import TheatersIcon from '@mui/icons-material/Theaters';
import { NavLink } from 'react-router-dom';
import { CssTextField } from 'utils/palette';
import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';
import css from './NavBar.module.css';

export const NavBar = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar sx={{ gap: '20px', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <TheatersIcon />
            <Typography variant="h6">Movie browser</Typography>
            <CssTextField
              id="filter"
              color="warning"
              size="small"
              label="Search for movies..."
              type="text"
              name="filter"
            />
          </Box>
          <Stack direction="row" spacing={1}>
            <NavLink to="/" className={css['navbar__link']}>
              Home
            </NavLink>
            <NavLink to="/movies" className={css['navbar__link']}>
              Movies
            </NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </header>
  );
};
