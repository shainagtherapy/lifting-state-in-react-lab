// src/components/IngredientList/IngredientList.jsx

const IngredientList = (ingredient) => {

  return <div>
    <h2>Ingredients</h2>
    <ul>
    {availableIngredients.map((ingredient, id) => (
        <li key={ingredient.name} >
        <span>{ingredient.name}</span>
        <button type="button" className="add" onClick= {() => onAdd(ingredient)} aria-label={`Add ${ingredient.name}`} > + </button>
        </li>
    ))}
    </ul>;
    </div>
};

export default IngredientList;
