import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            light: '#ed4b82',
            main: '#ed4b82',
            dark: '#e91e63',
        },
        secondary: {
            light: '#637bfe',
            main: '#637bfe',
            dark: '#3d5afe',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#e91e63',
        },
    },
});
export default theme;