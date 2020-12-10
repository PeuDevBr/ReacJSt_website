
import NavBar from './navBar'
import MenuBar from './menuBar'
import Search from './searchBar'
import ShowContent from './content'

function Home() {
  return (
    <div>
          
        <Search/>
        <NavBar/>
        <MenuBar/>
        <ShowContent/>
    </div>
  )
}

export default Home

{/*
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

        
        <div className="menuContainer">

            <a href="#">
            Lavadora
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

        </div> */}

        {/* <div className="searchContainer">

            <div className="logoContainer">
                <a href="/about">Servibras</a>
            </div>      

            <div className="searchForContainer">
                <input id="searchInput" type="text" placeholder="Busque o seu produto"/>
                <button id="searchButton" onClick={searchProduct}>Pesquisar</button>
            </div>

        </div> */}