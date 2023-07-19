import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { MobileAddPostForm } from './features/posts/MobileAddPostForm'
import { UserDropdown } from './features/currentUser/UserDropdown'

function App() {
  return (
    <Router>
      <div className='wrapper'>
        <Navbar />
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <UserDropdown />
                  <AddPostForm />
                  <PostsList />
                </React.Fragment>
              )}
            />
            <Route exact path="/compose/tweet" component={MobileAddPostForm} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
