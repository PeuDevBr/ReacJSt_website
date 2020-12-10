import React, { useState } from 'react';

import NavBar from './navBar'
import MenuBar from './menuBar'
import Search from './searchBar'
import Show from './show'

const parts = [
  {
      name: "Placa Potência 220V",
      avatar: "https://th.bing.com/th/id/OIP.nW16fVygLmQddZvdgJ0rQwHaHa?w=199&h=199&c=7&o=5&pid=1.7",
      code: "W10446925",
      brand: "Brastemp/Consul",
      subject: "Máquina de Lavar",
      model: "Vários",
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
  },
  {
      name: "Eletrobomba de Drenagem 220V",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHiaMLYtOQBkeH7Bk0KTO9PLVFLopG45JxMA&usqp=CAU",
      code: "W10849470",
      brand: "Brastemp/Consul",
      subject: "Máquina de Lavar",
      model: "Vários",
      cost: "40,00",
      subName: "",
  }
]

function Home() {
  const [search, setSearch] = useState([...parts]);


  console.log(search.length)

  return (
    <div>
      <Search />
      <NavBar/>
      <MenuBar/>
      <Show parts={search}/>
    </div>
  )
}

export default Home