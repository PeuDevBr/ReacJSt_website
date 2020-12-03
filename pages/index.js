import { useState } from 'react';



function Home() {
  return (
    <div className="container">
      <SearchBar/>
    </div>
  )
}

function SearchBar() {
  const [search, setSearch] = useState("");   

  function searchProduct() {
    let searchInput= document.getElementById("searchInput").value

    setSearch(searchInput);
  }
  
  return (
    <div className="searchContainer">

      <div className="logoContainer">
        <a className="logo" href="#">Servibras</a>
      </div>      

      <div className="searchForContainer">
        <input id="searchInput" type="text" placeholder="Busque o seu produto"/>
        <button id="searchButton" onClick={searchProduct}>Pesquisar</button>
      </div>

      <div>{search}</div>
    </div>
  )
}

export default Home