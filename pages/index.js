import { useState, Component } from 'react';

//import NavBar from './navBar'
//import MenuBar from './menuBar'
//import Search from './searchBar'


  
  import Array from './array'

  class App extends Component {
    constructor () {
      super()
      this.state = {
        userinfo: null,
        repos: [],
        starred: [],
        isFetching: false
  
      }
    }

    render() {

        return (
            <div>
                <Array/>
            </div>
           
        )
    }

  }

  export default App