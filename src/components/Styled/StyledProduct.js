import styled from 'styled-components'
import { SideBySideMagnifier } from 'react-image-magnifiers'
// import ReactImageMagnify from 'react-image-magnify'

//CONTAINERS
export const StyledProduct = styled.div `
  justify-content: start;
  align-self: stretch;
  flex-grow: 1;
`
export const StyledBanner = styled.div `
  flex-direction: row;
  flex-wrap: wrap;
`

export const StyledImageBanner = styled.img `
  
`

export const StyledContainerImgs = styled.div `
  width: 7vw;
  align-self: flex-start;
`

export const StyledImgDescription = styled(SideBySideMagnifier) `
  align-self: flex-start;
  width: 30vw;
  padding: 1vh 5vw;
`
export const StyledOpinions = styled.div `
  width: 50vw;
  align-self: flex-start;
  padding: 3rem 0rem 2rem 3rem; 
`
export const ImageOpinion = styled.img `
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
export const OpinionText = styled.p `
  margin: 2rem 0;
`
export const StyledCardInfo = styled.div `
  align-self: stretch;
  justify-content: space-between;
  flex-direction: row;
  padding: 1vh 1vw;
  flex-wrap: wrap;
`
export const StyledTitle = styled.p `
  width: 30vw;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
`
export const StyledDetails = styled.label `
  width: 30vw;
  font-size: 12px;
  color: rgba(14, 113, 132, 1);
`

export const StyledLink = styled.p `
  color: rgba(14, 113, 132, 1);
`

export const StyledShipping = styled.p `
  font-weight: 700;
`

export const StyledImageDetails = styled.p `
  position: absolute;
`

export const StyledSecureTransaction = styled.div `
  color: blue;
  font-size: 16px;
`

export const StyledDescription = styled.div `

`
export const StyledProductInfo = styled.div `
  align-self: start;
  align-items: stretch;
`
export const StyledShoppingCard= styled.div `
  border: 1px solid black;
  padding: 2rem;
  border-radius: 8px;
  align-self: flex-start;
`
export const ShoppingPrice = styled.p `
  font-size: 20px;
  color: rgba(175, 41, 19, 1);
`
export const ShoppingShipping = styled.p `
  font-size: 15px;
  font-weight: 700;
`
export const ShoppingMessage = styled.p `
  font-size: 14px;
  color: rgba(175, 41, 19, 1);
  font-weight: 700;
`
export const StyledAddToCart = styled.button `
  background-color: rgba(243, 209, 132, 1);
  margin: 1rem 0 0 0;
  padding: 0.5rem 2rem;
  border-radius: 8px;
  &:hover  {
    background-color: rgba(243, 209, 132, 0.8);
    transform: scale(0.98);
    cursor: pointer;
  }
  &:active {
    transform: scale(1.02);
  }
  &:disabled{
    pointer-events: none;
    background-color: rgba(243, 209, 132, 0.3);
  }
`

export const StyledTagLabel = styled.label `
  margin: 0.2rem 0;
`

export const StyledText = styled.p `
  align-self: flex-start;
  margin: 2rem 0 0 0;
  padding: 0 2rem;
  font-size: 24px;
  font-weight: 700;
`

export const StyledTag = styled.label `
  font-size  : 12px;
  font-weight: 700;
`

export const StyledPrice = styled.label `
  color: rgba(175, 41, 19, 1);
  font-size: 19px;
  margin: 0 1rem 0.5rem 1rem;  
`

export const StyledImage = styled.img `
  max-width:  100%;
  border: 1px solid black;
  box-shadow: ${props => (props.selection && '0px 0px 15px rgba(255, 100, 100, 0.5)' || '0px 0px 10px rgba(0, 0, 0, 0.5)')};
  margin: 0.5rem;
  transform: ${props => props.selection && 'scale(0.95)'};
  &:hover {
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`