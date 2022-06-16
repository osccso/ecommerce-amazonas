import React,{useState,useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledProductCard = styled.div `
  background-color: white;
  width: 400px;
  padding: 1vw;
`
const StyledImage  = styled.img `
  align-self: center;
  width: 35%;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`

const StyledTitle = styled.p `
  align-self: flex-start;
  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
    color: rgba(0,0,0,0.3);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
    color: rgba(0,0,250,0.7);
  }
`

const StyledUser = styled.p `
  align-self: flex-start;
  color: blue;
`

const StyledPrice = styled.p `
  align-self: flex-start;
  color:rgba(240, 173, 100, 1);
`

const StyledImageBottom = styled.img `
  border: 1px solid blue;
`

const ProductCard = ({product}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [isClicked, setIsClicked] = useState(false)
  const {title,user,price,images,id} = product
  const handleClick = () => {
    setIsClicked(true)
  }
  if(isClicked) return <Navigate to={`/products/${id}`}/>
  return (
    <StyledProductCard>
      <StyledImage src={images[0]} onClick={handleClick}/>
      <StyledTitle onClick={handleClick}>{title}</StyledTitle>
      <StyledPrice>{`$${price}`}</StyledPrice>
      <StyledUser>{user}</StyledUser>
    </StyledProductCard>
    )}

export default ProductCard