import TheatersIcon from '@mui/icons-material/Theaters';
import { Link } from 'react-router-dom';
import { CssTextField } from 'utils/palette';
import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';

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
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/movies"
            >
              Movies
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </header>
  );
};
