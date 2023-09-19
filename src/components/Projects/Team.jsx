import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Members = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1>NOSSA EQUIPE</h1>
            
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Members;

const Container = styled.div`
    width: 70%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
  /* z-index: -1; */
    
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
        color:#fff;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    @media(max-width :680px){
        width: 90%;
    }
    
`

const Slide = styled.div``