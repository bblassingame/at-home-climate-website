import React from 'react'
import Logo from './logo'
import Features from './features'
import Navigation from './navigation'
import Contact from './contact'

// TODO:  Put in the style sheet that puts the browser back to zero
// need to add support for styles and get those into here somehow
const App = function() {
	return (
		<div className="main-content">
			<Logo />
			<Features />
			<Navigation />
			<Contact />
		</div>
	)
}

export default App;