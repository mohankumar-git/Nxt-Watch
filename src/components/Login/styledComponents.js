import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#212121' : '#ffffff')};
  height: 100vh;
  display: flex;
  justify-content: center;
`
export const FlexContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`

export const FormContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#ffffff')};
  width: 100%;
  box-shadow: 0px 5px 10px 0px #21212150;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    box-shadow: 0px 5px 14px 0px #21212150;
    border-radius: 6px;
    padding: 30px;
  }
`

export const LoginLogo = styled.img`
  width: 100px;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    width: 170px;
    margin-bottom: 18px;
  }
`

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  @media screen and (min-width: 768px) {
    width: 85%;
  }
`
export const FormField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  @media screen and (min-width: 768px) {
    margin-top: 28px;
  }
`
export const Label = styled.label`
  color: ${props => (props.theme === true ? '#f9f9f9' : '#8e98a1')};
  font-size: 12px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-bottom: 6px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`

export const TextInput = styled.input`
  background-color: transparent;
  color: ${props => (props.theme === true ? '#f8fafc' : '#616e7c')};
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  padding: 0px 10px;
  border: 1px solid #8e98a1;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 16px;
  }
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`

export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 8px;
`

export const ShowPassword = styled.label`
  color: ${props => (props.theme === true ? '#f8fafc' : '#232830')};
  font-size: 14px;
  font-family: 'Roboto';
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const LoginButton = styled.button`
  background-color: #2082f2;
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto';
  height: 35px;
  border: none;
  border-radius: 7px;
  margin-top: 16px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: 38px;
    margin-top: 26px;
  }
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 12px;
  font-family: 'Roboto';
`
