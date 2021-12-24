import React from 'react'
import styled from 'styled-components'
import dolar from '../assets/img/dolar.png'

const Barra = styled.div`
background-color: green;
width: 90%;
border-radius: 20px;
height: 20px;
border: 1px solid white;
margin-left: 5%;
`
const Content = styled.div`
padding: 10px;
display: flex;
align-items:center;
`
const P = styled.p`
    margin-left: 4px;
    color: white;
`
const Img = styled.img`
    width: 35px;
    height: 25px;
    margin-left: 10px;
`

const ProgressBar = () => {
    

    return (
        <Content>
            <Barra></Barra>
            <Img src={dolar} alt="" />
            <P id="oport"></P>
        </Content>
    )
}

export default ProgressBar
