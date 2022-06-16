import React from 'react'
import styled from 'styled-components'

const StyledLoading = styled.div `
  display: flex;
  text-align: center;
  text-justify: center;
  flex-grow: 1;
  justify-self: stretch;
  align-items: center;
`
const StyledLogo = styled.img `
  content : url('./images/logo-amazon.svg');
`
const Loading = () => {
  return (
    <StyledLoading><b>L O A D I N G</b><StyledLogo/></StyledLoading>
  )
}

export default Loading