import React from "react";
import "../style/style.css";

import {
  Principal,
  Estadisticas,
  H2,
  Row,
  ContainerForm,
  Form,
  Select,
  Option,
  ContainerEstadistica,
  Time,
  Message,
  Text,
  Estadistica,
  EstadisticaCorrect,
  EstadisticaIncorrect
} from "../style/Statitics-styles";
import { Colors } from "../style/Colors";

const StatiticsComp = ({user}) => {
  
  const{ statitics }= user;


  return (
    <Principal>
      <Estadisticas>
        <H2>
          <h2>Estadísticas</h2>
        </H2>

        <ContainerForm>
          <Form>
            <Select color={Colors.white}>
              <Option color={Colors} value="7">
                Los últimos 7 días
              </Option>
              <Option color={Colors} value="14">
                Los últimos 14 días
              </Option>
              <Option color={Colors} value="30">
                El último mes
              </Option>
            </Select>
          </Form>
        </ContainerForm>

        <Row>
          <ContainerEstadistica>
            <Time color={Colors.Negro} />
            <Text>Tiempo de estudio (horas)</Text>
            <Estadistica>
              <Text>{statitics?statitics.timeHours: 0}</Text>
            </Estadistica>
          </ContainerEstadistica>

          <ContainerEstadistica>
            <Message color={Colors.Negro} />
            <Text>Respuestas contestadas</Text>
            <Estadistica>
              <Text>{statitics?statitics.constrainedQuestions: 0}</Text>
            </Estadistica>
          </ContainerEstadistica>

          <ContainerEstadistica>
            <Message color={Colors.Negro} />

            <Text>Respuestas correctas</Text>
            <EstadisticaCorrect color={Colors.green}>
              <span>{statitics?statitics.CorrectQuestions: 0}</span>
            </EstadisticaCorrect>
          </ContainerEstadistica>

          <ContainerEstadistica>
            <Message color={Colors.Negro} />

            <Text>Respuestas incorrectas</Text>
            <EstadisticaIncorrect color={Colors.red}>
              <span>{statitics?statitics.IncorrectQuestion: 0}</span>
            </EstadisticaIncorrect>
          </ContainerEstadistica>
        </Row>
      </Estadisticas>
    </Principal>
  );
};

export default StatiticsComp;
