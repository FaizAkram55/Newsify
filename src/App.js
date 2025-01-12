import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
   BrowserRouter as Router,
   Route, 
   Routes 
} from 'react-router-dom'

export class App extends Component {
  render() {
    return ( 
      <> 
         <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" category="general"/>} />
          <Route exact path="/business" element={<News key="business" category="business"/>} />
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment"/>} />
          <Route exact path="/general" element={<News key="general" category="general"/>} />
          <Route exact path="/health" element={<News key="health" category="health"/>} />
          <Route exact path="/science" element={<News key="science" category="science"/>} />
          <Route exact path="/sports" element={<News key="sports" category="sports"/>} />
          <Route exact path="/technology" element={<News key="technology" category="technology"/>} />
        </Routes>
      </Router> 
      </>
    )
  }
}
  
export default App
