import React, { Fragment } from 'react';

import NavBarInicio from '../components/Navbars/NavBarInicio';
import StatiticsComp from '../components/StatiticsComp';


const Statitics = () => {
    return (
        <Fragment>
        <StatiticsComp />
        <NavBarInicio page={'statitics'}/>
        </Fragment>
        
    )
}

export default Statitics
