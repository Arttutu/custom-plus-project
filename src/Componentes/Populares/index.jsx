import React from "react"
import { styled } from "styled-components"
import { fontSecundaria, roxo } from "../UI/variaveis"
const StylePopulares = styled.div`
  > h3 {
    font-family: ${fontSecundaria};
    font-size: 2em;
    color: ${roxo};
  }
`
export default function Populares() {
  return (
    <StylePopulares>
      <h3>As mais escolhidas !</h3>
      <div>Aqui vao as imagens</div>
    </StylePopulares>
  )
}
