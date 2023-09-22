import {HiFire} from 'react-icons/hi'
import {UserContext} from '../../context/userContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideos from '../TrendingVideos'
import {
  MainContainer,
  SidebarContainer,
  SavedVideosContainer,
  SavedVideosFlexContainer,
  SavedVideosHeaderContainer,
  IconContainer,
  SavedVideosHeading,
  SavedVideosListContainer,
  NoVideosContainer,
  NoVideosContentContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideosPara,
} from './styledComponents'

const SavedVideos = () => {
  const {isDarkTheme, savedVideos} = UserContext()

  const successView = () => (
    <SavedVideosFlexContainer>
      <SavedVideosHeaderContainer theme={isDarkTheme}>
        <IconContainer theme={isDarkTheme}>
          <HiFire color="#ff0b37" size="25" />
        </IconContainer>
        <SavedVideosHeading theme={isDarkTheme}>
          Saved Videos
        </SavedVideosHeading>
      </SavedVideosHeaderContainer>
      <SavedVideosListContainer>
        {savedVideos.map(video => (
          <TrendingVideos key={video.id} videoDetails={video} />
        ))}
      </SavedVideosListContainer>
    </SavedVideosFlexContainer>
  )

  const noVideosView = () => (
    <NoVideosContainer>
      <NoVideosContentContainer>
        <NoVideosImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
          alt="no saved videos"
        />
        <NoVideosHeading theme={isDarkTheme}>
          No saved videos found
        </NoVideosHeading>
        <NoVideosPara theme={isDarkTheme}>
          You can save your videos while watching them
        </NoVideosPara>
      </NoVideosContentContainer>
    </NoVideosContainer>
  )

  return (
    <>
      <Header />
      <MainContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <SavedVideosContainer theme={isDarkTheme}>
          {savedVideos.length !== 0 ? successView() : noVideosView()}
        </SavedVideosContainer>
      </MainContainer>
    </>
  )
}

export default SavedVideos
