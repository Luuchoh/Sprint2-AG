import React from "react";
import NavBarInicio from "../components/Navbars/NavBarInicio";
import ComponentHome from "../components/Home/ComponentHome";
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
      <NavBarInicio 
      color={'home'}
     />
      <ComponentHome />
    </HomeDiv>
  );
};

export default Home;
