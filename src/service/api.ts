import { ICocktail } from "../types";

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

export const fetchCocktails = async (search: string) => {
  try {
    if (!search) return [];
    const response = await fetch(`${API_URL}?s=${search}`);
    const data = await response.json();
    if (!data?.drinks) return [];
    return data.drinks.map((drink: ICocktail) => ({
      strDrink: drink.strDrink,
      strDrinkThumb: drink.strDrinkThumb,
      strInstructions: drink.strInstructions,
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
};
