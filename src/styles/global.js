
import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
form{
background: rgb(22,108,109);
background: linear-gradient(0deg, rgba(22,108,109,1) 0%, rgba(195,255,237,1) 100%);

  background-repeat:no-repeat; 
  background-size:cover;
     align-content:center;
    align-items:center;
    justify-content:center;
    margin-top: 40px;
    display:flex;
    flex-direction:column;
    height:500px;
    width:400px;
    border-radius:5px;
  
}
div{
   justify-content:center;
   align-content:center;
   align-items:center;
   display:flex;
}


@media only screen and (max-device-width: 700px ) {
body{ width:100%; }
form{ width:250px; height:420px ; }
}
 `