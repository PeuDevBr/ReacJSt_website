import Menu from './menu'
import NavBar from './navBar'
import ShowContent from './showContent'


function Home() {
 
  

  return (
    <div className="container">
      {/*<Search handleSubmit={(e) => handleSubmit(e)}/>*/}
      <NavBar /> 
      <Menu />
      <ShowContent />
    </div>
  )
}

export default Home