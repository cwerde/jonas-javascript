'use strict';

// 288. Loading a Recipe from API
/*
const showRecipe = async function () {
  try {
    // A response object is what the fetch function returns
    const res = await fetch(
      // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc40'
    );

    if (!res.ok) throw new Error(`${(await res.json()).message} ${res.status}`);

    // json method is available all the response object
    const data = await res.json();

    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(recipe);
  } catch (error) {
    console.error(error);
  }
};
showRecipe();
*/
