import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      secondary: '#e74c3c',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});
export const CssTextField = styled(TextField)({
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'orange',
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
      borderColor: 'orange',
    },
  },
});
