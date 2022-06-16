import styled from 'styled-components'

export const StyledFooter = styled.div `
  background-color: rgba(36, 47, 62, 1);
  padding: 1rem 1rem;
  align-items: flex-start;
  min-width: 100vw;
  & * {
    color:white;
  }
`
export const StyledContainerMain = styled.div `
  flex-direction: row;
  flex-grow: 1;
  align-self: stretch;
  align-items: flex-start;
  justify-content: space-evenly;
`

export const StyledContainer = styled.div `
  align-items: flex-start;
`

export const StyledTitle = styled.p `
  font-weight : 700;
  margin: 0 0 0.4rem 0;
  font-size: 12px;
` 

export const StyledTag = styled.p `
  font-size: 11px;
  margin: 0.2rem 0;
  &:hover {
    cursor: pointer;
    font-weight: 700;
  }
`

export const StyledLogo = styled.img `
  content:  url('./images/logo-amazon.svg');
  margin: 1rem;
  align-self: center;
  height: 1.5rem;
`