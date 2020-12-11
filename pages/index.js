import { useState, Component } from 'react';

//import NavBar from './navBar'
//import MenuBar from './menuBar'
//import Search from './searchBar'
  
  import Array from './array'

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

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
                <Array array={array}/>
            </div>
           
        )
    }

  }

  export default App