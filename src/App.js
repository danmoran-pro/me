import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
// import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          {/* <Projects></Projects> */}
					{/* <Details></Details> */}
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
