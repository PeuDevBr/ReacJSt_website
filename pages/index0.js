import { useState } from 'react';

var tipo = ['Climatizador']

var parts = [
  {
    name: "Placa Potência 220V",
    avatar: "https://th.bing.com/th/id/OIP.nW16fVygLmQddZvdgJ0rQwHaHa?w=199&h=199&c=7&o=5&pid=1.7",
    code: "W10446925",
    brand: "Brastemp/Consul",
    subject: "Máquina de Lavar",
    model: "BWC10AB, BWC10BB, BWC11AB, BWC10AB, BWC10BB, BWC11AB, BWC10BB, BWC11AB",
    cost: "160,00",
    subName: "potencia",
},
{
    name: "Placa Interface Bivolt",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNp_6rZ7G-qz1sKdQiLt4UZWO2MudPCKK6jQ&usqp=CAU",
    code: "W10605809",
    brand: "Brastemp/Consul",
    subject: "Máquina de Lavar",
    model: "BWC10AB, BWC10BB, BWC11AB",
    cost: "260,00",
    subName: "",
},
{
    name: "Válvula Dupla 220V",
    avatar: "https://th.bing.com/th/id/OIP.X42IINi8Stm5S84SWisCDgHaHa?pid=Api&rs=1",
    code: "W10201539",
    brand: "Brastemp/Consul",
    subject: "Máquina de Lavar",
    model: "Vários",
    cost: "35,00",
    subName: "Valvula Dupla 220V",
},
{
    name: "Atuador de Freio 220V",
    avatar: "https://cdn.awsli.com.br/300x300/725/725357/produto/56179801/4880067af3.jpg",
    code: "W10518617",
    brand: "Brastemp/Consul",
    subject: "Máquina de Lavar",
    model: "Vários",
    cost: "50,00",
    subName: "",
}
]

var x = "aaa"

console.log(x)

function SearchBar() {
  const [search, setSearch] = useState("");   

  function searchProduct() {
    let searchInput= document.getElementById("searchInput").value

    setSearch(searchInput);

    x = search
  }
  console.log(search)
  x = "b"

  
  
  return (
    <div className="searchContainer">

      <div className="logoContainer">
        <a href="/about">Servibras</a>
      </div>      

      <div className="searchForContainer">
        <input id="searchInput" type="text" placeholder="Busque o seu produto"/>
        <button id="searchButton" onClick={searchProduct}>Pesquisar</button>
      </div>

    </div>
  )
}
console.log(x)

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

    </div>
  )
}



let searchList = []
    
let searchParts = ""

searchParts = searchParts.toUpperCase()

    for (var slice in parts) {
        if (parts[slice].name.toUpperCase().includes(searchParts) 
        || parts[slice].model.toUpperCase().includes(searchParts) 
        || parts[slice].code.toUpperCase().includes(searchParts)
        || parts[slice].brand.toUpperCase().includes(searchParts)
        || parts[slice].subject.toUpperCase().includes(searchParts)
        || parts[slice].subName.toUpperCase().includes(searchParts)) {

        searchList.push(parts[slice])
        }     
    }
  

function ProductContainer(props) {
  
  const content = props.parts.map((parts) =>

    <div key={parts.code}>

      <article className="productConteiner">

        <header className="productHeader">

          <img className="productImage" src={parts.avatar} alt=""/>

          <div>
            <strong>{parts.name}</strong>
            <span> Código: {parts.code}</span>
            <span>Marca: {parts.brand}</span>
            <span>Modelo: {parts.model}</span>
          </div>

        </header>
                      
        <footer className="footerContainer">

          <p>
            Preço<strong>{parts.cost}</strong>
          </p>

          <button type="button">  
            <img src="" alt=""/>
            Comprar
          </button>

        </footer>

      </article>

    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}


function Home() {
  return (
    <div className="container">
      <SearchBar/>
      <NavBar/>
      <MenuBar/>
      <ProductContainer parts={searchList}/>
    </div>
  )
}


export default Home