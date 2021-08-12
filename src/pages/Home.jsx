import React from "react";
import NavBarInicio from "../components/Navbars/NavBarInicio";
import ComponentHome from "../components/ComponentHome";
import styled from "styled-components";

const HomeDiv = styled.div`
<<<<<<< HEAD
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #16161A;
  color: #FFFFFE;
=======
    margin: -30px;
    padding: 0;
    box-sizing: border-box;
    background-color: #16161A;
    color: #FFFFFE;
>>>>>>> 8de5ff0c60dbb8aa62fd70810d86d1b1261be940
`;

const Home = () => {
  return (
    <HomeDiv>
      <ComponentHome />
<<<<<<< HEAD
      <NavBarInicio 
      color={'home'}
     />
    </HomeDiv>
  );
};
=======
      <NavBarInicio color={'home'}/>
    </HomeDiv>
    
  )
}
>>>>>>> 8de5ff0c60dbb8aa62fd70810d86d1b1261be940

export default Home;
