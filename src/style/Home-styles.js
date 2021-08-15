import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeDiv = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: #16161a;
  color: #fffffe;
`;

export const Main = styled.div`
  width: 90%;
  margin: auto;
  background-color: ${(props) => props.color.black};
  margin-bottom: 75px;

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
    margin-left: 95px;
    background-color: ${(props) => props.color.black};
  }
`;

export const TitleMain = styled.h5`
  width: 95%;
  padding-top: 40px;
  font-weight: 600;
  margin: 0px auto;
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.color.white};
  box-sizing: border-box;
`;
export const Categories = styled.section`
  margin: 0px auto;
  padding-bottom: 36px;
`;
export const Section1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  margin-top: 24px;
  width: 80%;
  text-align: center;
`;
export const Section2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  margin-top: 24px;
  width: 80%;
  text-align: center;
`;
export const Section3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  margin-top: 24px;
  width: 80%;
  text-align: center;
`;
export const Language = styled.div`
  width: calc(50% - 0px);
`;

export const Span = styled.span`
  margin: 10px 10px;
  text-transform: uppercase;
`;

export const ProgressBarCircle = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 50%;
  border: 10px solid ${(props) => props.color.white};
  margin: auto;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;
export const ALink = styled(Link)`
  margin: auto;
`;
