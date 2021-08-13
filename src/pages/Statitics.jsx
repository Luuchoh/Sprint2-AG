import React, { Fragment } from 'react';

import NavBarInicio from '../components/Navbars/NavBarInicio';
import StatiticsComp from '../components/StatiticsComp';


const Statitics = () => {
    return (
        <Fragment>
        <StatiticsComp />
        <NavBarInicio color={'statitics'}/>
        </Fragment>
        
    )
}

export default Statitics
