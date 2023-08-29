import React from "react"
import { styled } from "styled-components"
import logo from "./customPlus.png"
import {
  azul,
  branco,
  fontPrimaria,
  fontSecundaria,
  roxo,
} from "../UI/variaveis"
const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  font-size: 1.5em;
  font-family: ${fontPrimaria};
  color: ${roxo};
`
const StyleUl = styled.ul`
  display: flex;
  gap: 2em;
  list-style: none;
`
const StyleLi = styled.li`
  font-size: 1em;

  font-family: ${fontPrimaria};
`
const StyleLogo = styled.img`
  width: 80px;
`
const StyleNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function Menu() {
  return (
    <StyleNav>
      <BoxLogo>
        <StyleLogo src={logo}></StyleLogo>
        <h1> Custom +</h1>
      </BoxLogo>
      <StyleUl>
        <StyleLi>home</StyleLi>
        <StyleLi>sobre nós</StyleLi>
        <StyleLi>Contato</StyleLi>
        <StyleLi>Nossas Artes</StyleLi>
      </StyleUl>
    </StyleNav>
  )
}
