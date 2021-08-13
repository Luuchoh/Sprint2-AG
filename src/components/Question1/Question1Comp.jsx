import React, { useEffect, useState }  from 'react'
import Button from '../Button';
import { Link } from "react-router-dom";
import axios from "axios";


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
 
                  <header className="header__questionHTML">
                    <a href="/" id="irHome">
                    
                    </a>

                <div className="progress">
                    <div id="barra" className="progress-bar animacion" role="progressbar"></div>
                    </div>
                        
                    <div id="contador"></div>
                  </header>

                <div className="container_questionHTML">
                        <img src={pregunta.imag}/>
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
                <Link to="/Question3" ><Button></Button></Link>

                </div>
            </div>
            
        </div>
        
    )
    
}

export default Question1Comp;