import { ICocktail, IResults } from "../../types";
import "./Results.css";

const Results: React.FC<IResults> = ({
  drinks,
  value,
  isLoading,
  isOpen,
  handleSelect,
}) => {
  if (isLoading) return <div className="absolute underText">Loading...</div>;
  if (!drinks?.length && value)
    return (
      <div className="absolute underText">
        No drinks found, try searching for another one!
      </div>
    );

  return (
    isOpen && (
      <div className="resultContainer absolute">
        {drinks.map((drink: ICocktail) => {
          const parts = drink.strDrink.split(new RegExp(`(${value})`, "gi"));
          /* Wanted to make this tabbable and arrow key navigable but ran out of time,
           which would make it more accessible */
          return (
            <div
              key={drink.strDrink}
              className="resultRow"
              onClick={() => handleSelect(drink)}
            >
              <span>
                {parts.map((part, i) =>
                  part.toLowerCase() === value.toLowerCase() ? (
                    <span key={i} className="highlight">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </span>
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="thumbnail"
              />
            </div>
          );
        })}
      </div>
    )
  );
};

export default Results;
