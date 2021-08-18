import React from "react";

import {  
  MenuBar,
  Lista,
  LiHome,
  LiStatitics,
  LiProfile,
  AHome,
  AStatitics,
  AProfile,
  Icon,
  Span
} from '../../style/NavbarInicio-styles';
import { Colors } from '../../style/Colors';



const NavBarInicio = ({color}) => {


  const ImgHome = (color) =>{
    if(color === 'home') {
      return './assets/icon-home-g.png'
    }else{
      return './assets/icon-home-w.png'
    }
  }
  const ImgStatitics = (color) =>{
    if(color === 'statitics') {
      return './assets/icon-statitics-g.png'
    }else{
      return './assets/icon-statitics-w.png'
    }
  }
  const ImgProfile = (color) =>{
    if(color === 'profile') {
      return './assets/icon-profile-g.png'
    }else{
      return './assets/icon-profile-w.png'
    }
  }

  return (
    <div>
      <MenuBar color={Colors}>
        <Lista color={Colors}>
          <LiHome>
            <AHome color={Colors} to="/home">
              <Icon src={ImgHome(color)} alt="icon" />
              <Span>home</Span>
            </AHome>
          </LiHome>
          <LiStatitics>
            <AStatitics color={Colors} to="/Statitics">
              <Icon src={ImgStatitics(color)} alt="icon" />
              <Span>estadisticas</Span>
            </AStatitics>
          </LiStatitics>
          <LiProfile>
            <AProfile color={Colors} to="/profile">
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
