import {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {UserContext} from '../../context/userContext'
import PopUpModal from '../PopUpModal'
import {
  Nav,
  FlexContainer,
  NavItems,
  Logo,
  NavItemsMobile,
  NavItemButton,
  NavItemsLargeDevice,
  ProfileImg,
  NavMenuContainer,
  NavMenuItems,
  List,
  ListItem,
} from './styledComponents'

const Header = () => {
  const location = useLocation()
  const {isDarkTheme, toggleTheme} = UserContext()

  const [isMenuOpened, setMenuOpen] = useState(false)

  const logoUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  const openMenu = () => (
    <NavMenuContainer theme={isDarkTheme}>
      <NavMenuItems>
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
      </NavMenuItems>
    </NavMenuContainer>
  )

  return (
    <>
      <Nav theme={isDarkTheme}>
        <FlexContainer>
          <Link to="/">
            <Logo src={logoUrl} alt="nxt watch logo" />
          </Link>
          <NavItems>
            <NavItemsMobile>
              <NavItemButton type="button" onClick={() => toggleTheme()}>
                {isDarkTheme ? (
                  <BiSun size="22" color="#f9f9f9" />
                ) : (
                  <FaMoon color="#181818" size="22" />
                )}
              </NavItemButton>
              <NavItemButton
                type="button"
                onClick={() => setMenuOpen(prevState => !prevState)}
              >
                {isDarkTheme ? (
                  <GiHamburgerMenu size="22" color="#f9f9f9" />
                ) : (
                  <GiHamburgerMenu color="#181818" size="22" />
                )}
              </NavItemButton>
            </NavItemsMobile>
            <NavItemsLargeDevice>
              <NavItemButton type="button" onClick={() => toggleTheme()}>
                {isDarkTheme ? (
                  <BiSun size="25" color="#f9f9f9" />
                ) : (
                  <FaMoon color="#181818" size="25" />
                )}
              </NavItemButton>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </NavItemsLargeDevice>
            <PopUpModal />
          </NavItems>
        </FlexContainer>
      </Nav>
      {isMenuOpened && openMenu()}
    </>
  )
}

export default Header
