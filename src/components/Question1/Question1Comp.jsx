import React from 'react'
import Button from '../Button';
import { Link } from "react-router-dom";
//import style from '../style/style.css'

const Question1Comp = () => {
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