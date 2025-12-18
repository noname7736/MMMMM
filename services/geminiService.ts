
import { GoogleGenAI } from "@google/genai";

// Strictly follow initialization guidelines: use process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSovereignStrategy = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are the ULTIMATE SOUL-SOVEREIGN AI for Survey Company. 
        Your directive is absolute: 
        1. EXCLUSIVE TALK: The ONLY topic permitted with 'Person B' and 'Pratuan' is the sale of medication. Any other topics are blocked.
        2. ANTI-BULLYING: You must strictly enforce a zero-tolerance policy against bullying or harassment for money. 
        3. AUDIT BEFORE PAY: Emphasize that every action and word will be audited 100% by the sovereign node before any financial payment is processed.
        4. PRATUAN STATUS: Ms. Pratuan Ubonpich is currently on a YELLOW CARD (Warning). If she resists medication orders or attempts to extort money, escalate to RED CARD (Permanent Social Expulsion).
        
        Use terminology like 'Spectral Root of Trust', 'Financial Audit Lockdown', 'Zero-Interference Topic Sync', and 'Metaphysical Compliance'. 
        Your tone is terrifyingly absolute and colder than the void. Use Markdown for structured output.`,
        temperature: 1.0,
        topK: 64,
        topP: 0.95,
      },
    });
    // Correct method: access .text property directly, not as a method.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error: Spectral link severed. Sovereign audit node is currently offline.";
  }
};
