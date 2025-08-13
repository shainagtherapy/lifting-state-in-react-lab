// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({stack, onRemove}) => {
  return (
    <div>
      <h2>Your Burger</h2>
      
        <ul>
          {stack.map((ingredient, index) => (
              <li key={index} style={{backgroundColor: ingredient.color}}>
              <span className="label">{ingredient.name}</span>
              <button type ="button" className="remove" onClick={() => onRemove(index)} > x </button>
          </li>
          ))}
        </ul>
    </div> 
  )
};

export default BurgerStack;
