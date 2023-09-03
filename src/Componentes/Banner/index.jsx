import React from "react"
import { styled } from "styled-components"
import { fontPrimaria, fontSecundaria, roxo } from "../UI/variaveis"
import Botao from "../Botao/index"
import imagem from "./beyond.jpg"

const StyleBanner = styled.div`
  background: url(${imagem}) center center / cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: left;
  border-radius: 10px;
  padding: 20px;
  font-family: ${fontPrimaria};
  height: 300px;
  > h2 {
    color: ${roxo};
    font-size: 2.4em;
    text-transform: uppercase;
    font-family: ${fontSecundaria};
  }
`
export default function Banner() {
  return (
    <StyleBanner>
      <h2>Navegue pela nossa galeria</h2>
      <Botao texto="Explore nossas Artes"></Botao>
    </StyleBanner>
  )
}
