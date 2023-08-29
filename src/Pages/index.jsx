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
} from "../Componentes/UI/variaveis"
import { Box } from "../Componentes/UI"
import Botao from "../Componentes/Botao"
import imagem from "./beyond.jpg"
const StyleMain = styled.main`
  height: 100vh;
  width: 100%;
  background-color: ${corBg};
`
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
export default function Index() {
  return (
    <StyleMain>
      <Box>
        <StyleConteudo>
          <StyleBanner>
            <h2>Navegue pela nossa galeria</h2>
            <Botao texto="Explore nossas Artes"></Botao>
          </StyleBanner>
        </StyleConteudo>
      </Box>
    </StyleMain>
  )
}
