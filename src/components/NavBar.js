import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const StyledNavBar = styled.div `
  flex-direction: row;
  background-color: rgba(36, 47, 62, 1);
  min-width: 100%;
  padding:0.5rem 0;
  justify-content: start;
`
const SLink = styled(Link) `
  cursor: pointer;
  margin: 0 2rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
  &:active {
    transform: scale(1.02);
    transition: 0.2s;
  }
`

const NavBar = ({user}) => {
  return (
    <StyledNavBar>
      <SLink to="/">Home</SLink>
      {!user && <SLink to="login">Login</SLink>}
      {user && <SLink to="profile">Profile</SLink>}
      {user && <SLink to="manage-products">Maneja tus productos</SLink>}
      {/* {user && <SLink to="upload">Upload</SLink>} */}
    </StyledNavBar>
  )
}

export default NavBar