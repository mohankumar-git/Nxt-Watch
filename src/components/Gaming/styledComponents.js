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

export const GamingContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f ' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: auto;
  width: 100%;
`
export const GamingFlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GamingHeaderContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`

export const IconContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#e2e8f0')};
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 16px;
  @media screen and (min-width: 768px) {
    height: 58px;
    width: 58px;
  }
`

export const GamingHeading = styled.h1`
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
  font-size: 24px;
  font-weight: 600;
  font-family: 'Roboto';
  margin: 0;
  @media screen and (min-width: 786px) {
    font-size: 30px;
  }
`

export const GamingVideosContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
`

export const RetryBtn = styled.button`
  background-color: #4a47e0;
  color: #f8fafc;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  height: 35px;
  width: 80px;
`

export const FailureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`

export const FailureContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media screen and (min-width: 576px) {
    width: 60%;
  }
  @media screen and (min-width: 786px) {
    width: 50%;
  }
`

export const FailureImg = styled.img`
  width: 100%;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.theme === true ? '#f8fafc' : '#212121')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (min-width: 786px) {
    font-size: 28px;
  }
`

export const FailurePara = styled.p`
  color: #7e858e;
  font-size: 14px;
  font-family: 'Roboto';
  text-align: center;
  margin-top: 0;
  @media screen and (min-width: 786px) {
    font-size: 18px;
  }
`
