import React from "react"
import { styled } from "styled-components"
import { fontPrimaria } from "../UI/variaveis"
const StyleBotao = styled.button`
  border-radius: 15px;
  font-family: ${fontPrimaria};
  font-size: 1em;
  padding: 5px;
  text-align: center;
  border: 2px solid black;
  width: 200px;
`
export default function Botao({ texto }) {
  return <StyleBotao>{texto}</StyleBotao>
}
