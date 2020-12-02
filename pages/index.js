import { useState } from 'react';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Logo/>
    </div>
  )
}

function Logo() {
  const [search, setSearch] = useState("");  

  function searchProduct() {
    let searchInput= document.getElementById("searchFor").value
    setSearch(searchInput);
  }
  return (
    <div>
      <input id="searchFor" type="text" placeholder="Pesquise aqui o seu produto..."/>
      <button onClick={searchProduct}>Pesquisar</button>
      <br/><br/><br/>
      <div>Resultado: {search}</div>
    </div>
  )
}

export default Home