import React from "react"
import { styled } from "styled-components"
import Banner from "../Componentes/Banner"
import { corBg } from "../Componentes/UI/variaveis"
const StyleMain = styled.main`
  height: 100vh;
  width: 100%;
  background-color: ${corBg};
`

export default function Index() {
  return (
    <StyleMain>
      <Banner />
    </StyleMain>
  )
}
