import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <RulesContainer>

        <h2>How to play the game?</h2>
        <div className="text">
            <p>1)  Select any number</p>
            <p>2)Click the dice</p>
            <p>3) After clicking the dice if the selected number matches the number on the dice you will get same point as the dice and 2 points will be deducted for each wrong guess.</p>
        </div>
    </RulesContainer>
  )
}

export default Rules


const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;


    h2{
        font-size: 24px;

    }

    .text{
        margin-top: 25px;
    }
`