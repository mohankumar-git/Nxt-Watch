import styled from 'styled-components'

export const VideoItem = styled.li`
  list-style-type: none;
  width: 40%;
  flex-grow: 1;
  margin: 16px;
  @media screen and (min-width: 576px) {
    width: 20%;
    margin: 20px;
  }
  @media screen and (min-width: 786px) {
    width: 140px;
    margin: 22px;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
  margin-bottom: 16px;
  @media screen and (min-width: 576px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 786px) {
    margin-right: 22px;
  }
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

export const VideoViews = styled.p`
  color: ${props => (props.theme === true ? '#cccccc' : '#424242')};
  font-size: 12px;
  font-family: 'Roboto';
  margin: 0;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`
