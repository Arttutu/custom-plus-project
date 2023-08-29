import React from "react"
import { styled } from "styled-components"
import {
  corBg,
  fontPrimaria,
  fontSecundaria,
  preto,
} from "../Componentes/UI/variaveis"
import { Box } from "../Componentes/UI"
const StyleMain = styled.main`
  height: 100vh;
  width: 100%;
  background-color: ${corBg};
`
const StyleConteudo = styled.div`
  border-radius: 10px;
  border: 2px solid ${preto};
  padding: 20px;
  height: 100vh;
`
const StyleBanner = styled.div`
  border-radius: 10px;
  border: 2px solid ${preto};
  padding: 20px;
  font-family: ${fontPrimaria};
`
export default function Index() {
  return (
    <StyleMain>
      <Box>
        <StyleConteudo>
          <StyleBanner>
            <p>Bem-Vindo ao Custom Plus</p>
            <h2>Navegue pela nossa galeria</h2>
            <button>Explone nossas Artes</button>
          </StyleBanner>
        </StyleConteudo>
      </Box>
    </StyleMain>
  )
}
