const Search = ({handleSubmit}) => ( 
    
    <div className="searchContainer">

      <div className="logoContainer">
        <a href="/about">Servibras</a>
      </div>      

      <div className="searchForContainer">
        <form onSubmit={handleSubmit}>
          <input 
            id="searchInput"
            type="text" 
            name="search"
            placeholder="Busque o seu produto"          
          />
          <button type='submit'id="searchButton">
            Pesquisar
          </button>
        </form>
      </div>

    </div>

)


export default Search