// import React, { useState } from 'react'
import styled from 'styled-components'

function RoleDice({rollDice, currentDice}) {


  // const[currentDice, setCurrentDice] = useState(1);
  // const[currentDice, setCurrentDice] = useState(1);
  // const generateRandomNumber = (min, max) => {
  //   console.log(Math.floor(Math.random() * (max - min) + min));
  //   return Math.floor(Math.random() * (max - min) + min);
  // }

  // const rollDice = () => {
  //   const randomNumber = generateRandomNumber(1,7);
  //   setCurrentDice((prev) => randomNumber);
  // }

  return (
    <DiceContainer>
      <div className='dice'
        onClick={ rollDice}
      >
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice_${currentDice}`} />
      </div>

      <p>Click the dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p{
    font-size: 24px;
  }

  .dice{
    cursor: pointer;
  }

`