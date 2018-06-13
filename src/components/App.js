import React, { Component } from 'react'
// import logo from './logo.svg';
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Welcome to React</h1>
  </header>
)

class App extends Component {
  render () {
    return (
      <div className='App' >
        <Header />
      </div>

    )
  }
}

export default App
