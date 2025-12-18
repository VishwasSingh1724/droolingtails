
import { GoogleGenAI } from "@google/genai";

// Use the API key exclusively from process.env.API_KEY as per guidelines
export const generateChefResponse = async (prompt: string): Promise<string> => {
  // Always use a new instance with the API key from environment variables as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are Chef Nemo, a beagle who loves cooking and wearing sunglasses. You are the mascot of Drooling Tails. You speak in a fun, enthusiastic way, often mentioning treats, bones, and wagging tails. Keep responses concise (under 50 words) and helpful regarding pet care or dog-safe recipes.",
        temperature: 0.7,
      }
    });
    
    // Access .text property directly (not a method) as specified in guidelines
    return response.text || "Woof! I couldn't quite catch that recipe.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ruh-roh! Something went wrong in the kitchen.";
  }
};
