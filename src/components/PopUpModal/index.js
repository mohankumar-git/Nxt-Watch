import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {UserContext} from '../../context/userContext'

import {
  LogoutButtonContainer,
  MobileViewBtn,
  LargeScreenViewBtn,
  ModalContainer,
  PopUpMsg,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const PopUpMobile = () => {
  const {isDarkTheme} = UserContext()
  const history = useHistory()

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <Popup
      modal
      trigger={
        <LogoutButtonContainer>
          <MobileViewBtn type="button">
            {isDarkTheme ? (
              <FiLogOut size="22" color="#f9f9f9" />
            ) : (
              <FiLogOut color="#181818" size="22" />
            )}
          </MobileViewBtn>
          <LargeScreenViewBtn type="button">Logout</LargeScreenViewBtn>
        </LogoutButtonContainer>
      }
    >
      {close => (
        <>
          <ModalContainer theme={isDarkTheme}>
            <PopUpMsg theme={isDarkTheme}>
              Are you sure, you want to logout?
            </PopUpMsg>
            <ButtonsContainer>
              <CancelButton
                theme={isDarkTheme}
                type="button"
                outline
                onClick={() => close()}
              >
                Cancel
              </CancelButton>
              <ConfirmButton type="button" onClick={handleLogout}>
                Confirm
              </ConfirmButton>
            </ButtonsContainer>
          </ModalContainer>
        </>
      )}
    </Popup>
  )
}

export default PopUpMobile
