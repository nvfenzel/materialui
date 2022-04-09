import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary:{
            // main: '#999'
            //ahora con esta definición el color primario tendrá
            //como color principal el 999 que es el gris
            main: purple[500]
            //se puede ver la paleta de colores de la página de material ui
        }
    }
})

export default theme;