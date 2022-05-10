import React,{ useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'
import SinglePostPage from './pages/SinglePostPage';
import { getPosts } from './actions/postActions'
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/posts/:id" component={SinglePostPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
