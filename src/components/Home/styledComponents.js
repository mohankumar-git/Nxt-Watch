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

export const HomeContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f ' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: auto;
  width: 100%;
`
export const HomeFlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const BannerBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 24px 0px;
  @media screen and (min-width: 992px) {
    padding: 40px 0px;
  }
`

export const BannerFlexContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 55%;
`
export const BannerLogo = styled.img`
  width: 130px;
  @media screen and (min-width: 992x) {
    width: 160px;
  }
`

export const BannerText = styled.p`
  color: #1e293b;
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 1.5;
  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
`

export const BannerBtn = styled.button`
  color: #24334d;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 600;
  border: 1px solid #1e293b;
  height: 35px;
  width: 110px;
  background-color: transparent;
  @media screen and (min-width: 992px) {
    font-size: 16px;
    height: 38px;
  }
`

export const BannerCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchBgContainer = styled.div`
  padding: 20px;
`

export const SearchContainer = styled.div`
  width: 100%;
  border: 1px solid ${props => (props.theme === true ? '#3f3f3f' : '#cececf')};
  border-radius: 2px;
  display: flex;
  align-items: center;
  max-width: 380px;
  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
`

export const SearchField = styled.input`
  background-color: ${props =>
    props.theme === true ? 'transparent' : '#f9f9f9'};
  color: ${props => (props.theme === true ? '#f8fafc' : '#616e7c')};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  height: 36px;
  padding: 0px 10px;
  outline: none;
  border: 1px solid ${props => (props.theme === true ? '#3f3f3f' : '#cececf')};
  cursor: pointer;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 42px;
  }
`
export const SearchBtn = styled.button`
  background-color: ${props => (props.theme === true ? '#313131' : '#f4f4f4')};
  border: 1px solid ${props => (props.theme === true ? '#3f3f3f' : '#cececf')};
  outline: none;
  cursor: pointer;
  height: 36px;
  width: 25%;
  @media screen and (min-width: 768px) {
    height: 42px;
  }
`
export const HomeVideosContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const NoSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`

export const NoSearchContentContainer = styled.div`
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

export const NoSearchImg = styled.img`
  width: 100%;
`

export const NoSearchHeading = styled.h1`
  color: ${props => (props.theme === true ? '#f8fafc' : '#212121')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (min-width: 786px) {
    font-size: 28px;
  }
`

export const NoSearchPara = styled.p`
  color: #7e858e;
  font-size: 14px;
  font-family: 'Roboto';
  text-align: center;
  margin-top: 0;
  @media screen and (min-width: 786px) {
    font-size: 18px;
  }
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
