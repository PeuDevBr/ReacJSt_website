import { useState } from 'react';



function Home() {
  return (
    <div className="container">
      <SearchBar/>
      <NavBar/>
      <MenuBar/>
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
        <a href="/about">Servibras</a>
      </div>      

      <div className="searchForContainer">
        <input id="searchInput" type="text" placeholder="Busque o seu produto"/>
        <button id="searchButton" onClick={searchProduct}>Pesquisar</button>
      </div>

      <div>{search}</div>
    </div>
  )
}

function NavBar() {
  return (
    <div className="navContainer">

      <a href="#">
        Serviços
      </a>
      <a href="#">
        Peças
      </a>
      <a href="#">
        Contatos
      </a>

    </div>
  )
}

function MenuBar() {
  return (
    <div className="menuContainer">

      <a href="#">
        Lavadoras
      </a>
      <a href="#">
        Refrigerdor
      </a>
      <a href="#">
        Freezer
      </a>
      <a href="#">
        Split
      </a>
      <a href="#">
        Bebedouro
      </a>

    </div>
  )
}

export default Home