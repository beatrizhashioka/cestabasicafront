import styled from "styled-components";


export const StylesComercio = styled.div`

  h1{
   text-align:center;
       color: white;
      width:100%;
  }

  input {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0   15px ;
    margin-top: 20px;
    margin-bottom:10px;
  }
  button {

    font-weight: bold;
        background: rgba(255, 255, 255, 0.2);
         background-color: light-gray;
    color: white;  
   margin-left:600px;
   margin-top:50px;


  }
label{
  text-align:left;
}
  #pt1{
display:flex;
    flex-direction:column;
 margin-left:550px;
     width: 14%;
  }
    #pt2{
display:flex;
    flex-direction:column;
margin-left:550px;
     width: 14%;
  }
  label{
     color: white;
}
a{
  color: white;
  text-decoration: none;
margin-top:10px;
}
#menu{
  position: fixed;
  background: white;
  display:flex;
    flex-direction:column;
    
background: rgb(76,86,86);
background: radial-gradient(circle, rgba(76,86,86,1) 0%, rgba(27,25,25,1) 100%);
border-style: dashed;
     width: 7%;
     height:100%;
   
}

`;