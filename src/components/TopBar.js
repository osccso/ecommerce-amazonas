import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { LogOutAction } from '../redux/actionsDescriptors'
import { Link } from 'react-router-dom'

const StyledNav = styled.div `
  flex-direction: row;
  justify-content: space-between;
  min-width: 100vw;
  background-color: rgba(19, 25, 33, 1);
  color: white;
  padding: 0.2rem 1rem;
  & * {
    color:white;
  }
`

const StyledLogo = styled.img `
  content : url('./images/logo-amazon.svg');
`

const StyledCtnLocation = styled.div `

`
const StyledIcon = styled.img `
  content: url('./images/location.svg');
  &:hover {
    transform: scale(1.08);
    transition: 0.2;
    cursor: pointer;
  }
  &:active {
    transform: scale(1.04);
  }
`
const StyledAddress = styled.p `
  font-weight: 700;
  font-size: 14px;
`
const StyledCtnSearch = styled.div `
  flex-direction: row;
  flex-grow: 0.5;
  justify-self: stretch;
`
const StyledInputSearch = styled.input `
  border: none;
  height: 2.5rem;
  padding: 0 1rem;
  flex-grow: 1;
  justify-self: stretch;
  border-radius: 8px 0 0 8px;
  color: black;
`

const StyledIconSearch = styled.img `
  content: url('./images/search.svg');
  background-color: rgba(240, 173, 100, 1);
  padding: 0.2rem;
  height: 2.5rem;
  border-radius: 0 8px 8px 0;
  &:hover {
    transform: scale(1.07);
    transition: 0.2s;
    background-color: rgba(240, 173, 100, 0.8);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.97);
  } 
`

const StyledIconShoppin = styled.img `
  content: url('./images/shoppingcart.svg');
  cursor: pointer;
  &:hover{
    transform: scale(0.9);
  }
  &:active{
    transform: scale(1.1);
  }
`
const StyledHello = styled.p `
  font-size: 12px;
  font-weight: 400;
`

const StyledSignOut = styled.p `
  font-size: 12px;
  &:hover{
    font-weight: 800;
    transform: scale(1.1);
    cursor: pointer;
  }
  &:active{
    transform: translate(1px,1px);
  }
`
const StyledLogin = styled(Link) `
  font-size: 12px;
  font-weight: 700;
  &:hover{
    color: #00bcd4;;
    cursor: pointer;
    font-size: 13px;
  }
  &:active{
    font-size: 11px;
  }
`
const TopBar = ({user}) => {
  const dispatch=useDispatch()
  return (
    <StyledNav>
      <StyledLogo/>
      <StyledCtnLocation>
        <StyledIcon/>
        <StyledAddress>Elige tu direccion</StyledAddress>
      </StyledCtnLocation>
      <StyledCtnSearch>
        <StyledInputSearch placeholder='Ingresa un producto para la busqueda'/>
        <StyledIconSearch/>
      </StyledCtnSearch>
      <div>
        <StyledHello>Hola, {(user?.displayName || user?.email || <StyledLogin to='login'>'logéate'</StyledLogin> )}</StyledHello>
        {user && <StyledSignOut onClick={() => dispatch(LogOutAction())}>Sign out</StyledSignOut>}
      </div>
      <Link to="shopping-cart"><StyledIconShoppin/></Link>
    </StyledNav>
  )
}

export default TopBar