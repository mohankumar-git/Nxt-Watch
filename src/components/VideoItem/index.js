import {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'
import {useLocation} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {UserContext} from '../../context/userContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  MainContainer,
  SidebarContainer,
  VideoItemContainer,
  VideoItemFlexContainer,
  LoaderContainer,
  VideoPlayer,
  VideoDetailsContainer,
  VideoTitle,
  ViewsAndPublish,
  Dot,
  VideoViews,
  UserReactContainer,
  LikeDislikeContainer,
  ReactionBtn,
  ReactionLike,
  ReactionDislike,
  Save,
  VideoPublish,
  ChannelContainer,
  ProfileImg,
  ChannelDetails,
  ChannelName,
  Subscribers,
  VideoDescription,
  RetryBtn,
  FailureContainer,
  FailureContentContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
} from './styledComponents'

const constantApiResponse = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const VideoItem = () => {
  const {isDarkTheme, savedVideos, addToSavedVideos} = UserContext()

  const location = useLocation()
  const {pathname} = location

  const [apiResponse, setApiResponse] = useState({
    status: constantApiResponse.initial,
    data: null,
    errorMsg: null,
    isVideoSaved: null,
  })

  const [isLiked, setVideoLiked] = useState(null)

  const handleLike = () => setVideoLiked(true)
  const handleDislike = () => setVideoLiked(false)

  const handleSaveVideos = () => {
    addToSavedVideos(apiResponse.data)
    setApiResponse(prevState => ({
      ...prevState,
      isVideoSaved: !prevState.isVideoSaved,
    }))
  }

  const getApiResponse = async () => {
    setApiResponse(prevState => ({
      ...prevState,
      status: constantApiResponse.inProgress,
    }))
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in${pathname}`
    const option = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, option)
    const data = await response.json()

    if (response.ok) {
      const key = Object.keys(data)
      const dataArray = key.map(eachKey => data[eachKey])
      const convertedData = dataArray.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
          subscriberCount: each.channel.subscriber_count,
        },
        id: each.id,
        description: each.description,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        videoUrl: each.video_url,
        viewCount: each.view_count,
      }))

      const checkVideoSaved = () => {
        const videoExist = savedVideos.findIndex(
          eachVideo => eachVideo.id === data.video_details.id,
        )

        if (videoExist !== -1) {
          return true
        }
        return false
      }

      const savedVideoStatus = checkVideoSaved()

      setApiResponse(prevState => ({
        ...prevState,
        status: constantApiResponse.success,
        data: convertedData[0],
        isVideoSaved: savedVideoStatus,
      }))
    } else {
      setApiResponse(prevState => ({
        ...prevState,
        status: constantApiResponse.failure,
        errorMsg: data.error_msg,
      }))
    }
  }

  useEffect(() => getApiResponse(), [])

  const handleRetry = () => {
    getApiResponse()
  }

  const getPublishedDate = publishedAt => {
    const startDate = new Date(publishedAt)
    const currentDate = new Date()

    const timeDifference = currentDate - startDate

    const yearsDifference = timeDifference / (1000 * 60 * 60 * 24 * 365.25)

    const publishedDate = Math.floor(yearsDifference)
    return publishedDate
  }

  const successView = () => {
    const {data, isVideoSaved} = apiResponse
    const {channel, publishedAt, title, videoUrl, viewCount, description} = data
    const {name, profileImageUrl, subscriberCount} = channel
    const publishedDate = getPublishedDate(publishedAt)

    return (
      <VideoItemFlexContainer>
        <VideoPlayer>
          <ReactPlayer url={videoUrl} width="100%" height="100%" />
        </VideoPlayer>
        <VideoDetailsContainer>
          <VideoTitle theme={isDarkTheme}>{title}</VideoTitle>
          <UserReactContainer>
            <ViewsAndPublish>
              <VideoViews theme={isDarkTheme}>{viewCount}</VideoViews>
              <Dot theme={isDarkTheme}>•</Dot>
              <VideoPublish theme={isDarkTheme}>
                {publishedDate} years ago
              </VideoPublish>
            </ViewsAndPublish>
            <LikeDislikeContainer>
              <ReactionBtn
                theme={isDarkTheme}
                type="button"
                onClick={handleLike}
              >
                <AiOutlineLike
                  size="16"
                  color={isLiked === true ? '#00306e' : null}
                />
                <ReactionLike reaction={isLiked}>Like</ReactionLike>
              </ReactionBtn>
              <ReactionBtn
                theme={isDarkTheme}
                type="button"
                onClick={handleDislike}
              >
                <AiOutlineDislike
                  size="16"
                  color={isLiked === false ? '#00306e' : null}
                />
                <ReactionDislike reaction={isLiked}>Dislike</ReactionDislike>
              </ReactionBtn>
              <ReactionBtn theme={isDarkTheme} onClick={handleSaveVideos}>
                <CgPlayListAdd
                  size="16"
                  color={isVideoSaved === true ? '#00306e' : null}
                />
                <Save saved={isVideoSaved}>
                  {isVideoSaved ? 'Saved' : 'Save'}
                </Save>
              </ReactionBtn>
            </LikeDislikeContainer>
          </UserReactContainer>
          <hr className="horizontal-line" />
          <ChannelContainer>
            <ProfileImg src={profileImageUrl} alt="profile" />
            <ChannelDetails>
              <ChannelName theme={isDarkTheme}>{name}</ChannelName>
              <Subscribers theme={isDarkTheme}>
                {subscriberCount} subscribers
              </Subscribers>
            </ChannelDetails>
          </ChannelContainer>
          <VideoDescription theme={isDarkTheme}>{description}</VideoDescription>
        </VideoDetailsContainer>
      </VideoItemFlexContainer>
    )
  }

  const loadingView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#e15b64" height="60" width="60" />
    </LoaderContainer>
  )

  const failureView = () => {
    const failureImgUrl = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailureContainer>
        <FailureContentContainer>
          <FailureImg src={failureImgUrl} alt="failure view" />
          <FailureHeading theme={isDarkTheme}>
            Oops! Something Went Wrong
          </FailureHeading>
          <FailurePara theme={isDarkTheme}>
            We are having some trouble to complete your request. Please try
            again.
          </FailurePara>
          <RetryBtn type="button" onClick={handleRetry}>
            Retry
          </RetryBtn>
        </FailureContentContainer>
      </FailureContainer>
    )
  }

  const renderUserView = () => {
    switch (apiResponse.status) {
      case constantApiResponse.success:
        return successView()
      case constantApiResponse.inProgress:
        return loadingView()
      case constantApiResponse.failure:
        return failureView()
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <MainContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <VideoItemContainer theme={isDarkTheme}>
          {renderUserView()}
        </VideoItemContainer>
      </MainContainer>
    </>
  )
}

export default VideoItem
