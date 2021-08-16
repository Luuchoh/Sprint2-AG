import React from 'react'
import styled from 'styled-components'
import union from '../assets/img/Union.png'

const Barra = styled.div`
background-color: green;
width: 90%;
border-radius: 20px;
height: 20px;
border: 1px solid white;
margin-left: 5%;
`
const Content = styled.div`
display: flex;
align-items:center;
`
const P = styled.p`
    margin-left: 4px;
    color: white;
`
const Img = styled.img`
    margin-left: 10px;
`

const ProgressBar = () => {
    return (
        <Content>
            <Barra></Barra>
            <Img src={union} alt="" />
            <P id="oport">4</P>
        </Content>
    )
}

export default ProgressBar
