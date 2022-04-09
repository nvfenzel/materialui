import React from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from './Navbar';
import { styled } from "@mui/material/node_modules/@mui/system";
import Cajon from './Cajon';

const estilos = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
}));

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Contenedor = () => {

  const classes = estilos();

  return (
    <div className={classes.root}>
      <Navbar />
      <Cajon/>
      <div>
        <div>
      Contenedor
      <Offset />
        </div>
      </div>
    </div>
  )
}

export default Contenedor