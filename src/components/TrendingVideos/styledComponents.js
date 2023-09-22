import styled from 'styled-components'

export const VideoItem = styled.li`
  list-style-type: none;
  flex-grow: 1;
  margin-bottom: 16px;
  @media screen and (min-width: 576px) {
    margin: 20px;
  }
  @media screen and (min-width: 786px) {
    margin: 22px;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 245px;
    height: 135px;
    margin-right: 16px;
  }
  @media screen and (min-width: 786px) {
    width: 285px;
    height: 156px;
    margin-right: 22px;
  }
  }
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ProfileImg = styled.img`
  height: 45px;
  width: 45px;
  margin-left: 10px;
  margin-right: 16px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const VideoTitle = styled.p`
  color: ${props => (props.theme === true ? '#f4f4f4' : '#424242')};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  font-family: 'Roboto';
  margin: 0;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const VideoDetail = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.span`
  color: ${props => (props.theme === true ? '#cccccc' : '#424242')};
  font-size: 14px;
  font-family: 'Roboto';
  margin-right: 8px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`
export const ViewsAndPublish = styled.div`
  display: flex;
  align-items: center;
`

export const Dot1 = styled.span`
  color: ${props => (props.theme === true ? '#cccccc' : '#424242')};
  font-size: 22px;
  font-family: 'Roboto';
  margin-right: 8px;
  @media screen and (min-width: 576px) {
    display: none;
  }
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
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`

export const VideoPublish = styled.span`
  color: ${props => (props.theme === true ? '#cccccc' : '#424242')};
  font-size: 12px;
  font-family: 'Roboto';
  margin-right: 8px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`
