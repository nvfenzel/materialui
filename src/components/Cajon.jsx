import React from 'react'
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import { styled } from "@mui/material/node_modules/@mui/system";
import {Divider } from '@mui/material';
import Listas from './Listas';

const drawerWidth = 240;
const estilos = makeStyles(theme =>({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Cajon = () => {

    const classes = estilos()

  return (
<Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper,}} anchor="left">
    <div>
      <Offset />
    </div>
    <Divider />
    <Listas/>
    </Drawer>
  )
}

export default Cajon