export const getRecipes = async () => {
  const url =
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a205791455msha260d2f39cbb28cp15c397jsn0a0c7033fa47",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const recipes = result.results;
    return recipes;
  } catch (error) {
    console.error(error);
  }
};
