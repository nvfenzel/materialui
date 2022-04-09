import React from "react";
import Button from '@mui/material/Button';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from "./components/Navbar";
import Listas from "./components/Listas";
import Oculto from "./components/Oculto";
import Contenedor from "./components/Contenedor";

//este es para personalizar o  pisar las clases que vienen por defecto
import theme from "./themeConfig";
import { integerPropType } from "@mui/material/node_modules/@mui/utils";

//siempre que tengamos un componente tenemos que importar lo de material ui.
// si quiero escribir muchos componentes de material Ui puedo hacer lo siguiente:
//import {Button} from '@mui/material';


//13493493

const useStyle = makeStyles({
  // acá va primero el nombre de la clase
  // que queremos inventarnos para el botón o lo que sea que queramos agregarle estilo
  juanito:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    // lo que en css va separado por un guión acá va todo junto y la segunda palabra en mayúscula
  },
});

function App() {

  // luego y antes del return hay que llamar al style de la siguiente manera:
  const classes = useStyle()
  return (
    <ThemeProvider theme={theme}>

    {/* <Navbar /> */}

      {/* por defecto el boton viene con un color pero si le quiero asignar un color primario tengo que poner
      como props color = primary, si quiero que sea rojo tengo que poner secundary y asi
      sucesivamente  */}
<Button color="inherit">
  color
</Button>
<Button variant= 'contained' color="primary">
contained
</Button>
<Button variant= 'outlined' color="primary">
outlined
</Button>
{/* el variant le asigna un fondo */}
<Button variant= 'contained' color="primary" disableElevation>
outlined
</Button>

{/* el disable elevation le saca la sombra. */}

<Button variant= 'contained' color="primary" disableElevation href="https://google.com">
outlined
</Button>

{/* si quiero que el botón tenga un on click de efecto debería agregarse lo en un
botón comun pero en este caso se le pasa como propiedad el href directamente con la página con la que se
quiere relacionar el código. */}

<Button variant= 'contained' color="primary" disableElevation href="https://google.com" fullWidth>
outlined
</Button>

{/* si quiero que el botón tome todo el ancho disponible que se pueda hay que agregarle la opción 
fullwidht */}

<Button variant= 'contained' color="primary" disableElevation href="https://google.com" size="small">
outlined
</Button>
{/* si quiero que el botón sea pequeño hay que agregarle la opción 
small */}

<Button variant= 'contained' color="primary" disableElevation href="https://google.com" size="large">
outlined
</Button>
{/* si quiero que el botón sea grande hay que agregarle la opción 
large */}

{/* la propiedad por defecto es medium */}




{/* Para trabajar con los íconos hay que instalar el paquete de los íconos
para eso se pone lo siguiente: npm install @mui/icons-material en la consola dentro del proyecto */}

<AccessibleForwardIcon/>

{/* puedo poner dentro de los botones los íconos de la siguiente manera: */}

<Button 
variant= 'contained' 
color="primary" 
startIcon={<AccessibleForwardIcon/>}>
Bonton con ícono adentro
</Button>

{/* si quiero que el símbolo svg esté al final del botón tengo que poner en vez de start, end*/}
 
<Button 
variant= 'contained' 
color="primary" 
endIcon={<AccessibleForwardIcon/>}>
Bonton con ícono adentro pero con el svg al final
</Button>
{/* si quiero que el botón (con la extensión de mateial ui se pone sola la importación) 
sea solo svg hago lo siguiente: */}
<IconButton aria-label="algo">
<AccessibleForwardIcon/>
</IconButton>

{/* Ahora vamos a trabajar con la tipografía y para eso tendríamos que haber puesto en el head del 
index.html el link de roboto de google que se saca de la documentación de material UI */}

{/* Para arrancar con la tipografía se escribe typo.. y solo con la extensión hacemos click
en la tipografía. De esta menera se autocompleta la importación con el resto de las cosas */}
    
    <Typography variant="h1" color="initial">
      esto es H1 sin agregarle las etiquetas de h1
    </Typography>

{/* para el parrafo hay que pònerle body1 */}


    <Typography variant="body1" color="initial" align="justify">
      esto es un parrafo y solo hay que agregarle body1 a la variante. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet esse omnis voluptatibus facilis repudiandae magnam exercitationem odit quo? Quisquam laborum quibusdam unde nisi tempore accusantium alias dignissimos iure voluptatibus molestiae?
      Aut perspiciatis ea cupiditate ratione ducimus explicabo veritatis dolorem sit esse aspernatur iste voluptate et exercitationem, rerum veniam magni distinctio eveniet culpa, sequi dolores quod sapiente, repudiandae nam harum? Nam.
      Magnam quas placeat suscipit sequi alias adipisci, maiores, voluptatibus culpa itaque ratione nobis perspiciatis expedita atque, deserunt laboriosam? Quo voluptatum animi iusto soluta fugiat iste sapiente minus iure quos veniam!
      Veritatis provident quasi error omnis quam? Soluta dolore quam unde atque voluptatem dolorem rerum sequi tempora eaque vero cupiditate fuga, beatae dolor ipsam repellendus placeat excepturi, eius commodi iste porro?
      Libero, repellendus. Dolores cum, similique sequi voluptate consequuntur vitae! Amet vel obcaecati aspernatur excepturi iure accusamus ducimus esse hic quisquam voluptatem corrupti sed, dolores laudantium quod maxime quibusdam voluptate iusto.
      Corrupti molestiae iste provident exercitationem laboriosam tempore praesentium cumque nihil ipsum tenetur doloremque quibusdam, sequi omnis! Explicabo nostrum illo ipsam doloribus. Quaerat nihil veritatis suscipit quos totam optio, qui maiores?
      Asperiores dolor aliquid, accusantium, cumque cupiditate voluptatum voluptatibus aliquam beatae assumenda nostrum et, aut ea! Laborum rem enim, placeat praesentium aspernatur ratione aliquam repellendus ea dolorum ad rerum voluptas optio?
      Minima aliquid officia, dolor asperiores expedita quasi fugiat enim deleniti voluptatum amet. Tempore ullam repellat molestiae quisquam excepturi doloremque, soluta nesciunt? Placeat ab harum eius soluta doloribus quibusdam, architecto voluptatibus.
      Quod, sapiente autem quibusdam enim distinctio tempore voluptas beatae ex ullam optio quam vel doloremque impedit nostrum! Inventore, quas, adipisci corporis nam voluptatum delectus culpa facere iure consectetur aut atque!
      Pariatur autem culpa nobis sint impedit nostrum. Sit pariatur expedita mollitia aliquid eos magnam quisquam repellendus sunt explicabo, dolores inventore ipsum officia non, adipisci accusamus tempore recusandae maiores in neque.
      A vel accusamus maxime nam adipisci nihil sunt non aut dolor repellat autem mollitia, eos ex quidem iusto. Nostrum consequuntur eius perferendis ipsum rerum eveniet delectus cupiditate, hic dolores exercitationem.
      Corrupti optio quaerat mollitia atque dignissimos nam cumque aliquid accusamus eveniet commodi sed, ullam voluptatum facilis dolores. Quaerat consequuntur aperiam, nam, sint tenetur explicabo ab harum, odio nemo quia numquam.
      Nam, autem ullam alias aliquid ex mollitia dolor tempore porro eaque sequi quia eius neque reprehenderit molestias, quos pariatur similique repellendus voluptates maxime illo? Doloribus voluptates dolorem quis expedita repudiandae!
      Ut autem itaque tempora fuga ipsa esse amet pariatur a cum cupiditate perspiciatis odio possimus quas, neque harum nihil hic cumque saepe fugit nisi architecto? Aliquid iusto optio laborum recusandae.
      Eum, similique officia doloribus pariatur ad dignissimos ducimus esse alias magnam quos, deserunt odit assumenda? Dolorum, incidunt voluptatem commodi eos quod minima nobis molestiae debitis! Ullam exercitationem voluptate distinctio sed.
      Quibusdam cum laudantium enim rerum, deleniti commodi earum eos delectus. Quas pariatur eum laudantium velit, ea nisi commodi ullam accusamus iusto et aperiam odit consequatur, illum obcaecati, officia optio sequi.
      Eaque distinctio, ullam saepe omnis hic voluptate dicta ducimus, magni beatae odit modi fuga. Aut ipsum excepturi vitae temporibus reprehenderit odio explicabo, voluptates suscipit. Esse laboriosam dolorem quis officia sunt!
      Cum non impedit sit quae temporibus labore consectetur unde ab odio quas! Explicabo fuga animi inventore quae quis provident eos a veniam dicta fugiat, quasi voluptates, quisquam natus veritatis accusantium.
      Omnis officia praesentium culpa suscipit, vel neque pariatur consectetur excepturi porro voluptatum voluptatibus iste facilis voluptas cum. Exercitationem hic, labore sed inventore veniam nam officiis! Sequi recusandae animi dolorem quo?
      Repellat ad enim aliquid necessitatibus quis pariatur et. Recusandae ipsum unde aliquid eligendi ex modi commodi vel! Ad laborum atque dolorem deserunt unde accusamus, odit mollitia cum ab voluptates! Sapiente.
    </Typography>

    {/* si se quieren personalizar los componentes los styles son la solución
    de esta manera se va a incluir css clásico que va a permitir que uno le pueda dar
    otra apariencia a lo que ya viene predeterminado por material ui */}

    <Button className={classes.juanito}>
      Botón personalizado
    </Button>

{/* si se quiere que se personalicen los estilos se pueden crear "themas" para hacer llamadas a esos temas.
En este caso un botón primario quizas ya no tendría color azul sino el que yo le asigne.

Para eso hay que usar una etiqueta ThemeProvider que va a recibir una props que se llama theme*/}

  <Listas/>
  <Oculto/>
  <Contenedor/>
    </ThemeProvider>
  );
}

export default App;
