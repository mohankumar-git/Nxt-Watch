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

export const VideoItemContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f ' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: auto;
  width: 100%;
`
export const VideoItemFlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0px;
  @media screen and (min-width: 768px) {
    width: 90%;
    margin: 32px 0px;
  }
`
export const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideoPlayer = styled.div`
  width: 100%;
  height: 240px;
  @media screen and (min-width: 576px) {
    height: 300px;
  }
  @media screen and (min-width: 768px) {
    height: 360px;
  }
  @media screen and (min-width: 992px) {
    height: 420px;
  }
  @media screen and (min-width: 1140px) {
    height: 500px;
  }
`

export const VideoDetailsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 12px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const VideoTitle = styled.p`
  color: ${props => (props.theme === true ? '#f4f4f4' : '#424242')};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  font-family: 'Roboto';
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const UserReactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const LikeDislikeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ReactionBtn = styled.button`
  background-color: transparent;
  color: ${props => (props.theme === true ? '#f4f4f4' : '#424242')};
  font-size: 13px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-right: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const ReactionLike = styled.p`
  color: ${props => (props.reaction === true ? '#00306e' : null)};
  font-family: 'Roboto';
  margin-left: 6px;
  font-weight: 500;
`

export const ReactionDislike = styled.p`
  color: ${props => (props.reaction === false ? '#00306e' : null)};
  font-family: 'Roboto';
  margin-left: 6px;
  font-weight: 500;
`

export const Save = styled.p`
  color: ${props => (props.saved === true ? '#00306e' : null)};
  font-family: 'Roboto';
  margin-left: 6px;
  font-weight: 500;
`

export const ViewsAndPublish = styled.div`
  display: flex;
  align-items: center;
`

export const Dot = styled.span`
  color: ${props => (props.theme === true ? '#cccccc' : '#424242')};
  font-size: 22px;
  font-family: 'Roboto';
  margin-right: 8px;
`

export const VideoViews = styled.span`
  color: ${props => (props.theme === true ? '#cccccc' : '#424242')};
  font-size: 12px;
  font-family: 'Roboto';
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const VideoPublish = styled.span`
  color: ${props => (props.theme === true ? '#cccccc' : '#424242')};
  font-size: 12px;
  font-family: 'Roboto';
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const ChannelContainer = styled.div`
  display: flex;
  padding: 12px 0px 0px 12px;
`

export const ProfileImg = styled.img`
  height: 45px;
  width: 45px;
  margin-right: 16px;
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  color: ${props => (props.theme === true ? '#f4f4f4' : '#424242')};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
  @media screen and (min-width: 786px) {
    font-size: 17px;
  }
`

export const Subscribers = styled.p`
  color: ${props => (props.theme === true ? '#cccccc' : '#424242')};
  font-size: 12px;
  font-family: 'Roboto';
  margin-right: 8px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 786px) {
    font-size: 16px;
  }
`
export const VideoDescription = styled.p`
  color: ${props => (props.theme === true ? '#cccccc' : '#424242')};
  font-size: 12px;
  font-family: 'Roboto';
  line-height: 1.5;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 786px) {
    font-size: 16px;
  }
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
