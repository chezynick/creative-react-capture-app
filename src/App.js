import React from 'react'
//Global style
import GlobalStyle from './components/GlobalStyle'

//import pages
import AboutUs from './pages/AboutUs'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
    <AboutUs />
    <GlobalStyle />
    </div>
  )
}

export default App;
