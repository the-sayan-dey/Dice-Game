import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'

const Button = styled.button`

  background-color: black;
  color: white;
  padding: 10px;
  

`

function App() {
  
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {/* <Button>This is Styled button</Button> */}
      {isGameStarted ? <GamePlay/> : <StartGame toggle = {toggleGamePlay} />}
    </>
  )
}

export default App
