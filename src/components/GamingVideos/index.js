import {Link} from 'react-router-dom'
import {UserContext} from '../../context/userContext'
import {
  VideoItem,
  ThumbnailImg,
  VideoDetailsContainer,
  VideoTitle,
  VideoViews,
} from './styledComponents'

const GamingVideos = props => {
  const {isDarkTheme} = UserContext()
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails

  return (
    <>
      <VideoItem>
        <Link className="gaming-video-item-link" to={`/videos/${id}`}>
          <ThumbnailImg src={thumbnailUrl} alt="thumbnail" />
          <VideoDetailsContainer>
            <VideoTitle theme={isDarkTheme}>{title}</VideoTitle>
            <VideoViews theme={isDarkTheme}>
              {viewCount} Watching Worldwide
            </VideoViews>
          </VideoDetailsContainer>
        </Link>
      </VideoItem>
    </>
  )
}

export default GamingVideos
