import React from 'react'
import { Typography } from '@mui/material'
import Hidden from '@mui/material/Hidden';

const Oculto = () => {
  return (
    <div>
        <Typography variant="h8" color="initial" sx={{ display: { xs: 'none', md: 'block' } }}>
        Este texto va a desaparecer cuando la pantalla sea xs y va a aparecer cuando sea md
       {/* con el ejemplo de arriba oculta cuando sea menor a xs y muestra cuando sea md */}
        </Typography>
        <Typography variant="h4" color="initial" sx={{ display: { md: 'none', xs: 'block' } }}>
            Este texto va a desaparecer cuando la pantalla sea md y va a aparecer cuando sea xs
       {/* con el ejemplo de arriba oculta cuando sea menor a md y muestra cuando sea xs */}
        </Typography>
    </div>
  )
}

export default Oculto