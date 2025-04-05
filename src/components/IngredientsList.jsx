export default function IngredientsList({ ingredients, recipeShown }) {
  const ingredientListItems = ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

  return (
    <>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientListItems}
      </ul>
      {ingredientListItems.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={recipeShown}>Get a recipe</button>
        </div>
      )}
    </>
  );
}
