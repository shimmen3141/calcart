import React, { useState } from 'react';
import './App.css';
import { IngredientInput, NumberOfGroupInput, ShoppingList } from './components/index';

const App = () => {
  const [numInputGroups, setNumInputGroups] = useState(2);
  const [ingredientGroups, setIngredientGroups] = useState([
    { ingredients: [], numberOfGroup: 1 },
    { ingredients: [], numberOfGroup: 1 }
  ]);

  const handleIngredientChange = (index, newIngredients) => {
    const newIngredientGroups = [...ingredientGroups];
    newIngredientGroups[index].ingredients = newIngredients;
    setIngredientGroups(newIngredientGroups);
  };

  const handleNumberOfGroupChange = (index, newNumberOfGroup) => {
    const newIngredientGroups = [...ingredientGroups];
    newIngredientGroups[index].numberOfGroup = newNumberOfGroup;
    setIngredientGroups(newIngredientGroups);
  };

  const handleNumInputGroupsChange = (event) => {
    const newNumInputGroups = parseInt(event.target.value, 10);
    setNumInputGroups(newNumInputGroups);

    const newIngredientGroups = [...ingredientGroups];

    if (newNumInputGroups > ingredientGroups.length) {
      for (let i = ingredientGroups.length; i < newNumInputGroups; i++) {
        newIngredientGroups.push({ ingredients: [], numberOfGroup: 1 });
      }
    } else if (newNumInputGroups < ingredientGroups.length) {
      newIngredientGroups.splice(newNumInputGroups);
    }

    setIngredientGroups(newIngredientGroups);
  };

  const calculateShoppingList = () => {
    return ingredientGroups.flatMap(group =>
      group.ingredients.map(ingredient => ({
        name: ingredient.name,
        info: ingredient.info,
        numberOfGroup: group.numberOfGroup
      }))
    );
  };

  return (
    <div>
      <h1>買い出しリスト作成アプリ</h1>

      <label>
        入力欄の数:
        <input
          type="number"
          value={numInputGroups}
          min="1"
          onChange={handleNumInputGroupsChange}
        />
      </label>

      <div className="input-group-container">
        {ingredientGroups.map((group, index) => (
          <div key={index} className="input-group">
            <IngredientInput onChange={(newIngredients) => handleIngredientChange(index, newIngredients)} />
            <NumberOfGroupInput onChange={(newNumberOfGroup) => handleNumberOfGroupChange(index, newNumberOfGroup)} />
          </div>
        ))}
      </div>

      <ShoppingList items={calculateShoppingList()} />
    </div>
  );
}

export default App;
