import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, name, level,disc } = props.item;
  return (
    <Container className='project' >
        <img src={img} alt="project" />
        <div className="disc">
            <h1>{name}<span> - {level}</span></h1>
            <p>{disc}
            <a href="/">about</a>
            </p>
        </div>
    </Container>
  )
}

export default Project;

const Container = styled.div`
    height: 10rem;
    /* width: 30rem; */
      /* Add the blur effect */
  

  /* Full height */
    height: 10rem;
    background-image: url("https://uploads-ssl.webflow.com/64139613c0522c1dc98c52e5/6413975e05419edf48d393d9_OpVc.gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit:contain;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
            color:white;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                color: red;
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
    }

    :hover > .disc{
        bottom: 0;
    }

`