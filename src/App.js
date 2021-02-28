import React, { Component } from 'react'
import Header from './components/Header'
import SideNav from './components/SideNav'
import MainContent from './components/MainContent'

class App extends Component {
  render() {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Header />
        <SideNav />
        <MainContent />
      </div>
    )
  }
}

export default App
