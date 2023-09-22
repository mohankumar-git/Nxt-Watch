import {useState, useEffect} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {UserContext} from '../../context/userContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideos from '../TrendingVideos'
import {
  MainContainer,
  SidebarContainer,
  TrendingContainer,
  TrendingFlexContainer,
  LoaderContainer,
  TrendingHeaderContainer,
  IconContainer,
  TrendingHeading,
  TrendingVideosContainer,
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

const Trending = () => {
  const {isDarkTheme} = UserContext()

  const [apiResponse, setApiResponse] = useState({
    status: constantApiResponse.initial,
    data: null,
    errorMsg: null,
  })

  const getApiResponse = async () => {
    setApiResponse(prevState => ({
      ...prevState,
      status: constantApiResponse.inProgress,
    }))

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const option = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, option)
    const data = await response.json()

    if (response.ok) {
      const {videos} = data
      const convertedData = videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      console.log(convertedData)
      setApiResponse(prevState => ({
        ...prevState,
        status: constantApiResponse.success,
        data: convertedData,
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

  const successView = () => {
    const {data} = apiResponse
    return (
      <TrendingFlexContainer>
        <TrendingHeaderContainer theme={isDarkTheme}>
          <IconContainer theme={isDarkTheme}>
            <HiFire color="#ff0b37" size="25" />
          </IconContainer>
          <TrendingHeading theme={isDarkTheme}>Trending</TrendingHeading>
        </TrendingHeaderContainer>
        <TrendingVideosContainer>
          {data.map(video => (
            <TrendingVideos key={video.id} videoDetails={video} />
          ))}
        </TrendingVideosContainer>
      </TrendingFlexContainer>
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
        <TrendingContainer theme={isDarkTheme}>
          {renderUserView()}
        </TrendingContainer>
      </MainContainer>
    </>
  )
}

export default Trending
