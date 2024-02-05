import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

import { Navbar } from './app/Navbar'

import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { MobileAddPostForm } from './features/posts/MobileAddPostForm'
import { UserDropdown } from './features/currentUser/UserDropdown'
import { ViewSelector } from './features/currentTimelineView/ViewSelector'

function App() {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <Router>
      <div className='wrapper'>
        <Navbar handleTweetButtonOpen={open} />
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <ViewSelector />
                  <section className='add-post-form-container'>
                    <AddPostForm />
                  </section>
                  <PostsList
                    handleTweetModalClose={close}
                    handleTweetButtonOpen={open} />

                  <Dialog
                    id='compose-modal'
                    isOpen={showDialog}
                    onDismiss={close}>
                    <div className='modal-top-nav'>
                      <div className='close-modal-icon-container' onClick={close}>
                        <svg className='close-modal-icon' viewBox="0 0 24 24">
                          <g>
                            <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z">
                            </path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <AddPostForm handleCloseClick={close} />
                  </Dialog>
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
