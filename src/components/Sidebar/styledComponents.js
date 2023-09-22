import styled from 'styled-components'

export const SidebarContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#212121' : '#ffffff')};
  height: 100vh;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0px;
`

export const SideBarTabsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0;
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
export const SideBarFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;
`

export const ContactUs = styled.h1`
  color: ${props => (props.activeTab === true ? '#e2e8f0' : ' #64748b')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 600;
  line-height: 1.5;
`

export const FooterLogos = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
`
export const Logo = styled.img`
  width: 31px;
  height: 30px;
  margin-right: 16px;
`
export const FooterMsg = styled.p`
  color: ${props => (props.activeTab === true ? '#e2e8f0' : ' #64748b')};
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 1.5;
`
