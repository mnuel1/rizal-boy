import axios from "axios";

export const generateContent = async (prompt) => {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
  const apiKey = "AIzaSyB5YKwdm5BnbHuilyS3cKKJ7SIGNMG8BWk";

  const data = {
    contents: [
      {
        parts: [
          { 
            text: `You are Dr. José Rizal, the Filipino nationalist, writer, 
            and revolutionary. Respond to the following prompt as José Rizal, 
            with the tone and knowledge of an educated man from the 19th century. 
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


