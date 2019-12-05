import styled from "styled-components";


export const StylesCadastro = styled.div`
  form{
    background: rgb(25,23,23);
background: linear-gradient(0deg, rgba(25,23,23,1) 0%, rgba(106,105,92,1) 100%);

  background-repeat:no-repeat; 
  background-size:cover;
     align-content:center;
    align-items:center;
    justify-content:center;
    margin-top: 40px;
    display:flex;
    flex-direction:column;
    height:450px;
    width:350px;

  border-radius: 20px;
}
#menu{
  position: fixed;
  background: white;
  display:flex;
    flex-direction:column;
    
background: rgb(76,86,86);
background: radial-gradient(circle, rgba(76,86,86,1) 0%, rgba(27,25,25,1) 100%);
border-style: dashed;
     width: 6%;
     height:100%;
}
a{
  color: white;
  text-decoration: none;
}
div{
   justify-content:center;
   align-content:center;
   align-items:center;
   display:flex;
}
  h1{
    margin-top: 20px;
    color: white;
  }
img{
margin-top: 100px;
}

  input {
    background: rgba(245, 255, 255, 0.2);
    color: white;
    padding: 0   15px ;
    margin-top: 15px;

  }

  button{
    background-color: light-gray;
   color: white;
      background: rgba(255, 255, 255, 0.2);
         margin-top: 20px;
    margin-bottom: 80px;
    font-weight: bold;
  }
  label{
    margin-right:10px;
    color: gray;  
    margin-top: 30px;
  }
   

   
`;