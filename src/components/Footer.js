import React from 'react'
import * as Foot from './Styled/StyledFooter'


const Footer = () => {
  return (
    <Foot.StyledFooter>
      <Foot.StyledContainerMain>
      <Foot.StyledContainer>
        <Foot.StyledTitle>Contáctenos</Foot.StyledTitle>
        <Foot.StyledTag>Trabajar en Amazon</Foot.StyledTag>
      </Foot.StyledContainer>
      <Foot.StyledContainer>
        <Foot.StyledTitle>Gana dinero con nosotros</Foot.StyledTitle>
        <Foot.StyledTag>Vender en Amazon</Foot.StyledTag>
      </Foot.StyledContainer>
      <Foot.StyledContainer>
        <Foot.StyledTitle>Podemos ayudarte</Foot.StyledTitle>
        <Foot.StyledTag>Ayuda</Foot.StyledTag>
      </Foot.StyledContainer>
      <Foot.StyledContainer>
        <Foot.StyledTitle>Métodos de pago</Foot.StyledTitle>
        <Foot.StyledTag>Tarjetas de crédito y débito</Foot.StyledTag>
      </Foot.StyledContainer>
      </Foot.StyledContainerMain>
      <Foot.StyledLogo/>
    </Foot.StyledFooter>
  )
}

export default Footer