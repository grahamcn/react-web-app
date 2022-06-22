import React from 'react'

import Footer from './app/template/footer/Footer'
import Header from './app/template/header/Header'
import Main from './app/template/main/Main'

import './App.scss'

function App(): React.ReactElement {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
