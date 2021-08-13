import React from 'react';
import '../style/style.css'
import NavBarInicio from "../components/Navbars/NavBarInicio";
import styled from 'styled-components';

const Principal = styled.div`
    background: #16161A;
    width: 100%;
    height: 586px;
`
const Contenedor = styled.div`
    background: #16161A;
    width: 100%;
    height: 585px;
    display:flex; justify-content:center;

    
`
const Estadisticas = styled.div`
    width:90%;
`
const H2 = styled.div`
    margin-bottom:70px;
    color: white; 
`
const Row = styled.div`
width: 90%;
`


const StatiticsComp = () => {
    return (
        <Principal>
        <Contenedor>

            <Estadisticas>

                <H2>
                    <h2>Estadísticas</h2>
                </H2>

                <Row>

                    <div className="col estadistica">
                        <p></p>
                        <div className="estadistica--p"><p></p></div>
                    </div>

                    <div className="col estadistica">
                        <p></p>
                        <div className="estadistica--p"><p></p></div>
                    </div>

                    <div className="col estadistica">
                        <p></p>
                        <div className="estadistica--p"><p></p></div>
                    </div>

                    <div className="col estadistica">
                        <p></p>
                        <div className="estadistica--p"><p></p></div>
                    </div>
                </Row>
            </Estadisticas>
            
        </Contenedor>
        <NavBarInicio></NavBarInicio>
        </Principal>
    )
}

export default StatiticsComp
