import React  from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainFooter = styled.div`
    display: inline-block;
    padding: 0;
    background-color: ${(props) => props.color.black};
`;

const ContainerButton = styled.form`
  width: 100%;
`;

const ButtonMain = styled.button`
  margin-top: 29px;
  margin-bottom: 10px;
  width: 328px;
  height: 45px;
  background: #D4CAF3;
  border: 0px;
  border-radius: 16px;
  color: white;
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;

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

export const ButtonCorrect = styled.button`
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
  //const [click, handleClick] = useState([]);
  return (
    <>
      <MainFooter color={colors}>
        <ContainerButton>

            <ButtonMain color={colors} type="submit">
              SIGUIENTE
            </ButtonMain>

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
    </>
  );
};

export default Button;
