import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuBar = styled.nav`
  background-color: ${(props) => props.color.neutral};
  width: 100%;
  height: 60px;
  bottom: 0px;
  position: fixed;
  display: inline-block;
  z-index: 1;

  @media (min-width: 728px) {
    width: 100vw;
    background-color: inherit;
  }

  @media (min-width: 1028px) {
    width: 100vw;
    background-color: inherit;
  }
`;
const Lista = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    width: calc(25% - 15px);
    padding: 10px;
    a {
      width: 100%;
      text-transform: capitalize;
      text-decoration: none;
      color: ${(props) => props.color.white};
      text-align: center;
      box-sizing: border-box;
    }
    a:hover {
      color: ${(props) => props.color.white};
    }
  }

  @media (min-width: 728px) {
    width: 420px;
    background-color: ${(props) => props.color.neutral};
    position: fixed;
    bottom: 0px;
    border-top-left-radius: 25%;
    border-top-right-radius: 25%;
    left: 50%;
    margin-left: -210px;
    z-index: 0;

    li{
        background-color: ${(props) => props.color.neutral};
    }
  }
  @media (min-width: 1028px) {
    width: 500px;
    background-color: ${(props) => props.color.neutral};
    position: fixed;
    top: 0;
    bottom: initial;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%;
    left: 50%;
    margin-left: -250px;
    z-index: 0;
    
    li{
        background-color: ${(props) => props.color.neutral};
    }
  }
`;
const LiHome = styled.li`
  @media (min-width: 728px) {
    border-top-left-radius: 25%;
  }
  @media (min-width: 1028px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 30%;
  }
`;
const LiStatitics = styled.li`
  width: calc(25% - 15px);
`;
const LiProfile = styled.li`
  @media (min-width: 728px) {
    border-top-right-radius: 25%;
  }
  @media (min-width: 1028px) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 30%;
  }
`;
const AHome = styled(Link)`
  color: ${(props) => props.color.white};
`;
const AStatitics = styled(Link)`
  color: ${(props) => props.color.white};
`;
const AProfile = styled(Link)`
  color: ${(props) => props.color.white};
`;
const Icon = styled.img`
  display: inline-block;
`;
const Span = styled.span`
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0;
`;

// Colors

const colors = {
  negro: "#000000",
  black: "#16161A",
  white: "#FFFFFE",
  grey: "#94A1B2",
  green: "#2CB67D",
  red: "#EF4565",
  purple: "#6B47DC",
  neutral: "#232E35",
  primary: "#7F5AF0",
  secondary: "#A786DF",
  tertiary: "#72757E",
};

const NavBarInicio = ({color}) => {


  const ImgHome = (color) =>{
    if(color == 'home') {
      return './assets/icon-home-g.png'
    }else{
      return './assets/icon-home-w.png'
    }
  }
  const ImgStatitics = (color) =>{
    if(color == 'statitics') {
      return './assets/icon-statitics-g.png'
    }else{
      return './assets/icon-statitics-w.png'
    }
  }
  const ImgProfile = (color) =>{
    if(color == 'profile') {
      return './assets/icon-profile-g.png'
    }else{
      return './assets/icon-profile-w.png'
    }
  }

  return (
    <div>
      <MenuBar color={colors}>
        <Lista color={colors}>
          <LiHome>
            <AHome color={colors} to="/home">
              <Icon src={ImgHome(color)} alt="icon" />
              <Span>home</Span>
            </AHome>
          </LiHome>
          <LiStatitics>
            <AStatitics color={colors} to="/estadisticas">
              <Icon src={ImgStatitics(color)} alt="icon" />
              <Span>estadisticas</Span>
            </AStatitics>
          </LiStatitics>
          <LiProfile>
            <AProfile color={colors} to="/profile">
              <Icon src={ImgProfile(color)} alt="icon" />
              <Span>perfil</Span>
            </AProfile>
          </LiProfile>
        </Lista>
      </MenuBar>
    </div>
  );
};

export default NavBarInicio;
