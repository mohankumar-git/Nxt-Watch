import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f ' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const NotFoundContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
`

export const NotFoundImg = styled.img`
  width: 100%;
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.theme === true ? '#f8fafc' : '#212121')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (min-width: 786px) {
    font-size: 28px;
  }
`

export const NotFoundPara = styled.p`
  color: #7e858e;
  font-size: 14px;
  font-family: 'Roboto';
  text-align: center;
  margin-top: 0;
  @media screen and (min-width: 786px) {
    font-size: 18px;
  }
`
