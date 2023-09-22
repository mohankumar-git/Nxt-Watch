import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import {UserContext} from '../../context/userContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import HomeVideos from '../HomeVideos'
import {
  MainContainer,
  SidebarContainer,
  HomeContainer,
  HomeFlexContainer,
  BannerBgContainer,
  BannerFlexContainer,
  BannerContent,
  BannerLogo,
  BannerText,
  BannerBtn,
  BannerCloseBtn,
  SearchBgContainer,
  SearchContainer,
  SearchField,
  SearchBtn,
  LoaderContainer,
  HomeVideosContainer,
  NoSearchContainer,
  NoSearchContentContainer,
  NoSearchImg,
  NoSearchHeading,
  NoSearchPara,
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

const Home = () => {
  const {isDarkTheme, showBanner, closeBanner} = UserContext()

  const [apiResponse, setApiResponse] = useState({
    status: constantApiResponse.initial,
    data: null,
    errorMsg: null,
  })
  const [searchInput, setSearchInput] = useState('')

  const handleSearchInput = event => setSearchInput(event.target.value)

  const getApiResponse = async () => {
    setApiResponse(prevState => ({
      ...prevState,
      status: constantApiResponse.inProgress,
    }))

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  const handleSearch = () => {
    setSearchInput('')
    getApiResponse()
  }

  const handleRetry = () => {
    getApiResponse()
  }

  const successView = () => {
    const {data} = apiResponse
    if (data.length === 0) {
      return (
        <NoSearchContainer>
          <NoSearchContentContainer>
            <NoSearchImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchHeading theme={isDarkTheme}>
              No Search results found
            </NoSearchHeading>
            <NoSearchPara theme={isDarkTheme}>
              Try different key words or remove search filter
            </NoSearchPara>
            <RetryBtn type="button" onClick={handleRetry}>
              Retry
            </RetryBtn>
          </NoSearchContentContainer>
        </NoSearchContainer>
      )
    }
    return (
      <HomeFlexContainer>
        <HomeVideosContainer>
          {data.map(video => (
            <HomeVideos key={video.id} videoDetails={video} />
          ))}
        </HomeVideosContainer>
      </HomeFlexContainer>
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

  const displayBanner = () => (
    <BannerBgContainer>
      <BannerFlexContainer>
        <BannerContent>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="banner logo"
          />
          <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
          <BannerBtn>GET IT NOW</BannerBtn>
        </BannerContent>
        <BannerCloseBtn type="button" onClick={() => closeBanner()}>
          <AiOutlineClose color="#24334d" />
        </BannerCloseBtn>
      </BannerFlexContainer>
    </BannerBgContainer>
  )

  return (
    <>
      <Header />
      <MainContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <HomeContainer theme={isDarkTheme}>
          {showBanner && displayBanner()}
          <SearchBgContainer>
            <SearchContainer theme={isDarkTheme}>
              <SearchField
                theme={isDarkTheme}
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <SearchBtn
                theme={isDarkTheme}
                type="button"
                onClick={handleSearch}
              >
                <AiOutlineSearch
                  size="20"
                  color={isDarkTheme ? '#cececf' : '#3f3f3f'}
                />
              </SearchBtn>
            </SearchContainer>
          </SearchBgContainer>
          {renderUserView()}
        </HomeContainer>
      </MainContainer>
    </>
  )
}

export default Home
