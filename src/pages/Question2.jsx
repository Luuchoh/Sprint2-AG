import React from 'react';
import Question2Comp from '../components/Question2/Question2Comp';
import Button from '../components/Question2/Button';

import styled from "styled-components";

const Question2Div = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #16161A;
  color: #FFFFFE;
`;

const Question2 = () => {
    return (
        <Question2Div>
            <Question2Comp />
            <Button />
        </Question2Div>
    )
}

export default Question2
