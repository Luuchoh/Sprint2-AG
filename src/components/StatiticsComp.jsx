import React from 'react';
import '../style/style.css'
import NavBarInicio from "../components/Navbars/NavBarInicio";

const StatiticsComp = () => {
    return (
        <div>
        <div className="container-fluid indexApp">

            <div className="container estadisticas">

                <div className="text-center">
                    <h2>Estadísticas</h2>
                </div>

                <div className="row">

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
                </div>
            </div>
            
        </div>
        <NavBarInicio></NavBarInicio>
        </div>
    )
}

export default StatiticsComp
