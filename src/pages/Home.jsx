import React from "react";
import NavBarInicio from "../components/Navbars/NavBarInicio";
import ComponentHome from "../components/HomeComp";
import { HomeDiv } from "../style/Home-styles";


const Home = () => {
  return (
    <HomeDiv>
      <ComponentHome />
      <NavBarInicio color={'home'}/>
    </HomeDiv>
    
  )
}

export default Home;
