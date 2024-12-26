import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { supabase } from "../supabase"

export const Conversation = () => {

    const { id } = useParams()

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        
        const getMessages = async () => {
            const { data, error } = await supabase
            .from('room_messages')
            .select('id, message, response,created_at')
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

                        <div className="flex flex-col gap-2 self-start">
                            <span className="text-sm">Jose Rizal</span>
                            <div
                                key={index}
                                className="p-3 rounded-xl shadow-md text-md bg-[#222729] text-white self-start">
                                {message.response}
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}