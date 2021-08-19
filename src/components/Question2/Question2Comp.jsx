import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import ProgressBar from "../ProgressBar";

import { 
  QuestionMain,
  ContainerQuestion,
  Question4,
  TitleMain,
  Organizar,
  Options,
  Option,
 } from "../../style/Question2-styles";
 import { Colors } from "../../style/Colors";

const Question2Comp = ({data}) => {

  const { pregunta, opcion1, opcion2, opcion3, opcion4, opcion5} = data;



  return (
    <QuestionMain color={Colors}>
      <ContainerQuestion color={Colors}>
        <Question4>
          <ProgressBar />

          <TitleMain color={Colors}>
            <h2>{pregunta}</h2>
          </TitleMain>

          <Organizar>
            
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
