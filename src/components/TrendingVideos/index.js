import {Link} from 'react-router-dom'
import {UserContext} from '../../context/userContext'
import {
  VideoItem,
  ThumbnailImg,
  ChannelContainer,
  ProfileImg,
  VideoDetailsContainer,
  VideoTitle,
  VideoDetail,
  ChannelName,
  ViewsAndPublish,
  Dot,
  Dot1,
  VideoViews,
  VideoPublish,
} from './styledComponents'

const TrendingVideos = props => {
  const {isDarkTheme} = UserContext()
  const {videoDetails} = props
  const {
    channel,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails
  const {name, profileImageUrl} = channel

  const startDate = new Date(publishedAt)
  const currentDate = new Date()

  const timeDifference = currentDate - startDate

  const yearsDifference = timeDifference / (1000 * 60 * 60 * 24 * 365.25)

  const publishedDate = Math.floor(yearsDifference)

  return (
    <>
      <VideoItem>
        <Link className="trending-video-item-link" to={`/videos/${id}`}>
          <ThumbnailImg src={thumbnailUrl} alt="thumbnail" />
          <ChannelContainer>
            <ProfileImg src={profileImageUrl} alt="profile" />
            <VideoDetailsContainer>
              <VideoTitle theme={isDarkTheme}>{title}</VideoTitle>
              <VideoDetail>
                <ChannelName theme={isDarkTheme}>{name}</ChannelName>
                <ViewsAndPublish>
                  <Dot1 theme={isDarkTheme}>•</Dot1>
                  <VideoViews theme={isDarkTheme}>{viewCount}</VideoViews>
                  <Dot theme={isDarkTheme}>•</Dot>
                  <VideoPublish theme={isDarkTheme}>
                    {publishedDate} years ago
                  </VideoPublish>
                </ViewsAndPublish>
              </VideoDetail>
            </VideoDetailsContainer>
          </ChannelContainer>
        </Link>
      </VideoItem>
    </>
  )
}

export default TrendingVideos
