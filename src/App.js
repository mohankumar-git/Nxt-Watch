import {Switch, Route, Redirect} from 'react-router-dom'
import {ContextProvider} from './context/userContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import VideoItem from './components/VideoItem'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <ContextProvider>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/videos/:id" component={VideoItem} />
      <ProtectedRoute exact path="/trending" component={Trending} />
      <ProtectedRoute exact path="/gaming" component={Gaming} />
      <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </ContextProvider>
)

export default App
