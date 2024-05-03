import styled from "styled-components"

export const Button = styled.button`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 10px 15px;
    width: 220px;
    height: 45px;

    background: #000000;
    border:none;
    color: white;

    &: hover{
      cursor: pointer;
    }

`