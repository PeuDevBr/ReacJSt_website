function ProductContainer({parts}) {
  
  const content = parts.map((parts) =>

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

export default ProductContainer