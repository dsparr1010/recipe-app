import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe';
import { ID, KEY } from './components/Keys';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pie');

  useEffect(() => {
    console.log(ID);
    console.log(KEY);
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);

    // Using Promises
    // fetch(exampleReq)
    //   .then(data => {
    //     response.json(data);
    // })
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className = 'App'>
      <form
        className='search-form'
        onSubmit={getSearch}
      >
        <input
          className='search-input'
          type='text'
          value={search}
          onChange={updateSearch}
        ></input>
        <button
          className='search-btn'
          type='submit' 
        >
          Search
        </button>
      </form>
      <div className='recipe'>
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        ></Recipe>
      ))};
      </div>
    </div>
  )
}

export default App;
