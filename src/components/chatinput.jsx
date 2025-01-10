import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { generateContent } from '../service/ai';
import { Toast } from './toast';
import { supabase } from '../supabase';
import { Authentication } from '../Authentication/auth';
import { useNavigate } from 'react-router-dom';
export const ChatInput = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const { id } = useParams()
  const { getID } = Authentication()
  const navigate = useNavigate()

  const newChat = async (title) => {
    const userID = getID()
    const { data, error } = await supabase
    .from('chat_room')
    .insert([{ user_id: userID, title: title }])
    .select();

    if (error) {
      console.error("Error inserting chat room:", error.message);
      Toast("error", "Something went wrong!");
      return null;
    }   
    return data[0].id    
  }

  const newMessage = async (id, message, response, type) => {
    const { error } = await supabase
    .from('room_messages')
    .insert([{ room_id: id, message: message, response: response, type: type }])    

    if (error) {
      console.error("Error inserting chat room:", error.message);
      Toast("error", "Something went wrong!");
    }

  }

  const extractJSON = (response) => {  
    const jsonMatch = response.match(/```json([\s\S]*?)```/);
    if (jsonMatch && jsonMatch[1]) {
        try {            
            return JSON.parse(jsonMatch[1].trim());
        } catch (error) {
            console.error("Error parsing JSON:", error);
            return null;
        }
    } else {
        console.error("No JSON block found in the response.");
        return null;
    }
}
  const handleSend = async () => {
      
    setLoading(true);
    const response = await generateContent(input);

    if (!response) {
      Toast("error", "Something went wrong!");
      setLoading(false);
      return;
    }
    const res = response.data.candidates[0].content.parts[0].text; // ai response

    const parsedData = extractJSON(res)

    if (!parsedData) {
      Toast("error", "Something went wrong!");
      setLoading(false);
      return
    }    
    let insertedId = id;
    const redirect = id ? true : false
    if (!id) {
      insertedId = await newChat(parsedData.title)
    }

    if (insertedId) {
      const type = parsedData.type
      const text = type === "question" ? parsedData.response : parsedData.questions

      newMessage(
        insertedId, 
        input, 
        text,
        type
      )
     
    }
    // console.log(response.data.candidates[0].content.parts[0].text);
    setInput("");    
    setLoading(false);

    if (!redirect) {          
      navigate(`/chat/${insertedId}`)
    }
    window.location.reload();
  };

  const handleMic = async () => {
    if (!('webkitSpeechRecognition' in window)) {
      Toast("error", "Your browser does not support voice input.");
      return;
    }
        
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = (event) => {
      setListening(false);
      console.error("Speech recognition error:", event.error);
      Toast("error", "Error capturing voice input.");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput((prevInput) => `${prevInput} ${transcript}`);      
    };

    recognition.start();
  };

  return (
    <div className="p-4 bg-[#222729] rounded-3xl">
      <div className="flex items-center gap-2">      
        <input
          type="text"
          placeholder="Message Jose Rizal"
          className="flex-1 p-2 outline-none bg-[#222729] text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input !== "") {
              handleSend()
            }
          }}
        />

        {!loading ? (
          input !== "" ? (
            <button 
              onClick={handleSend}
              className="p-2 bg-[#89D9F2] text-white rounded-full hover:bg-[#6bbbd4]">        
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          ) : (            
            <button 
            onClick={handleMic}
            className={`p-2 bg-[#89D9F2] text-white rounded-full 
            hover:bg-[#6bbbd4] ${listening ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>
            </button>
          )
        ) : (
          <button className="p-2 bg-[#89D9F2] text-white rounded-full hover:bg-[#6bbbd4] cursor-not-allowed">            
            <span className="loader"></span>
          </button>
        )}    
      </div>
    </div>
  );
};
