import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import NavBar from './NavBar/NavBar';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import { theme } from 'utils/palette';
export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
