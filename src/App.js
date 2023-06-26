import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Sidebar from "./Components/Sidebar";
import { FaBeer } from 'react-icons/fa'


function App() {
  const [recipes, setrecipes] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('')
  const [submitValue, setSubmitValue] = useState(false)
  const [searchID, setSearchID] = useState('')
  
  useEffect(() => {
    const showRecipe = async function () {
      if (!searchID) return;
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${searchID}`
        );
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status}) `);
        let {recipe}  = data.data;
        recipe = {
          id: recipe.id,
          title: recipe.title,
          publisher: recipe.publisher,
          sourceUrl: recipe.source_url,
          servings: recipe.servings,
          cookingTime: recipe.cooking_time,
          ingredients: recipe.ingredients,
          image:recipe.image_url,
        };
        setrecipes(recipe);
      } catch (err) {
        alert(err);
      }
  
      
    };
    showRecipe();
  }, [searchID]);
  
  useEffect(() => {
    const loadSearch = async function () {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
        );
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status}) `);

        let  {recipes}  = data.data;
        recipes.map(rec=> {
          return{
          id: rec.id,
          title: rec.title,
          publisher: rec.publisher,
          Image:rec.image_url,
        }
        })
        setSearch(recipes);
      } catch (err) {
        alert(err);
      }
  
      
    };
    loadSearch();
  }, [query],true);

  const trying= recipes.ingredients;
  
  return (
    <div className="md:m-[5rem] ">
      <Nav 
      Query={setQuery}
      Submit={setSubmitValue}
      />
      <div className="flex ">
        <Sidebar 
        search={search}
        query={query}
        Submit={submitValue}
        ID={setSearchID}
        clickedId={recipes.id}
        />
        <Home
          cookingTime={recipes.cookingTime}
          title={recipes.title}
          image={recipes.image}
          servings={recipes.servings}
          publisher={recipes.publisher}
          url={recipes.sourceUrl}
          ingredients={trying}
        />
      </div>
    </div>
  );
}

export default App;
