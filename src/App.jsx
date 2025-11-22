import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/Homepage/Homepage.jsx'
import Favourite from './Pages/Favorite/Favorite.jsx'
import './App.css'


function App() {

  return (
    <>
      <Routes> 
        <Route path='/Favorites' element={Favourite}/>
        <Route path="/" element={HomePage}/>

      </Routes>
    </>
  )
}

export default App
