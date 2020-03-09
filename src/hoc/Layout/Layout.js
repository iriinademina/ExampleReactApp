import React from 'react'
import './Layout.css'


const Layout = props => (
    <div className="Layout">
      <main>
          {props.children}
      </main>
    </div>
)

export default Layout