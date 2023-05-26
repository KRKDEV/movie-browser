import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@mui/material';
import NavBar from './NavBar/NavBar';
import { theme } from 'utils/palette';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <NavBar />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
};
