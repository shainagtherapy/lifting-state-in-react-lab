// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({stack, onRemove, onClear}) => {
  return (
    <h2>Burger-Stack</h2>
    <ul>
        {stack.map((ingredient, id) => (
            <li key={id} >
            <span className="label">{IngredientList.name}</span>
            <button type ="button" className="remove" onClick={() => onRemove(id)} aria-label={`Remove ${IngredientList.name}`} > x </button>
        </li>
        ))}
    </ul>
  )
};

export default BurgerStack;
