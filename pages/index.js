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
    let searchInput= document.getElementById("searchFor").value

    setSearch(searchInput);
  }
  return (
    <div className="searchContainer">

      <a className="logo" href="#">Servibras</a>

      <div className="searchFor">
        <input id="searchInput" type="text" placeholder="Busque o seu produto"/>
        <button id="searchButton" onClick={searchProduct}>Pesquisar</button>
      </div>

      {/*<div>Resultado: {search}</div>*/}
    </div>
  )
}

export default Home