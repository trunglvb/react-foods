import React from 'react'
import {Container, } from 'reactstrap'
import './index.scss'

const CommonSection = ({title}) => {

    return (
        <section className='common_section'>
            <Container>
                <h3>{title}</h3>
            </Container>
        </section>
    )
}

export default CommonSection