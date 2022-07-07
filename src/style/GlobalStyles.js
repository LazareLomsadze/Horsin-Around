import { createGlobalStyle } from "styled-components";
import "@fontsource/caesar-dressing"
import "@fontsource/barrio"
import "@fontsource/aladin"
import "@fontsource/akronim"
import "@fontsource/akaya-kanadaka"





const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
}
body{
    font-family: "Akaya Kanadaka", "Barrio", "Aladin", "Akronim", "caesar-dressing";
    overflow-x: hidden;
}
h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
    color: inherit; 
}

`
export default GlobalStyles;