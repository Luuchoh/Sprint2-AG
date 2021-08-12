import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainFooter = styled.div`
  width: 100vw;
  height: 80px;
  bottom: 0px;
  position: fixed;
  display: inline-block;
  z-index: 1;
  padding: 1rem;
  background-color: ${(props) => props.color.black};
  box-sizing: border-box;
`;

const ContainerButton = styled.form`
  width: 100%;
`;

const ButtonMain = styled.button`
  width: 100%;
  background-color: ${(props) => props.color.purple};
  color: ${(props) => props.color.white};
  border-radius: 16px;
  border: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  padding: 1rem;
  text-transform: uppercase;

  &:disabled {
    background-color: #d4caf3;
  }
`;

const MainFooterCorrect = styled.div`
  width: 100%;
  height: 125px;
  bottom: -150px;
  position: fixed;
  display: inline-block;
  z-index: -1;
  padding: 1rem;
  background-color: #acffcf;
`;

const TextCorrect = styled.p`
  font-weight: bold;
  color: ${(props) => props.color.black};
`;

const ContainerCorrectButton = styled.form`
  width: 100%;
`;

const ButtonCorrect = styled.button`
  width: 100%;
  background-color: ${(props) => props.color.green};
  color: ${(props) => props.color.white};
  border-radius: 16px;
  border: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  padding: 1rem;
  text-transform: uppercase;
`;

const MainFooterIncorrect = styled.div`
  width: 100%;
  height: 155px;
  bottom: -200px;
  position: fixed;
  display: inline-block;
  z-index: 0;
  padding: 1rem;
  background-color: #f9cfd7;
  box-sizing: border-box;
`;
const ContainerMessage = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 1rem;
  overflow-y: scroll;
  scrollbar-width: none;
  box-sizing: border-box;
`;
const TitleMessage = styled.h5`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.color.black};
`;
const MessageP = styled.p`
  font-weight: 300;
  color: ${(props) => props.color.black};
  margin: 0;
`;
// const MessageSpan = styled.span`
//   display: inline-block;
//   color: ${(props) => props.color.black};
//   margin-bottom: 1rem;
//   width: 100%;
//   white-space: normal;
//   box-sizing: border-box;
// `;
const ContainerIncorrectButton = styled.form`
  width: 100%;
`;
const ButtonIncorrect = styled.button`
  width: 100%;
  background-color: ${(props) => props.color.red};
  color: ${(props) => props.color.white};
  border-radius: 16px;
  border: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  padding: 1rem;
  text-transform: uppercase;
`;

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

const Button = () => {
  return (
    <Fragment>
      <MainFooter color={colors}>
        <ContainerButton>
          <Link to="/home">
            <ButtonMain color={colors} type="submit" >
              Comprobar
            </ButtonMain>
          </Link>
        </ContainerButton>
      </MainFooter>
      <MainFooterCorrect>
        <TextCorrect color={colors}>¡Buen trabajo!</TextCorrect>

        <ContainerCorrectButton>
          <Link to="/home">
            <ButtonCorrect color={colors} type="submit">
              Continuar
            </ButtonCorrect>
          </Link>
        </ContainerCorrectButton>
      </MainFooterCorrect>
      <MainFooterIncorrect>
        <ContainerMessage>
          <TitleMessage color={colors}>La respuesta correcta es:</TitleMessage>
          <MessageP color={colors}>algo</MessageP>
        </ContainerMessage>

        <ContainerIncorrectButton>
          <Link to="/home">
            <ButtonIncorrect color={colors} type="submit">
              Continuar
            </ButtonIncorrect>
          </Link>
        </ContainerIncorrectButton>
      </MainFooterIncorrect>
    </Fragment>
  );
};

export default Button;
