import React from 'react'

import './Header.scss'

function Header(): React.ReactElement {
  return (
    <header className="header">
      <h2>Header</h2>
      <button
        className="link"
        type="button"
        onClick={(): void => console.log('toggle menu')}
        title="Toggle menu"
      >
        Toggle Menu
      </button>
    </header>
  )
}

export default Header
