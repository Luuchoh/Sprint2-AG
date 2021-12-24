import React, { Fragment, useState, useEffect } from 'react';

import NavBarInicio from '../components/Navbars/NavBarInicio';
import StatiticsComp from '../components/StatiticsComp';
import api from '../apiAxios/api';


const Statitics = () => {

    const [statitics, setStatitics] = useState([]);

    useEffect(() =>{
        const id = JSON.parse(localStorage.getItem('user'));
        getUsers(id);
    }, [])

    const getUsers = async(id) =>{
    const { data } = await api.get(`https://dailybits.herokuapp.com/users/`);

        data.forEach((user) =>{
            if(user.id === id){
                setStatitics(user);
            }
        })
    }

    return (
        <Fragment>
            <StatiticsComp user={statitics}/>
            <NavBarInicio page={'statitics'}/>
        </Fragment>
        
    )
}

export default Statitics
