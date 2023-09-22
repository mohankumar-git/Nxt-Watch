import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect, useHistory} from 'react-router-dom'
import {UserContext} from '../../context/userContext'
import {
  MainContainer,
  FlexContainer,
  FormContainer,
  LoginLogo,
  Form,
  FormField,
  Label,
  TextInput,
  ShowPasswordContainer,
  CheckBox,
  ShowPassword,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

const Login = () => {
  const {isDarkTheme} = UserContext()
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, toggleShowPassword] = useState(false)
  const [errorMessage, setErrorMsg] = useState('')

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  const handleUsername = event => setUsername(event.target.value)

  const handlePassword = event => setPassword(event.target.value)

  const handleCheckBox = () => toggleShowPassword(prevState => !prevState)

  const handleForm = async event => {
    event.preventDefault()

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    console.log(userDetails)
    const response = await fetch(url, option)
    const data = await response.json()

    if (response.ok) {
      onSubmitSuccess(data.jwt_token)
      console.log(data)
    } else {
      setErrorMsg(data.error_msg)
    }
  }

  const logoUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <MainContainer theme={isDarkTheme}>
      <FlexContainer>
        <FormContainer theme={isDarkTheme}>
          <LoginLogo src={logoUrl} alt="logo" />
          <Form onSubmit={handleForm}>
            <FormField>
              <Label theme={isDarkTheme} htmlFor="username">
                USERNAME
              </Label>
              <TextInput
                theme={isDarkTheme}
                type="text"
                id="username"
                placeholder="Username"
                onChange={handleUsername}
              />
            </FormField>
            <FormField>
              <Label theme={isDarkTheme} htmlFor="password">
                PASSWORD
              </Label>
              <TextInput
                theme={isDarkTheme}
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                onChange={handlePassword}
              />
            </FormField>
            <ShowPasswordContainer>
              <CheckBox
                type="checkbox"
                id="showPassword"
                onChange={handleCheckBox}
              />
              <ShowPassword theme={isDarkTheme} htmlFor="showPassword">
                Show Password
              </ShowPassword>
            </ShowPasswordContainer>
            <LoginButton type="submit">Login</LoginButton>
          </Form>
          {errorMessage !== '' && <ErrorMsg>*{errorMessage}</ErrorMsg>}
        </FormContainer>
      </FlexContainer>
    </MainContainer>
  )
}

export default Login
