// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({availableIngredients, onAdd}) => {
  
  return (
    <div>
    <h2>Ingredients</h2>
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <li key={ingredient.name} style={{backgroundColor: ingredient.color}}>
          <span>{ingredient.name}</span>
          <button type="button" className="add" onClick= {() => onAdd(ingredient)} label={`Add ${ingredient.name}`} > + </button>
        </li>
      ))};
      
    </ul>
    </div>
  );
};

export default IngredientList;
