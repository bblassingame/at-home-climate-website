
/*
Solution provided by @juliaqiuxy in react-router issue 4278
https://github.com/ReactTraining/react-router/issues/4278
*/
import React from 'react'
import GoogleAnalytics from 'react-ga'

GoogleAnalytics.initialize('UA-106318026-1')

// we're going to wrap the component passed in with this higher order class/object
// that will have the google page view tracking set up.  We can add this to any page
// that we want to implement google analytics on for the page views.
const gaTracker = (WrappedComponent) => {
  const trackPage = (page) => {
    console.log('page tracking sent')
    GoogleAnalytics.set({ page })
    GoogleAnalytics.pageview(page)
  }

  // grabbing the path name that we'll pass to the pageview tracking
  const HOC = (props) => {
    const page = props.location.pathname
    trackPage(page)

    return (
      <WrappedComponent {...props} />
    )
  }

  return HOC
}

export default gaTracker