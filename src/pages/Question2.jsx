import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import Question2Comp from "../components/Question2/Question2Comp";
import { Question2Div } from "../style/Question2-styles";

const Question2 = () => {
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    const pregunta = async () => {
      try {
        const { data } = await axios.get(
          `http://dailybits.herokuapp.com/selecc`
        );
        setCategoria(data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    pregunta();
  }, []);

  return (
    <Fragment>
      <Question2Div>
        <Question2Comp data={categoria} />
      </Question2Div>
    </Fragment>
  );
};

export default Question2;
