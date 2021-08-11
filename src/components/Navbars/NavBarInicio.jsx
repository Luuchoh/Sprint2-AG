import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuBar = styled.nav`
  width: 100%;
  height: 94px;
  align-items: center;
  background-color: ${(props) => props.color.neutral};
  display: flex;
  justify-content: center;
  margin-top: -16px;

`;
const Lista = styled.ul`
  display: flex;
  width: 500px;
  background-color: ${(props) => props.color.neutral};
  justify-content: space-around;
  padding-left: 3px;
  height: 75px;
  align-items: start;
  margin-bottom: -5px;
  margin-top: -2px;
  padding-top: 15px;

  li {
    background-color: #232E35;
    list-style: none;
    display: flex;
    justify-content: space-evenly;

    a {
      width: 100%;
      text-transform: capitalize;
      text-decoration: none;
      text-align: center;
      box-sizing: border-box;
    }
    a:hover {
      color: ${(props) => props.color.white};
    }
  }

  @media (min-width: 728px) {
    background-color: ${(props) => props.color.neutral};
    display: flex;
    align-items: center;
    flex-flow: row;

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
  color: ${(props) => props.color.green};
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
            <AStatitics color={colors} to="/Statitics">
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
