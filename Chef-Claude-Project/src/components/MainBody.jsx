import React from "react"
import { getrecipe } from "../ai"
import ReactMarkdown from "react-markdown"

export default function MainBody() {

    const [ingredients, setIngredients] = React.useState(["cheese", "pasta", "milk","cumin"])
    const [recipe, setRecipe] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    const list = ingredients.map((ingredient, index) =>
        <li key={index}>{ingredient}</li>
    )

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
    }

    async function getRecipe() {
        setLoading(true)
        const recipemarkdown = await getrecipe(ingredients)
        setRecipe(recipemarkdown)
        setLoading(false)
    }

    return (
        <div className="mainBody">

            <form action={handleSubmit} className="ingredient-form">
                <input
                    type="text"
                    placeholder="e.g oregano"
                    name="ingredient"
                />
                <button type="submit">+ Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <section className="list">
                    <h2>Ingredients on Hand</h2>
                    <ul className="ingredients-list">
                        {list}
                    </ul>

                    {ingredients.length > 3 &&
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a Recipe?</h3>
                                <p>Generate a recipe from your ingredients</p>
                            </div>
                            <button onClick={getRecipe}>
                                Get a Recipe
                            </button>
                        </div>
                    }
                </section>
            }

            {loading && <p>Generating recipe...</p>}

            {recipe && (
                <section>
                    <h2>Suggested Recipe</h2>
                    <ReactMarkdown>{recipe}</ReactMarkdown>
                </section>
            )}

        </div>
    )
}