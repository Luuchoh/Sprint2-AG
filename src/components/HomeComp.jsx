import React from "react";
import {
  Main,
  TitleMain,
  Categories,
  Section1,
  Section2,
  Section3,
  Language,
  ProgressBarCircle,
  ALink,
  Span
} from '../style/Home-styles';
import { Colors } from '../style/Colors'


const HomeComp = () => {
  return (
    <Main color={Colors}>
      <TitleMain color={Colors} >
        Practica tus conocimientos en la categoria que prefieras
      </TitleMain>
      <Categories>
        <Section1>
          <Language>
            <ProgressBarCircle color={Colors}>
              <ALink to="/Question1">
                <img src="../assets/icon-html.png" alt="ask HTMl" />
              </ALink>
            </ProgressBarCircle>
            <Span>html</Span>
          </Language>
        </Section1>
        <Section2>
          <Language>
            <ProgressBarCircle color={Colors}>
              <ALink to="/QuestionCss">
                <img src="../assets/icon-CSS.png" alt="ask CSS" />
              </ALink>
            </ProgressBarCircle>
            <Span>css</Span>
          </Language>

          <Language>
            <ProgressBarCircle color={Colors}>
              <ALink to="/QuestionJs">
                <img src="../assets/icon-JS.png" alt="ask JS" />
              </ALink>
            </ProgressBarCircle>
            <Span>js</Span>
          </Language>
        </Section2>

        <Section3>
          <Language>
            <ProgressBarCircle color={Colors}>
              <ALink to="/Home">
                <img src="../assets/icon-figma.png" alt="ask Figma" />
              </ALink>
            </ProgressBarCircle>
            <Span>figma</Span>
          </Language>

          <Language>
            <ProgressBarCircle color={Colors}>
              <ALink to="/Home">
                <img src="../assets/icon-UX.png" alt="ask UX" />
              </ALink>
            </ProgressBarCircle>
            <Span>ux</Span>
          </Language>
        </Section3>
      </Categories>
    </Main>
  );
};

export default HomeComp;
