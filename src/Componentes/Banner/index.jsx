import React from "react"
import { styled } from "styled-components"
import {
  azul,
  branco,
  corBg,
  fontPrimaria,
  fontSecundaria,
  preto,
  roxo,
} from "../UI/variaveis"
import { Box } from "../UI/index"
import Botao from "../Botao/index"
import imagem from "./beyond.jpg"

const StyleConteudo = styled.div`
  border: 0.25rem dashed ${roxo};
  border-radius: 0.25rem;
  padding: 20px;
  height: 100vh;
  background-color: ${corBg};
`
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
    font-size: 2.4em;
    text-transform: uppercase;
    font-family: ${fontSecundaria};
  }
`
export default function Banner() {
  return (
    <Box>
      <StyleConteudo>
        <StyleBanner>
          <h2>Navegue pela nossa galeria</h2>
          <Botao texto="Explore nossas Artes"></Botao>
        </StyleBanner>
      </StyleConteudo>
    </Box>
  )
}
