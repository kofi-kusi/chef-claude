export default function IngredientsList({ ingredients, getRecipe, ref }) {
  const ingredientListItems = ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

  return (
    <>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientListItems}
      </ul>
      {ingredientListItems.length > 3 && (
        <div className="get-recipe-container" ref={ref}>
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
            <p>Click on the button and wait for few seconds</p>
          </div>
          <button onClick={getRecipe}>Get a recipe</button>
        </div>
      )}
    </>
  );
}
