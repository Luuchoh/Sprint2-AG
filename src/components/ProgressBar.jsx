import React from 'react'
import styled from 'styled-components'

const Barra = styled.div`
background-color: green;
height: 20px;
`

const ProgressBar = () => {
    return (
        <div>
            <Barra></Barra>
        </div>
    )
}

export default ProgressBar
