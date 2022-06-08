import React from 'react'
import AppOne from 'appOne/AppOneIndex' // this name appOne you can find in the webpack.config.js file so this is going to check the webpack to load the file that starts with the name appOne
import AppTwo from 'appTwo/AppTwoIndex'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      Container App
      <>
        <AppOne />
        <AppTwo />
      </>
    </div>
  )
}

export default App
