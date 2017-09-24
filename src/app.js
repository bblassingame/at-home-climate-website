import React from 'react'
import { HashRouter } from 'react-router-dom'

import AppContent from './app-content'

// Using HashRouter instead of BrowserRouter because I'm assuming that we will use a static
// webserver at first and not a dynamic web server.  This makes the URLs ugly, but it works
// for now.  If I find out we have a dynamic web server, I'll go back to BrowserRouter.
// NOTE:  Using BrowserRouter will require me to route all URLs that the server doesn't recoginze
// to the base application URL.
const App = function() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  )
}

export default App