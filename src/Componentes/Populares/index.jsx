import React from "react"
import { styled } from "styled-components"
import { fontSecundaria, roxo } from "../UI/variaveis"
import CardPoulares from "../CardPopulares"
import info from "./info.json"
const StylePopulares = styled.div`
  > h3 {
    font-family: ${fontSecundaria};
    font-size: 2em;
    color: ${roxo};
  }
`
const item = info
const ImagemPopulares = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export default function Populares() {
  return (
    <StylePopulares>
      <h3>As mais escolhidas !</h3>
      <ImagemPopulares>
        {item.map(({ titulo, img }) => (
          <CardPoulares titulo={titulo} img={img} />
        ))}
      </ImagemPopulares>
    </StylePopulares>
  )
}
