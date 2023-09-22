import {Link, useLocation} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {
  SidebarContainer,
  SideBarTabsContainer,
  List,
  ListItem,
  SideBarFooter,
  ContactUs,
  FooterLogos,
  Logo,
  FooterMsg,
} from './styledComponents'
import {UserContext} from '../../context/userContext'

const Sidebar = () => {
  const {isDarkTheme} = UserContext()
  const location = useLocation()

  return (
    <SidebarContainer theme={isDarkTheme}>
      <SideBarTabsContainer>
        <List activeTab={location.pathname === '/'}>
          <Link to="/" className="side-bar-link">
            <AiFillHome
              color={location.pathname === '/' ? '#ff0b37' : '#616e7c'}
              size="20"
            />
            <ListItem activeTab={location.pathname === '/'}>Home</ListItem>
          </Link>
        </List>
        <List activeTab={location.pathname === '/trending'}>
          <Link to="/trending" className="side-bar-link">
            <HiFire
              color={location.pathname === '/trending' ? '#ff0b37' : '#616e7c'}
              size="20"
            />
            <ListItem activeTab={location.pathname === '/trending'}>
              Trending
            </ListItem>
          </Link>
        </List>
        <List activeTab={location.pathname === '/gaming'}>
          <Link to="/gaming" className="side-bar-link">
            <SiYoutubegaming
              color={location.pathname === '/gaming' ? '#ff0b37' : '#616e7c'}
              size="20"
            />
            <ListItem activeTab={location.pathname === '/gaming'}>
              Gaming
            </ListItem>
          </Link>
        </List>
        <List activeTab={location.pathname === '/saved-videos'}>
          <Link to="/saved-videos" className="side-bar-link">
            <CgPlayListAdd
              color={
                location.pathname === '/saved-videos' ? '#ff0b37' : '#616e7c'
              }
              size="20"
            />
            <ListItem activeTab={location.pathname === '/saved-videos'}>
              Saved Videos
            </ListItem>
          </Link>
        </List>
      </SideBarTabsContainer>
      <SideBarFooter>
        <ContactUs>CONTACT US</ContactUs>
        <FooterLogos>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </FooterLogos>
        <FooterMsg>
          Enjoy! Now to see your channels and recommendations!
        </FooterMsg>
      </SideBarFooter>
    </SidebarContainer>
  )
}

export default Sidebar
