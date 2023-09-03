import React from "react"
import { styled } from "styled-components"
import { azul, fontPrimaria, roxo } from "../UI/variaveis"
const StyleCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
  border: 3px solid ${azul};
  border-radius: 10px;
  width: 200px;
  height: 250px;
  > img {
    width: 100%;
    height: 200px;
  }
  > h4 {
    font-family: ${fontPrimaria};
    font-size: 1.2em;
    color: ${azul};
  }
`
export default function CardPoulares({ img, titulo }) {
  return (
    <StyleCard>
      <img src={img}></img>
      <h4>{titulo}</h4>
    </StyleCard>
  )
}
