import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import  Button  from '../Button';
import styled from "styled-components";

const ContenedorLogin = styled.div`
    background: #16161A;
    align-items: center;
    display: flex;
    flex-direction: column
`;

const QuestionTecnologias = styled.div`
    color: white;
    margin-left: -70px;
`;

const Question3Comp = ({id}) => {

    const[pregunta , setPregunta] = useState([]);
    
    
    useEffect(() => {
        obtenerDatos()
    },[])

    const obtenerDatos = async() =>{
        const url =`https://dailybits.herokuapp.com/options/${id}`
        const resp  = await axios.get(url);
        const data = await resp.data
        setPregunta(data);
        console.log(data);
        return data
    }
    console.log(pregunta.seleccion1)


    return (
        <ContenedorLogin>

            <p className="title-Pregunta">{pregunta.pregunta}</p>
            <QuestionTecnologias>

                <ul className="ul-Question5Html">
                    <li>
                        <img  className="img-Question3"  src={pregunta.seleccion1}/>
                        <p>Angular</p>
                    </li>
                    <li>
                    <img className="img-Question3" src={pregunta.seleccion2} />
                        <p>Vue.js</p>
                    </li>
                </ul>
                <ul className="ul-Question5Html">
                    <li>
                    <img  className="img-Question3" src={pregunta.seleccion4} />
                        <p>Window</p>
                    </li>
                    <li>
                    <img className="img-Question3" src={pregunta.seleccion3} />
                        <p>Kotlin</p>
                    </li>
                </ul>

            </QuestionTecnologias>
            <Link to="/Statitics"><Button></Button></Link>
        </ContenedorLogin>
    )
}

export default Question3Comp
