import styled from "styled-components";



export const Question2Div = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #16161A;
  color: #FFFFFE;
`;
export const QuestionMain = styled.div`
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

export const ContainerQuestion = styled.div`
  background: ${(props) => props.color.black};
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Question4 = styled.div`
  width: 100%;
`;
export const TitleMain = styled.div`
  color: ${(props) => props.color.white};
  padding: 1rem;
  text-align: start;
  
  h2{
      margin: 0;
    }
`;
export const Organizar = styled.div`
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
export const Respuesta = styled.div`
  display: grid;
  border: 2px solid #72757e;
  height: 35px;
  box-sizing: border-box;
  align-items: center;
  box-shadow: 0px 2px 0px #94a1b2;
  border-radius: 16px;
`;
export const Options = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
`;
export const Option = styled.div`
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