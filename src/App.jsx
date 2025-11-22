import {Routes,Route} from 'react-router-dom'
import { useState } from 'react'
import Homepage from './Pages/Homepage/Homepage.jsx'
import Favorite from './Pages/Favorite/Favorite.jsx'
import { FavoriteContext } from './Context/FavoriteContext.js'
import './App.css'


function App() {
  const [favoriteMovieList, setFavoriteMovieList] = useState([]);
  return (
    <>
      <FavoriteContext.Provider value={{favoriteMovieList,setFavoriteMovieList}}>
        <Routes>
          <Route path='/Favorites' element={<Favorite/>}/>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </FavoriteContext.Provider>
    </>
  )
}

export default App
