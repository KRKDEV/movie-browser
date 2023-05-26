import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import css from './HomePage.module.css';
const API_KEY = `5576770c01d63e1242c2c0a47f8d9a02`;
const HomePage = () => {
  const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(API_URL);
        if (response.status === 200) {
          setTrendingMovies(response.data.results);
        } else {
          setError('There was an error with fetching...');
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    fetchTrending();
  }, [API_URL]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <main>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container
          maxWidth
          sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <Box mt={6}>
            <Typography variant="h4">Trending today...</Typography>
          </Box>
          <ul className={css['trending__list']}>
            {trendingMovies.map(movie => (
              <li key={movie.id} className={css['trending__card']}>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="Poster"
                  />
                  <p>{movie.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      )}
    </main>
  );
};

export default HomePage;
