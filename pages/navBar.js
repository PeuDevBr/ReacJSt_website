function NavBar({handleAll}) {
  return (
    <div className="navContainer">

      <a href="">
        Serviços
      </a>
      <a onClick={handleAll}>
        Peças
      </a>
      <a href="">
        Contatos
      </a>

    </div>
  )
}

export default NavBar