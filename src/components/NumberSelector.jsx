import React, { useState } from 'react'
import styled from 'styled-components'

function NumberSelector({error, selectedNumber, setSelectedNumber}) {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    

    console.log(selectedNumber);

    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
            {arrNumber.map((value, index) => ( // Corrected the parameters to (value, index)
                <Box 
                isSelected = {value === selectedNumber}
                key={index} onClick={() => setSelectedNumber(value)}>{value}</Box> // Used index as the key
            ))}
            </div>

            <p>Select number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    .flex{
        display: flex;
        gap: 25px;
    }

    p{
        font-size: 25px;
        font-weight: 700px;
    }

    .error{
        color: red;
    }

`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 2px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 800;

    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
`;
