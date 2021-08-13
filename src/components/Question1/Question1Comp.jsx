import React from 'react'
import Button from '../Button';
import { Link } from "react-router-dom";
import ProgressBar from '../ProgressBar';
import styled from 'styled-components';

const BarraP = styled.div`
    width: 100%;
`
const Progress = styled.div`
width: 320px;
`

const Question1Comp = () => {
    return (

        <div className="questionHTML">
            
                
                <div className="questionsOne">  
                  <BarraP>
                    <Link to="/" id="irHome"></Link>

                <div className="progress">
                    <Progress id="barra" className="progress-bar animacion" role="progressbar">
                        <ProgressBar />
                    </Progress>
                    </div>
                        
                    <div id="contador"></div>
                  </BarraP>

                <div className="container_questionHTML">
                        

                        <p>¿Qué etiqueta es semánticamente correcta para el contenido principal?</p>
                </div>


                <div className="container__input">
                    <label className="container__label">main
                        <input id="main-input" name="input-radio" value="main" type="radio" className="input-radio" />

                    </label>

                    <label className="container__label">section
                        <input name="input-radio" value="section" type="radio" className="input-radio" />
                    </label>

                    <label className="container__label">header
                        <input name="input-radio" value="header" type="radio" className="input-radio" />
                    </label>

                <div className="mostrar"></div>
                <Link to="/Question2"><Button></Button></Link>

                </div>
            </div>
            
        </div>
        
    )
    
}

export default Question1Comp;