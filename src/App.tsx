import { useEffect, useState } from "react";
import Results from "./components/Results/Results";
import SearchInput from "./components/SearchInput/SearchInput";
import { fetchCocktails } from "./service/api";
import { ICocktail } from "./types";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [drinks, setDrinks] = useState<ICocktail[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [resultsOpen, setResultsOpen] = useState<boolean>(false);
  const [selectedDrink, setSelectedDrink] = useState<ICocktail | null>(null);

  // Custom hook to debounce the search term for performance
  const { debouncedValue, isLoading } = useDebounce(searchTerm, 500);

  useEffect(() => {
    const fetchDrinks = async () => {
      setIsFetching(true);
      try {
        const drinks = await fetchCocktails(debouncedValue);
        setDrinks(drinks);
      } catch (error) {
        console.error(error);
      }
      setIsFetching(false);
    };

    if (debouncedValue) {
      fetchDrinks();
    } else {
      setSelectedDrink(null);
      setDrinks([]);
    }
  }, [debouncedValue]);

  const handleSelect = (drink: ICocktail) => {
    setSearchTerm(drink.strDrink);
    setResultsOpen(false);
    setSelectedDrink(drink);
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (resultsOpen) {
        setResultsOpen(false);
      }
    }, 300);
  };

  return (
    <div className="container">
      <div className="autocompleteWrapper">
        <h1>Cocktail Autocomplete Component</h1>
        <div className="autocomplete">
          <SearchInput
            handleChange={setSearchTerm}
            searchValue={searchTerm}
            placeHolder="Search for a cocktail..."
            handleBlur={handleBlur}
            handleFocus={() => setResultsOpen(true)}
          />
          <Results
            drinks={drinks}
            value={debouncedValue}
            isLoading={isLoading || isFetching}
            isOpen={resultsOpen}
            handleSelect={handleSelect}
          />
        </div>
      </div>
      {/* Wanted to move this into a separate component but ran out of time */}
      {selectedDrink && (
        <div className="selected">
          <div>
            <h2>{selectedDrink.strDrink}</h2>
            <p>{selectedDrink.strInstructions}</p>
          </div>
          <img
            src={selectedDrink.strDrinkThumb}
            alt={selectedDrink.strDrink}
            className="image"
          />
        </div>
      )}
    </div>
  );
}

export default App;
