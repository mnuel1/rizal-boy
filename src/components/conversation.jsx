import React, { useState } from "react"
import { useParams } from "react-router-dom"

import { supabase } from "../supabase"
export const Conversation = () => {

    const { id } = useParams()

    const [messages, setMessages] = useState([
        { sender: "user", text: "Hello AI!" },
        { sender: "ai", text: "Hello! How can I assist you today?" },
        { sender: "user", text: "What's the weather like?" },
        { sender: "ai", text: "The weather is sunny and 75°F. Perfect for a walk!" },
        { sender: "user", text: "What's the weather like?" },
        { sender: "ai", text: "The weather is sunny and 75°F. Perfect for a walk!" },
        { sender: "user", text: "What's the weather like?" },
        { sender: "ai", text: "The weather is sunny and 75°F. Perfect for a walk!" },
        { sender: "user", text: "What's the weather like?" },
        { sender: "ai", text: "The weather is sunny and 75°F. Perfect for a walk!" },
        { sender: "user", text: "What's the weather like?" },
        { sender: "ai", text: "The weather is sunny and 75°F. Perfect for a walk!" },
        { sender: "user", text: "What's the weather like?" },
        { sender: "ai", text: "The weather is sunny and 75°F. Perfect for a walk!" },
        { sender: "user", text: "What's the weather like?" },
        { sender: "ai", text: "The weather is sunny and 75°F. Perfect for a walk!" },
        { sender: "user", text: "What's the weather like?" },
        { sender: "ai", text: "The weather is sunny and 75°F. Perfect for a walk!" },
        { sender: "user", text: "What's the weather like?" },
        { sender: "ai", text: "The weather is sunny and 75°F. Perfect for a walk!" },
        { sender: "user", text: "What's the weather like?" },
        { sender: "ai", text: "The weather is sunny and 75°F. Perfect for a walk!" },
        { sender: "user", text: "What's the weather like?" },
        { sender: "ai", text: "The weather is sunny and 75°F. Perfect for a walk!" },
        
    ]);

    return (
        <div className="w-full h-[450px] md:h-[550px] lg:h-[650px] p-4 overflow-hidden overflow-y-auto">
            <div className="flex flex-col gap-4">
                {messages.map((message, index) => (
                    <div className={`flex flex-col gap-2 
                        ${message.sender === "user"
                        ? "self-end text-right"
                        : "self-start"}`}>
                        <span className="text-sm">{message.sender === "user" ? "You" : "Jose Rizal"}</span>
                        <div
                            key={index}
                            className={`p-3 rounded-xl shadow-md text-md  ${
                                message.sender === "user"
                                    ? "bg-[#89D9F2] text-black self-end"
                                    : "bg-[#222729] text-white self-start"
                            }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}