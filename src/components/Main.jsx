import { useState } from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "../../ai"

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    
    async function getRecipe() {
        const recipeMardown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMardown)
    }
    function addIngredients(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredients}>
                <input type="text" name="ingredient" placeholder="e.g rice"/>
                <button type="submit">+ add ingredient</button>
            </form>
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand():</h2>
                <small>(Enter minimum of 4 ingredients to generate recipe)</small>
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
            </section>}
            {recipe && <ClaudeRecipe handleClick={getRecipeFromMistral}  />}
        </main>
    )
}