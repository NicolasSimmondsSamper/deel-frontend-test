export interface ICocktail {
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

export interface IResults {
  drinks: ICocktail[];
  value: string;
  isLoading: boolean;
  isOpen: boolean;
  handleSelect: (drink: ICocktail) => void;
}

export interface ISearchInput {
  handleChange: (value: string) => void;
  searchValue: string;
  placeHolder: string;
  handleBlur: () => void;
  handleFocus: () => void;
}
