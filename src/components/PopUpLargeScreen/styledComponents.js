import styled from 'styled-components'

export const LogoutButtonContainer = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
`

export const MobileViewBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 16px;
    padding-top: 6px;
    display: none;
  }
`

export const LargeScreenViewBtn = styled.button`
  background-color: transparent;
  color: #3b82f6;
  font-family: 'Roboto';
  font-weight: 600;
  border: 1px solid #3b82f6;
  height: 30px;
  width: 80px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.theme ? '#181818' : '#ffffff')};
  width: 50%;
  @media screen and (min-width: 576px) {
    width: 30%;
  }
`
export const PopUpMsg = styled.p`
  color: ${props => (props.theme === true ? '#f8fafc' : '#212121')};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export const CancelButton = styled.button`
  background-color: transparent;
  color: #f8fafc;
  font-family: 'Roboto';
  font-weight: 500;
  border: 1px solid #ffffff;
  height: 30px;
  width: 80px;
`

export const ConfirmButton = styled.button`
  background-color: 3b82f6;
  color: #f8fafc;
  font-family: 'Roboto';
  font-weight: 600;
  height: 30px;
  width: 80px;
`
