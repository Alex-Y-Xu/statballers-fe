import React from 'react';
import styled from 'styled-components';
import shirt from '../Resources/shirt.png'

const Shirt = styled.div`
    position: relative;
    text-align: center;
    color: black;
    cursor: pointer;
`;

const ShirtNumber = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 800;
    font-size: 20px;
`;

function Player(props) {
  const {id, margin, name, num, setPlayer} = props
  return (

    <Shirt style={{margin : margin}} onClick={() => setPlayer(id)}>
        <h4 style={{margin: '0', fontSize: '22px', color: 'white'}}>{name}</h4>
        <img style={{height: '100px', width: 'auto'}} src={shirt} alt='shirt'/>
        <ShirtNumber>{num}</ShirtNumber>
    </Shirt>
  )
}

export default Player