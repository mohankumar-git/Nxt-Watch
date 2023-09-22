import {UserContext} from '../../context/userContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  MainContainer,
  SidebarContainer,
  NotFoundContainer,
  NotFoundContentContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => {
  const {isDarkTheme} = UserContext()

  const imgUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

  return (
    <>
      <Header />
      <MainContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <NotFoundContainer theme={isDarkTheme}>
          <NotFoundContentContainer>
            <NotFoundImg src={imgUrl} alt="not found" />
            <NotFoundHeading theme={isDarkTheme}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundPara theme={isDarkTheme}>
              We are sorry, the page you requested could not be found
            </NotFoundPara>
          </NotFoundContentContainer>
        </NotFoundContainer>
      </MainContainer>
    </>
  )
}

export default NotFound
