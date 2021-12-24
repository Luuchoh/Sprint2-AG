import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import {
  MenuBar,
  Lista,
  LiHome,
  LiStatitics,
  Home,
  Statitics,
  Span,
} from "../../style/NavbarInicio-styles";
import { Colors } from "../../style/Colors";

const NavBarInicio = ({ page }) => {
  const colorHome = (page) => {
    if (page === 'home') {
      return Colors.green
    }else{
      return Colors.white
    }
  }
  const colorStati = (page) => {
    if (page === 'statitics') {
      return Colors.green
    }else{
      return Colors.white
    }
  }

  return (
    <Fragment>
      <MenuBar color={Colors}>
        <Lista color={Colors}>
          <LiHome>
            <Link to="/home">
              <Home color={colorHome(page)} />
              <Span color={colorHome(page)}>home</Span>
            </Link>
          </LiHome>
          <LiStatitics>
            <Link to="/statitics">
              <Statitics color={colorStati(page)} />
              <Span color={colorStati(page)}>estadisticas</Span>
            </Link>
          </LiStatitics>
        </Lista>
      </MenuBar>
    </Fragment>
  );
};

export default NavBarInicio;
