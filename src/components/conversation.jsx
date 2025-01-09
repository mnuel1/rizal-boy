import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { supabase } from "../supabase"
import '../App.css'
const Flashcards = ({ question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isEnlarged, setIsEnlarged] = useState(false);
  
    const toggleFlip = () => {
      setIsFlipped((prev) => !prev);
    };
  
    const toggleEnlarge = () => {
      setIsEnlarged((prev) => !prev);
    };
  
    return (
      <div
        className={`relative group m-4 cursor-pointer w-64 h-40 
        transition-transform duration-500 ${isEnlarged ? "scale-125" : "scale-100"}`}
        onClick={toggleEnlarge}
      >
        <div
          className={`relative w-full h-full bg-gray-800 text-white shadow-lg rounded-lg 
          transform transition-transform duration-700 ${isFlipped ? "rotate-y-180" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFlip();
          }}
        >
          {/* Front Side */}
          <div
            className={`absolute w-full h-full flex justify-center items-center backface-hidden rounded-lg 
            bg-blue-500 p-4`}
          >
            <h3 className="text-lg font-bold text-center">{question}</h3>
          </div>
  
          {/* Back Side */}
          <div
            className={`absolute w-full h-full flex justify-center items-center backface-hidden 
            rounded-lg bg-green-500 p-4 rotate-y-180`}
          >
            <p className="text-lg font-semibold text-center">{answer}</p>
          </div>
        </div>
      </div>
    );
  };
  
  const FlashcardContainer = ({flashcards}) => {
    
    return (
      <div className="flex flex-wrap justify-center items-center p-4">
        {flashcards.map((card, index) => (
          <Flashcards key={index} question={card.question} answer={card.answer} />
        ))}
      </div>
    );
  };


export const Conversation = () => {

    const { id } = useParams()

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        
        const getMessages = async () => {
            const { data, error } = await supabase
            .from('room_messages')
            .select('id, message, response, type, created_at')
            .eq('room_id', id)

            if (error) {
                console.error("Error inserting chat room:", error.message);
                Toast("error", "Something went wrong!");
            }            
            setMessages(data)
        }
        if (id) getMessages()
    }, [id])

    return (
        <div className="w-full h-[450px] md:h-[550px] lg:h-[650px] p-4 overflow-hidden overflow-y-auto">
            <div className="flex flex-col gap-4">
                {messages.map((message, index) => (
                    <>
                        <div className="flex flex-col gap-2 self-end text-right">
                            <span className="text-sm">You</span>
                            <div
                                key={index}
                                className="p-3 rounded-xl shadow-md text-md bg-[#89D9F2] text-black self-end"
                            >
                                {message.message}
                            </div>
                        </div>
                        {message.type === "question" ? (
                            <div className="flex flex-col gap-2 self-start">
                                <span className="text-sm">Jose Rizal</span>
                                <div
                                    key={index}
                                    className="p-3 rounded-xl shadow-md text-md bg-[#222729] text-white self-start">
                                    {message.response}
                                </div>
                            </div>
                        ) : (                            
                            <FlashcardContainer flashcards={JSON.parse(message.response)}/>
                        )}
                        
                    </>
                ))}
            </div>
        </div>
    );
}