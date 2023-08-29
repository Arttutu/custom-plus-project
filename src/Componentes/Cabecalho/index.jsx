import React from "react"
import { Box } from "../UI"
import Menu from "../Menu"
import { styled } from "styled-components"
import { corBg } from "../UI/variaveis"
const StyleHeader = styled.header`
  background-color: ${corBg};
`
export default function Cabecalho() {
  return (
    <StyleHeader>
      <Box>
        <Menu />
      </Box>
    </StyleHeader>
  )
}
