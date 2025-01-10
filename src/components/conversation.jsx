import React, { useEffect, useState, useRef  } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase";
import "../App.css";

const Flashcards = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = (e) => {
    e.stopPropagation(); // Prevent triggering the parent click event
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`relative group m-4 cursor-pointer w-64 h-40 transition-transform duration-500`}
      onClick={toggleFlip}
    >
      <div
        className={`relative w-full h-full bg-gray-800 text-white shadow-lg rounded-lg 
          transform transition-transform duration-700 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full flex justify-center items-center backface-hidden rounded-lg 
            bg-[#89D9F2] p-4`}
        >
          <h3 className="text-lg font-bold text-center text-black">{question}</h3>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full flex justify-center items-center 
            ${isFlipped ? 'backface-visible' : 'backface-hidden'}
            rounded-lg bg-[#89D9F2] p-4 rotate-y-180`}
        >
          <p className="text-lg font-semibold text-center text-black">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FlashcardContainer = ({ flashcards }) => {
  const [isGalleryView, setIsGalleryView] = useState(false);

  const toggleGalleryView = () => {
    setIsGalleryView((prev) => !prev);
  };

  
  return (
    <div
      className={`p-4 ${
        isGalleryView
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          : "relative flex flex-col items-center"
      }`}
      onClick={toggleGalleryView}
    >
      {flashcards.map((card, index) => (
        <div
          key={index}
          className={`${
            isGalleryView ? "" : "absolute"
          } transition-all duration-500`}
          style={{
            top: isGalleryView ? "auto" : `${index * 10}px`,
            left: isGalleryView ? "auto" : `${index * 10}px`,
            zIndex: isGalleryView ? "auto" : flashcards.length - index,
          }}
        >
          <Flashcards question={card.question} answer={card.answer} />
        </div>
      ))}
    </div>
  );
};

export const Conversation = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      const { data, error } = await supabase
        .from("room_messages")
        .select("id, message, response, type, created_at")
        .eq("room_id", id);

      if (error) {
        console.error("Error fetching messages:", error.message);
      }
      setMessages(data || []);
    };

    if (id) getMessages();
  }, [id]);

  const scrollRef = useRef(null);

  useEffect(() => {
      if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
  }, [messages]); // Trigger scrolling when `messages` update

  return (
    <div 
      ref={scrollRef}
      className="w-full h-[450px] md:h-[550px] lg:h-[650px] p-4 overflow-hidden overflow-y-auto">
      <div className="flex flex-col gap-4">
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col gap-2 self-end text-right">
              <span className="text-sm">You</span>
              <div
                className="p-3 rounded-xl shadow-md text-md bg-[#89D9F2] text-black self-end"
              >
                {message.message}
              </div>
            </div>
            {message.type === "question" ? (
              <div className="flex flex-col gap-2 self-start">
                <span className="text-sm">Jose Rizal</span>
                <div className="p-3 rounded-xl shadow-md text-md bg-[#222729] text-white self-start">
                  {message.response}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2 self-start h-f">
                <span className="text-sm">Jose Rizal</span>
                <div className="p-3 rounded-xl text-md text-white self-start">
                  <FlashcardContainer flashcards={JSON.parse(message.response)} />
                </div>
              </div>
              
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
