import React from "react"
import { styled } from "styled-components"
import Banner from "../Componentes/Banner"
import { corBg, roxo } from "../Componentes/UI/variaveis"
import Populares from "../Componentes/Populares"
import { Box } from "../Componentes/UI"
const StyleMain = styled.main`
  height: 100%;
  width: 100%;
  background-color: ${corBg};
`
const StyleConteudo = styled.div`
  border: 0.25rem solid ${roxo};
  border-radius: 0.25rem;
  padding: 20px;
  height: 100%;
  background-color: ${corBg};
`

export default function Index() {
  return (
    <StyleMain>
      <Box>
        <StyleConteudo>
          <Banner />
          <Populares />
        </StyleConteudo>
      </Box>
    </StyleMain>
  )
}
