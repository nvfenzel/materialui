import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import { styled } from "@mui/material/node_modules/@mui/system";
//para agregar iconos de menu se agrega primero al importación y
//después se la llama dentro de la appbar
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

//si queremos agregarle un margen hay que agregar un mOffset

//por defecto el navbar viene con position fixed

// const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const drawerWidth = 240;

const useStyle = makeStyles({
    // acá va primero el nombre de la clase
    // que queremos inventarnos para el botón o lo que sea que queramos agregarle estilo
    title: {
        flexGrow: 1
    },
    appBar: {
      width: 50,
      marginLeft: drawerWidth,
    },
  });

const Navbar = () => {
    const classes = useStyle()
    return (
        <AppBar className={classes.appBar}>
          <Toolbar>
              <IconButton color="inherit" aria-lebel="menu" sx={{ mr: 2 }}>
                  {/* con el sx={{ mr: 2 }} le estoy asignando el doble a el margin right*/}
                <MenuIcon/>
              </IconButton>
            <Typography variant="h6" className={classes.title}>
              ssdfkalsdflk
            </Typography>
            {/* aca abajo de la tipografía se le puede agregar un botón para logear que luego tengo que acomodar
            a la derecha para que se acomode a la derecha le pongo flexbox a la tipografía con el 
            classes.title eso es porque con el flexgrow el titulo va a ocupar todo el espacio disponible
            si le doy flex grow de 1 también al botón se compartiría mitad y mitad con el título*/}

            {/* el botón de navegación que permite desplegar el menú esta en la sección de drawer en la 
            documentación de material UI */}
            <Button variant="text" color="inherit">
              LOGIN
            </Button>
          </Toolbar>
        </AppBar>
        // <Offset />
    )
}

export default Navbar;