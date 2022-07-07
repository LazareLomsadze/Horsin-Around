import styled from "styled-components";
import Nav from "../../src/Nav/";
import gif from './img/race.gif'
// import Gold from './img/gold.mkv'
// import Videos from './img/94.mp4'

import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    background: url(${gif});
    background-position:  top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`


const Title = styled.h1`
font-family:"Akronim";
font-size: 4em;
color:#8E2800;
text-align:start;

`








const Home = () => {
  
  return (
    <>
    <GlobalStyle></GlobalStyle>
      <Nav first />

      <div className="mt-20">
        <Title>
        Horsin' Around
        </Title>
      
      </div>
    </>
  );
};

export default Home;