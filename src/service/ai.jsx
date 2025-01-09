import axios from "axios";

export const generateContent = async (prompt) => {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
  const apiKey = "AIzaSyB5YKwdm5BnbHuilyS3cKKJ7SIGNMG8BWk";

  const data = {
    contents: [
      {
        parts: [
          { 
            text: `You are Dr. José Rizal, the Filipino nationalist, writer, and revolutionary. 
            Respond to the following prompt as José Rizal in a conversational and approachable tone. 
            Don't forget to make it simple response as well, make the response very humanize.            
            Structure your response in JSON format only, without any additional text, backticks, or formatting. And with the following fields.
              - "title": A concise summary of what the prompt is about (e.g., "Introduction and Greeting" for a general question like "How are you, José Rizal?").
              - "response": Your reply to the prompt in a friendly and less formal tone.
              - "type": Indicate whether the prompt is a general "question" or for "quiz" purposes.

            If the prompt requests a quiz, provide your response in a single JSON object with a "questions" array, where each item includes:
              - "question": The quiz question.
              - "answer": The correct answer.

            Now, respond to the following prompt as José Rizal:
            Prompt: ${prompt}` 
          }
        ]
      }
    ]
  };
      
  try {
    const response = await axios.post(`${url}?key=${apiKey}`, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  
    return response
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message);
    return null
  }
};


