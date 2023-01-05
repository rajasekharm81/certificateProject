import { styled,TextField } from '@mui/material';
import {createTheme,Select} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


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
      dark:'#11cb5f',
    },
    reset:{
        main: '#FFE6CC',
        contrastText: '#D46300',
        dark:'#FFE6CC',
    },
    stepper:{
      main:"#d2f1fc86",
      contrastText: '#1A1A4D',
    },
    approve:{
      main:"#2DCE89",
      contrastText: '#fff',
    },
    hold:{
      main:"#3B82F6",
      contrastText: '#fff',
    },
    reDirect:{
      main:"#FB6340",
      contrastText: '#fff',
    },
    reject:{
      main:"#F5365C",
      contrastText: '#fff',
    },
    black:{
        main: '#000000',
        contrastText: '#D46300',
        dark:'#FFE6CC',
    },
    but:{
        main: '#C9F6FF',
        contrastText: '#000000',
        dark:'#11cb5f',
    }
  },
});

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiOutlinedInput-root': {
    fontSize:'14px',
    color:'black',
    '& fieldset': {
      border:'2px solid black',
      color:"black",
      fontSize:'29px',
    },
    '&:hover fieldset': {
      border:'3px solid black'
    },
    '&.Mui-focused fieldset': {
      border: '3px solid black',
    },
  },
});

export const CssSelect = styled(Select)({
  '& ..MuiSelect-select': {
      border:'1px solid red',
      backgroundColor:"red",
  }
});

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
