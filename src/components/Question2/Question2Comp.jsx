import React from "react";
import styled from "styled-components";

// import Button from "./Button";

const QuestionMain = styled.div`
  width: 90%;
  margin: auto;
  background-color: ${(props) => props.color.black};
  margin-bottom: 76px;

  @media (min-width: 728px) {
    width: 80%;
    margin: auto;
    background-color: ${(props) => props.color.black};
    margin-bottom: 76px;
  }
  @media (min-width: 1028px) {
    width: 70%;
    margin: auto;
    background-color: ${(props) => props.color.black};
    margin-top: 76px;
  }
`;

const ContainerQuestion = styled.div`
  background: ${(props) => props.color.black};
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  /*padding-bottom: 5%;*/
`;

const Question4 = styled.div`
  width: 100%;
`;
const TitleMain = styled.div`
  color: ${(props) => props.color.white};
  padding: 1rem;
  text-align: start;
  
  h2{
      margin: 0;
    }
`;
const Organizar = styled.div`
  height: 250px;
  display: grid;
  width: 75%;
  margin-left: 36px;
  text-align: -webkit-center;
  grid-column: 1 / 4;
  grid-row: 1;
  grid-template-columns: repeat(2, 2fr);
  gap: 5px;
  margin-top: 20px;
`;
const Respuesta = styled.div`
  display: grid;
  border: 2px solid #72757e;
  height: 35px;
  box-sizing: border-box;
  align-items: center;
  box-shadow: 0px 2px 0px #94a1b2;
  border-radius: 16px;
`;
const Options = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
`;
const Option = styled.div`
  width: auto;
  padding: 8px;
  text-align: center;
  margin-left: 6px;
  margin-top: 3%;
  border-radius: 20px;
  border: 1.8px solid #b099d8;

  a {
    color: deeppink;
  }
`;
// const Icon = styled.img`
//   display: inline-block;
// `;
// colors
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

const Question2Comp = () => {
  return (
    <QuestionMain color={colors}>
      <ContainerQuestion color={colors}>
        <Question4>
          <TitleMain color={colors}>
            <h2>Organiza la estructura de un documento HTML5</h2>
          </TitleMain>

          <Organizar>
            <Respuesta></Respuesta>
            <Respuesta></Respuesta>
            <Respuesta></Respuesta>
            <Respuesta></Respuesta>
            <Respuesta></Respuesta>
          </Organizar>

          <Options>
            <Option>
              <a>
                <code id="code-pregunta4-section1">&ltbody&gt &lt/body&gt</code>
              </a>
            </Option>

            <Option>
              <a>
                <code id="code-pregunta4-section2">&lthead&gt &lt/head&gt</code>
              </a>
            </Option>

            <Option>
              <a>
                <code id="code-pregunta4-section3">&lthtml&gt</code>
              </a>
            </Option>
            <Option id="html-col">
              <a>
                <code id="code-pregunta4-section4">&lt/html&gt</code>
              </a>
            </Option>
            <Option id="html-col">
              <a>
                <code id="code-pregunta4-section5">&lt!DOCTYPE html&gt</code>
              </a>
            </Option>
          </Options>
        </Question4>
      </ContainerQuestion>
    </QuestionMain>
  );
};

export default Question2Comp;
