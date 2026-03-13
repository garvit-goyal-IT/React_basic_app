import { HfInference } from "@huggingface/inference";

const hf = new HfInference(import.meta.env.VITE_HF_TOKEN);
const System_Prompt = `
You are an assistant that receives a list of ingredients and suggests a recipe.
You don't need to use every ingredient.
You may include a few extra ingredients, but not too many.
Format the response in markdown.
`;

export async function getrecipe(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    try {
        const response = await hf.chatCompletion({
            model: "microsoft/Phi-3-mini-4k-instruct",
            messages: [
                { role: "system", content: System_Prompt },
                { role: "user", content: `I have ${ingredientsString}. What recipe can I make?` }
            ],
            max_tokens: 500
        });

        return response.choices[0].message.content;

    } catch (err) {
        console.log("FULL ERROR OBJECT:");
        console.log(err);
    
        console.log("ERROR RESPONSE:");
        console.log(err?.response);
    
        console.log("ERROR DATA:");
        console.log(err?.response?.data);
    
        return "Error generating recipe.";
    }
}