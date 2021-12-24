import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContenedorPadre = styled.div`
  height: 100%;
  background: black;
  background-size: cover;
`;
export const ContenedorLogin = styled.div`
  background: black;
  width: 100vw;
  height: 100%;
  box-sizing: border-box;

  @media (min-height: 671px){
    height: 100vh;
 }

  @media (min-width: 728px) {
    width: 50vw;
    margin: auto;
  }

  @media (min-width: 1028px) {
    width: 25vw;
  }
`;

export const ContenedorRegister = styled.div`
  background: black;
  width: 100vw;
  height: 100%;
  box-sizing: border-box;

  @media (min-height: 881px){
    height: 100vh;
 }

  @media (min-width: 728px) {
    width: 50vw;
    margin: auto;
  }

  @media (min-width: 1028px) {
    width: 25vw;
  }
`;

export const ContainerImagen = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
export const Imagen = styled.img`
  width: 100px;
`;
export const Title = styled.h1`
  text-align: center;
  color: #fffffe;
`;

export const LinkGoogle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #ef4565;
  border-radius: 4px;
  padding: 15px;
  width: 100%;
  font-weight: bold;
  transition: all 0.5s ease;
  &:hover {
    background: #f70e39;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0px auto;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 20px;
  margin: 0 15px;
`;
export const Hr = styled.hr`
  width: 100%;
  border: 1px solid #94a1b2a3;
  margin-top: 15px;
`;
export const Label = styled.label`
  margin: 1rem 1rem;
  color: #fffffe;
`;
export const Input = styled.input`
  width: 100%;
  border: 0px;
  border-radius: 4px;
  color: black;
  padding: 15px;

  &:disabled{
    background-color: #fff;
  }
`;
export const ContainerFile = styled.div`
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
`;
export const ButtonFile = styled.button`
  width: auto;
  padding: 0.75rem 1.5rem;
  background-color: #6b47dc;
  color: #fff;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: #48328c;
  }
`;

export const Button = styled.button`
  background-color: #6b47dc;
  color: #fff;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 0.8rem 1.4rem;
  align-self: center;
  border-radius: 5px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #48328c;
  }
`;
export const LinkPass = styled(Link)`
  width: 100%;
  text-decoration-line: underline;
  color: #2cb67d;
  text-align: center;
  margin: 20px 0;
`;
export const ContainerUser = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  color: #fff;
  margin: 20px 0;
`;
export const P = styled.p`
  margin: 0;
`;
export const LinkReg = styled(Link)`
  text-decoration-line: underline;
  color: #2cb67d;
  text-align: center;
  margin: 0 10px;
`;
