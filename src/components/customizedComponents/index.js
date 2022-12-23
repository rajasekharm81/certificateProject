import { styled,TextField } from '@mui/material';
import {createTheme,Select} from '@mui/material';

export const theme = createTheme({
  palette: {
    regTextField: {
      // Purple and green play nicely together.
      main: "#1173ef",
      contrastText: '#fff',
    },
    lableText:{
        main:"#2B2E7A"
    },
    success: {
      main: '#11cb5f',
      contrastText: '#ffffff',
    },
    reset:{
        main: '#FFE6CC',
        contrastText: '#D46300',
    }
  },
});

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'blue',
  },
  '& .MuiOutlinedInput-root': {
    fontSize:'14px',
    color:'black',
    '& fieldset': {
      border:'1px solid black',
      color:"black",
      fontSize:'29px',
    },
    '&:hover fieldset': {
      border:'2px solid blue'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'blue',
    },
  },
});

export const CssSelect = styled(Select)({
  '& ..MuiSelect-select': {
      border:'1px solid red',
      backgroundColor:"red",
  }
});