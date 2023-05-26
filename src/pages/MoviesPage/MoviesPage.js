import { Box, Container, Typography } from '@mui/material';

const MoviesPage = () => {
  return (
    <main>
      <Container maxWidth>
        <Box mt={2}>
          <Typography variant="h4">Movies</Typography>
        </Box>
      </Container>
    </main>
  );
};

export default MoviesPage;
