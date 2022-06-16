import styled from 'styled-components'

export const StyledCntMain = styled.div `
  flex-grow: 1;
  justify-self: stretch;
  margin: 3rem 0;
`

export const StyledLogo = styled.img `
  content: url('./images/logo-amazon.svg');
  margin-bottom: 1rem;
`
export const StyledForm = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 2rem;
  width: 40vw;
`
export const StyledFormTitle = styled.p `
  font-size: 28px;
`
export const StyledTag = styled.p `
  align-self: start;
`
export const StyledLoginButton = styled.button `
  display: block;
  background-color: rgba(240, 173, 100, 1);
  border: none;
  align-self: stretch;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0.5rem;
  &:hover  {
    background-color: rgba(240, 173, 100, 0.9);
    transform: scale(1.05);
    font-weight: 700;
    cursor: pointer;
  }
  &:disabled {
    background-color: rgba(240, 173, 100, 0.3);
    pointer-events: none;
  }
`
export const StyledInput = styled.input `
  align-self: stretch;
  margin-bottom: 0.5rem;
  padding: 0.2rem 1rem;
`

export const StyledHiddenTag = styled.p `
  color: gray;
`
export const StyledNewCustomer = styled.button `
  background: linear-gradient(180deg, rgba(240,240,240,1),rgba(200,200,200,1));
  border: none;
  align-self: stretch;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0.5rem;
  &:hover  {
    transform: scale(1.05);
    font-weight: 700;
    cursor: pointer;
  }
`

export const StyledError = styled.p `
  background-color: rgba(175, 41, 19, 1);
  padding: 0.3rem;
  border-radius: 8px;
  color:white;
  font-weight: 700;
`

export const StyledGoogleButton = styled.button `
  display: block;
  background-color: rgba(175, 41, 19, 1);
  color: white;
  border: none;
  align-self: stretch;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0.5rem;
  &:hover  {
    background-color: rgba(240, 173, 100, 0.9);
    transform: scale(1.05);
    font-weight: 700;
    cursor: pointer;
  }
`
export const StyledFacebookButton = styled.button `
  display: block;
  background-color: blue;
  color: white;
  border: none;
  align-self: stretch;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0.5rem;
  &:hover  {
    background-color: rgba(240, 173, 100, 0.9);
    transform: scale(1.05);
    font-weight: 700;
    cursor: pointer;
  }
`