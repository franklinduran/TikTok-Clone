import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import FeedVideos from '../assets/components/FeedVideos/index.jsx'
import {Route} from 'wouter'
import Upload from './pages'

function App() {
  return (
    <div className="App">
      <main>
        <Route path="/">
          <FeedVideos />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
      </main>
    </div>
  )
}

export default App
