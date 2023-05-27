import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import Paper from '@mui/material/Paper';

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      secondary: '#e74c3c',
    },
    secondary: {
      main: '#ff4500',
    },
  },
});
export const CssTextField = styled(TextField)({
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'orangered',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: grey[800],
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'orangered',
    },
  },
});

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
