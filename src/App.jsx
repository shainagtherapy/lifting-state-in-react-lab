// src/App.jsx

import './App.css';
import { useState } from "react";
import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';

const App = () => {
  const [stack, setStack] = useState ([]);

  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const addToBurger = (ingredient) => {
    setStack((prev) => [...prev, ingredient]);
  }

  const removeFromBurger = (ingredient) => {
    setStack((prev) => prev.filter(ingredient => ingredient.id !== ingredient)) /* is this the same or needs a new variable? DRY?*******/
  }

  const clearStack = () => {
    setStack([]);
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList availableIngredients={availableIngredients} onAdd={addToBurger} />
      <BurgerStack stack={stack} onRemove={removeFromBurger} onClear={clearStack} />
      </section>
    </main>
  );
};

export default App;
