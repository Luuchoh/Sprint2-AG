import React, { useEffect, useState }  from 'react'
import Button from '../Button';
import { Link } from "react-router-dom";
import axios from "axios";
import ProgressBar from '../ProgressBar';
import styled from 'styled-components';

const BarraP = styled.div`
    width: 100%;
`
const Progress = styled.div`
width: 320px;
`
const Question1Comp = ({id}) => {

    
    const[pregunta , setPregunta] = useState([]);
    

    useEffect(() => {
        obtenerDatos()
    },[])

    const obtenerDatos = async() =>{
        const url =`https://dailybits.herokuapp.com/questionHtml/${id}`
        const resp  = await axios.get(url);
        const data = await resp.data
        setPregunta(data);
        console.log(data);
        return data
    }


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
                        <img src={pregunta.imag} alt="" />
                        <p>¿Qué etiqueta es semánticamente correcta para el contenido principal?</p>
                        
                </div>

                
                <div className="container__input">
                    <label className="container__label">{pregunta.respuesta1}
                        <input id="main-input" name="input-radio" value="main" type="radio" className="input-radio" />

                    </label>

                    <label className="container__label">{pregunta.respuesta2}
                        <input name="input-radio" value="section" type="radio" className="input-radio" />
                    </label>

                    <label className="container__label">{pregunta.respuesta3}
                        <input name="input-radio" value="header" type="radio" className="input-radio" />
                    </label>

                <div className="mostrar"></div>
                <Link to="/Question2" ><Button></Button></Link>

                </div>
            </div>
            
        </div>
        
    )
    
}

export default Question1Comp;