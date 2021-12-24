import styled from "styled-components";
import { BiDollar } from "react-icons/bi";

export const Principal = styled.div`
  background: #16161a;
  width: 100%;
  height: 100%;

  @media (min-height: 506px) {
    height: 100vh;
  }
`;
export const Estadisticas = styled.div`
  width: 90%;
  margin: auto;
  @media (min-width: 768px) {
    width: 60%;
    margin: auto;
  }
  @media (min-width: 1028px) {
    width: 30%;
    margin: 0px auto;
  }
`;
export const H2 = styled.div`
  padding: 1rem 0;
  color: white;
  h2 {
    text-align: center;
    margin: 0;
  }
`;
export const Row = styled.div`
  width: 100%;
`;

export const ContainerEstadistica = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items:center;
  border: 2px solid grey;
  border-radius: 8px;
  padding: 1rem;
  margin: 40px auto 50px auto;
  box-sizing:border-box;

`;
export const Time = styled(BiDollar)`
  width: 24px;
  margin: 0 8px;
  color: ${(props) => props.color};
`;
export const Text = styled.div`
  width: 90%;
  color: #FFFFFE;
`;
export const Estadistica = styled.div`
  width: 10%;
`;
export const EstadisticaCorrect = styled.div`
  width: 10%;
  color: ${(props) => props.color};
`;
export const EstadisticaIncorrect = styled.div`
  width: 10%;
  color: ${(props) => props.color};
`;

export const ContainerForm = styled.div`
  width: 100%;
`;
export const Form = styled.form`
  width: 100%;
`;
export const Select = styled.select`
  width:45%;
  background-color: inherit;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 1rem 0;
  color: ${(props) => props.color};
  margin-bottom: 24px;
`;
export const Option = styled.option`
  background-color: ${(props) => props.color.black};
  border: none;
  outline: transparent;
  color: ${(props) => props.color.white};
`;

