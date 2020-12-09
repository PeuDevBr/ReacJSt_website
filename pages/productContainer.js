function ProductContainer(prop) {
  
  const content = prop.parts.map((part) =>

    <div key={part.code}>

      <article className="productConteiner">

        <header className="productHeader">
  
          <img className="productImage" src={part.avatar} alt=""/>

          <div>
            <strong>{part.name}</strong>
            <span> Código: {part.code}</span>
            <span>Marca: {part.brand}</span>
            <span>Modelo: {part.model}</span>
          </div>

        </header>
                      
        <footer className="footerContainer">

          <p>
            Preço<strong>{part.cost}</strong>
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

export default ProductContainer