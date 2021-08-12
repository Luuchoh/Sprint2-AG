import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Main = styled.div`
  width: 90%;
  margin: auto;
  background-color: ${(props) => props.color.black};
  margin-top: -30px;

  @media (min-width: 768px) {
    width: 90%;
    margin: auto;
    margin-left: 60px;
    background-color: ${(props) => props.color.black};
    margin-bottom: 76px;
  }
  @media (min-width: 1028px) {
    width: 90%;
    margin: 0px auto;
    margin-left:95px;
    background-color: ${(props) => props.color.black};
    margin-top: -30px;
  }
`;

const TitleMain = styled.h5`

    width: 95%;
    padding-top: 40px;
    font-weight: 600;
    margin: 0px auto;
    font-size: 18px;
    text-align: center;
    padding-top: 61px;
    color: ${(props) => props.color.white};
    box-sizing: border-box;

    
`;
const Categories = styled.section`
  width: 350px;
  margin: 0px auto;
  padding-bottom: 36px;
`;
const Section1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  margin-top: 24px;
  width: 80%;
  text-align: center;
`;
const Section2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  margin-top: 24px;
  width: 80%;
  text-align: center;
`;
const Section3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  margin-top: 24px;
  width: 80%;
  text-align: center;
`;
const Language = styled.div`
  width: calc(50% - 0px); 
`;

const Span = styled.span`
  margin: 10px 10px;
  text-transform: uppercase;
`;

const ProgressBarCircle = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 50%;
  border: 10px solid ${(props) => props.color.white};
  margin: auto;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;
const ALink = styled(Link)`
  margin: auto;
`;

// Colors

const colors = {
  black: "#16161A",
  white: "#FFFFFE",
};

const ComponentHome = () => {
  return (
    <Main color={colors}>
      <TitleMain color={colors} >
        Practica tus conocimientos en la categoria que prefieras
      </TitleMain>
      <Categories>
        <Section1>
          <Language>
            <ProgressBarCircle color={colors}>
              <ALink to="/Question1">
                <img src="../assets/icon-html.png" alt="ask HTMl" />
              </ALink>
            </ProgressBarCircle>
            <Span>html</Span>
          </Language>
        </Section1>
        <Section2>
          <Language>
            <ProgressBarCircle color={colors}>
              <ALink to="/Home">
                <img src="../assets/icon-CSS.png" alt="ask CSS" />
              </ALink>
            </ProgressBarCircle>
            <Span>css</Span>
          </Language>

          <Language>
            <ProgressBarCircle color={colors}>
              <ALink to="/Home">
                <img src="../assets/icon-JS.png" alt="ask JS" />
              </ALink>
            </ProgressBarCircle>
            <Span>js</Span>
          </Language>
        </Section2>

        <Section3>
          <Language>
            <ProgressBarCircle color={colors}>
              <ALink to="/Home">
                <img src="../assets/icon-figma.png" alt="ask Figma" />
              </ALink>
            </ProgressBarCircle>
            <Span>figma</Span>
          </Language>

          <Language>
            <ProgressBarCircle color={colors}>
              <ALink to="/Home">
                <img src="../assets/icon-UX.png" alt="ask UX" />
              </ALink>
            </ProgressBarCircle>
            <Span>ux</Span>
          </Language>
        </Section3>
      </Categories>
    </Main>
  );
};

export default ComponentHome;
