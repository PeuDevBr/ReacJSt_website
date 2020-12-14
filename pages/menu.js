function Menu({handleFreezer, handleWash, handleRefrigerator, handleSplit}) {
  return (
    <div className="menuContainer">

      <a onClick={handleWash}>
        Lavadora
      </a>
      <a onClick={handleRefrigerator}>
        Refrigerdor
      </a>
      <a onClick={handleFreezer}>
        Freezer
      </a>
      <a onClick={handleSplit}>
        Split
      </a>

    </div>
  )
}

export default Menu