import React, { useState } from 'react'

import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'

const Template = (): React.ReactElement => {
  // const useWindowSize =
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  return (
    <div className="template">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Template
