import {createContext, useContext, useState} from 'react'

const Context = createContext()

function ContextProvider({children}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [savedVideos, setSavedVideos] = useState([])
  const [showBanner, setCloseBanner] = useState(true)

  const toggleTheme = () => setIsDarkTheme(prevState => !prevState)

  const closeBanner = () => setCloseBanner(false)

  const addToSavedVideos = videoDetails => {
    const isVideoExist = savedVideos.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )

    if (isVideoExist) {
      const updatedVideos = savedVideos.filter(
        eachVideo => eachVideo.id !== videoDetails.id,
      )
      setSavedVideos(updatedVideos)
    } else {
      setSavedVideos(prevState => [...prevState, videoDetails])
    }
  }

  const value = {
    isDarkTheme,
    toggleTheme,
    showBanner,
    closeBanner,
    savedVideos,
    addToSavedVideos,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

const UserContext = () => useContext(Context)

export {ContextProvider, UserContext}
