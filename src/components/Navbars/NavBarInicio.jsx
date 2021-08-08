import React from 'react';
import { styled } from "styled-components";

const MenuBar = styled.nav`
    background-color: var(--color-neutral);
    width: 100%;
    height: 60px;
    bottom: 0px;
    position: fixed;
    display: inline-block;
    z-index: 1;
`;
const Lista = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    li{
        display: flex;
        align-items: center;
        width: calc(25% - 15px);
        padding: 10px;
        a {
            width: 100%;
            text-transform: capitalize;
            text-decoration: none;
            color: var(--color-white);
            text-align: center;
            box-sizing: border-box;
        }
        a:hover{
            color: var(--color-white);
        }
    }

`;
const LiHome = styled.li`
    
`;
const LiStatitics = styled.li`
    width: calc(25% - 15px);
`;
const LiProfile = styled.li`
      
`;
const AHome = styled.a`
  color: var(--color-white);
`;
const AStatitics = styled.a`
  color: var(--color-white);
`;
const AProfile = styled.a`
  color: var(--color-white);
`;
const Icon = styled.i`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Span = styled.span`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
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
}

const NavBarInicio = ({color}) => {
    return (
        <>
            <MenuBar class="menu-bar">
                <Lista>
                    <LiHome class="Li-home">
                        <AHome class="opcion home" href="home.html">
                            <img src="../assets/icon-home-g.png" alt="" />
                            <Span>home</Span>
                        </AHome>
                    </LiHome>
                    <LiStatitics class="Li-estadisticas">
                        <AStatitics class="opcion statitics" href="statitics.html">
                            <img src="../assets/icon-statitics-w.png" alt="" />
                            <Span>estadisticas</Span>
                        </AStatitics>
                    </LiStatitics>
                    <LiProfile class="Li-profile">
                        <AProfile class="opcion profile" href="profile.html">
                            <img src="../assets/icon-perfil-w.png" alt="" />
                            <Span>perfil</Span>
                        </AProfile>
                    </LiProfile>
                </Lista>
            </MenuBar>
        </>
    )
}

export default NavBarInicio
