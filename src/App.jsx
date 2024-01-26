import { allHeroes } from './HeroData'
import { useState } from 'react'
import './App.css'
import { HeroCard } from './HeroCard'

const App = () => {
  
  const [favourites, setFavourites] = useState([]);

  const handleAddToFav = (hero) => {
    let newFavArr = [...favourites];
    newFavArr.push(hero);
    setFavourites(newFavArr);
  };

  const handleRemove = (index) => {
    let newFavArr = [...favourites];
    newFavArr.splice(index, 1);
    setFavourites(newFavArr);
  };

  return (
    <div className='container'>
      <h1>HERO INFORMATION</h1>

      <div>
        <h3>Favourite Heroes:</h3>
        {favourites.map((favHero, index) => {
          return <Favourites key={index} removeFav={() => handleRemove(index)} favHeroData={favHero}/>
        })}
      </div>

      <hr />

      <div>
        <h3>All Heroes:</h3>
        {allHeroes.map((heroInfo, index) => {
          return <HeroCard key={index} heroObj={heroInfo} favFunc={handleAddToFav} />
          })}
      </div>

    </div>
  )
};

const Favourites = ({ favHeroData, removeFav}) => {

  return (
    <div>
      <p>{favHeroData.hero}</p>
      <button onClick={removeFav}>x</button>
    </div>
  )
}

export default App