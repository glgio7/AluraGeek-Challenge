import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  
  box-sizing: border-box;
  
  text-decoration: none;

  list-style: none;

  font-family: 'Raleway', sans-serif;

  border: none;
  
  outline: none;
}

html, body{
  width: 100%;
  height: 100%;
}


a{
  color: inherit;
}

button{
  cursor: pointer;
}

img{
  width: 100%;
}
`;

export default GlobalCSS;
