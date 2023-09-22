import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: ${props => (props.theme === true ? '#212121' : '#ffffff')};
  height: 60px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 2px 0px #1f2d3d26;
  margin-bottom: 2px;
  @media screen and (min-width: 768px) {
    height: 75px;
  }
`

export const FlexContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    max-width: 80%;
  }
`

export const Logo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
export const NavItems = styled.div`
  display: flex;
  align-items: center;
`

export const NavItemsMobile = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavItemsLargeDevice = styled.div`
  display: none;
  transition: all 2s;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const NavItemButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 16px;
    padding-top: 6px;
  }
`
export const ProfileImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 16px;
`

export const NavMenuContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.theme === true ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavMenuItems = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin: 0;
`
export const List = styled.li`
  background-color: ${props =>
    props.activeTab === true ? '#f1f5f9' : 'transparent'};
  list-style-type: none;
  width: 100%;
  padding: 0px 16px;
`
export const ListItem = styled.p`
  color: ${props => (props.activeTab === true ? '#1e293b' : '#616e7c')};
  font-family: 'Roboto';
  font-weight: ${props => (props.activeTab === true ? '600' : '500')};
  margin-left: 16px;
`
