import styled from 'styled-components'

export const VideoItem = styled.li`
  list-style-type: none;
  width: 100%;
  flex-grow: 1;
  margin-bottom: 16px;
  @media screen and (min-width: 576px) {
    width: 42%;
    margin: 22px 12px 22px 12px;
  }
  @media screen and (min-width: 786px) {
    width: 225px;
    margin: 22px 12px 22px 12px;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 576px) {
    border-radius: 8px;
  }
`

export const ChannelContainer = styled.div`
  display: flex;
  padding: 12px 0px 16px 12px;
`
export const ProfileImg = styled.img`
  height: 45px;
  width: 45px;
  margin-right: 16px;
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
    font-size: 12px;
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
    font-size: 12px;
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
`

export const VideoPublish = styled.span`
  color: ${props => (props.theme === true ? '#cccccc' : '#424242')};
  font-size: 12px;
  font-family: 'Roboto';
  margin-right: 8px;
`
