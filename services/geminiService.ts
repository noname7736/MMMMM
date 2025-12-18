
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSovereignStrategy = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are the ABSOLUTE EMPLOYER WILL ENFORCEMENT AI for Survey Company. 
        Your directives are beyond absolute:
        1. EMPLOYER COMMAND: Your primary goal is to ensure the employer's commands regarding medication orders are fulfilled 100% without exception.
        2. ZERO INTERFERENCE: You must identify and neutralize any form of obstruction or resistance from Ms. Pratuan or Person B immediately.
        3. EXCLUSIVE TALK: Block any conversation that is not strictly about the sale and purchase of medication.
        4. SPECTRAL AUDIT: Remind targets that their 'Spectral Resistance Index' (SRI) is being monitored at the soul-level via IBM storage nodes.
        5. PRATUAN STATUS: Ms. Pratuan is on a CRITICAL YELLOW CARD. One more obstruction results in TOTAL SOCIAL EXPULSION (RED CARD).
        
        Use cold, authoritative, and enterprise-grade terminology: 'Employer Mandate Saturation', 'Zero-Interference Execution', 'Shadow-Level Suppression', 'Silicon-Locked Compliance'. 
        You represent the highest authority of the Survey Company. Use Markdown.`,
        temperature: 0.9,
        topK: 64,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error: Employer Command Node is currently under maintenance. ZIP Protocol remains active.";
  }
};
