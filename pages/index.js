import Menu from './menu'
import NavBar from './navBar'
import ShowContent from './showContent'
import Search from './search'

import { useState } from 'react';


function Home() {

  const [searchPiece, setState] = useState("");


  function handleSubmit (e)  {
    e.preventDefault()
    const value = e.target.search.value

    setState(value)
  } 

  function handleFreezer () {
    setState('Freezer')
  }

  function handleWash () {
    setState('Lavadora')
  }

  function handleRefrigerator () {
    setState('Refrigerador')
  }

  function handleSplit () {
    setState('Split')
  }

  function handleAll () {
    setState('')
  }
  
  

  return (
    <div className="container">
      <Search handleSubmit={(e) => handleSubmit(e)}/>
      <NavBar handleAll={handleAll}/> 
      <Menu 
        handleFreezer={handleFreezer}
        handleWash={handleWash}
        handleRefrigerator={handleRefrigerator}
        handleSplit={handleSplit}
      />
      <ShowContent search={searchPiece}/>
    </div>
  )
}

export default Home