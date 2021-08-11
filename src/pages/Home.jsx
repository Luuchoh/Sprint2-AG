import React from "react";
import NavBarInicio from "../components/Navbars/NavBarInicio";
import ComponentHome from "../components/ComponentHome";
import styled from "styled-components";

const HomeDiv = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #16161A;
  color: #FFFFFE;
`;

const Home = () => {
  return (
    <HomeDiv>
      <ComponentHome />
      <NavBarInicio 
      color={'home'}
     />
    </HomeDiv>
  );
};

export default Home;
