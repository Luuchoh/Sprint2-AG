import React from "react";
import styled from "styled-components";
import Button from '../Button';
import ProgressBar from "../ProgressBar";
import { Link } from "react-router-dom";

// import Button from "./Button";

const QuestionMain = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  margin: 0px auto;
  background-color: #16161A;

  @media (min-width: 728px) {
    width: 80%;
    margin: auto;
    background-color: ${(props) => props.color.black};
  }
  @media (min-width: 1028px) {
    width: 60%;
    display: flex;
    justify-content: center;
    margin: 0px auto;
    background-color: #16161A;
    width: 30%;
  }
`;

const ContainerQuestion = styled.div`
  background: ${(props) => props.color.black};
  align-items: center;
  display: flex;
  flex-direction: column;
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

const Question2Comp = ({data}) => {

  console.log('datacomp');
  const { id, pregunta, opcion1, opcion2, opcion3, opcion4, opcion5} = data;


  return (
    <QuestionMain color={colors}>
      <ContainerQuestion color={colors}>
        <Question4>
          <ProgressBar />
          <TitleMain color={colors}>
            <h2>{pregunta}</h2>
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
              <Link>
                <code id="code-pregunta4-section1">{opcion1}</code>
              </Link>
            </Option>

            <Option>
              <Link>
                <code id="code-pregunta4-section2">{opcion2}</code>
              </Link>
            </Option>

            <Option>
              <Link>
                <code id="code-pregunta4-section3">{opcion3}</code>
              </Link>
            </Option>
            <Option id="html-col">
              <Link>
                <code id="code-pregunta4-section4">{opcion4}</code>
              </Link>
            </Option>
            <Option id="html-col">
              <Link>
                <code id="code-pregunta4-section5">{opcion5}</code>
              </Link>
            </Option>
          </Options>
          <Link to="/Question3"><Button></Button></Link>
          
        </Question4>
        
      </ContainerQuestion>
    </QuestionMain>
  );
};

export default Question2Comp;
