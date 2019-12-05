
import { createGlobalStyle } from "styled-components";
import Plano from '../images/plano.jpg';
export default createGlobalStyle`

body{
   /* background-image:url(${Plano});   */
   background-color: black;


}
button{
   border-radius: 5px; 
   
}
input{
   color: white;
   border-radius: 5px; 
}
@media only screen and (max-device-width: 700px ) {
body{ width:100%; }
form{ width:250px; height:420px ; }
}
 `