// src/components/IngredientList/IngredientList.jsx

const IngredientList = (ingredient) => {
  return <ul>
    {availableIngredients.map((ingredient) => (
        <li key={ingredient.id}>
            <p>{ingredient.name}</p>
        </li>
    ))}
  </ul>;
};

export default IngredientList;
