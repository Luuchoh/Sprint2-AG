import styled from "styled-components";
import { Link } from "react-router-dom";


export const MenuBar = styled.nav`
  width: 100%;
  height: 94px;
  align-items: center;
  background-color: ${(props) => props.color.neutral};
  display: flex;
  justify-content: center;
  margin-top: -16px;

`;
export const Lista = styled.ul`
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
  width: calc(25% - 15px);
`;
export const LiProfile = styled.li`
  @media (min-width: 728px) {
    border-top-right-radius: 25%;
  }
  @media (min-width: 1028px) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 30%;
  }
`;
export const AHome = styled(Link)`
  color: ${(props) => props.color.green};
`;
export const AStatitics = styled(Link)`
  color: ${(props) => props.color.white};
`;
export const AProfile = styled(Link)`
  color: ${(props) => props.color.white};
`;
export const Icon = styled.img`
  display: inline-block;
`;
export const Span = styled.span`
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0;
`;