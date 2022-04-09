import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

const Listas = () => {
  return (
    <div>
      <List component='nav'>
        <ListItem button>
          <ListItemIcon>
            <AgricultureIcon/>
          </ListItemIcon>
          <ListItemText primary='Primer elemento'/>
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemIcon>
            <AirplanemodeActiveIcon/>
          </ListItemIcon>
          <ListItemText primary='Segundo elemento'/>
        </ListItem>
      </List>
    </div>
  )
}

export default Listas