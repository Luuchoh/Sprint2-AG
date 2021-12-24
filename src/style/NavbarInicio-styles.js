import styled from "styled-components";
import { BiHomeAlt } from "react-icons/bi";
import { BiStats } from "react-icons/bi";


export const MenuBar = styled.nav`
  background-color: ${(props) => props.color.neutral};
  width: 100vw;
  height: 75px;
  bottom: 0px;
  position: fixed;
  display: inline-block;
  z-index: 1;
  box-sizing: border-box;
  padding: 15px;
`;
export const Lista = styled.ul`
  background-color: ${(props) => props.color.neutral};
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  list-style: none;
  margin: 0 auto 0 10%;
  padding: 0;

  li {
    background-color: #232e35;
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
  }

  @media (min-width: 728px) {
    background-color: ${(props) => props.color.neutral};
    display: flex;
    align-items: center;
    flex-flow: row;

    li {
      background-color: ${(props) => props.color.neutral};
    }
  }
`;
export const LiHome = styled.li`
  @media (min-width: 728px) {
    border-top-left-radius: 25%;
  }
  @media (min-width: 1028px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 30%;
  }
`;
export const LiStatitics = styled.li`
  width: calc(45% - 15px);
`;
export const Home = styled(BiHomeAlt)`
  width: 44px;
  color: ${(props) => props.color};
`;
export const Statitics = styled(BiStats)`
  width: 44px;
  color: ${(props) => props.color};
`;
export const Span = styled.span`
  display: inline-block;
  width: 100%;
  color: ${(props) => props.color};
  margin: 0;
  padding: 0;
`;
