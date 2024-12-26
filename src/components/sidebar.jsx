import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { Authentication } from "../Authentication/auth";
import { useNavigate, useParams } from "react-router-dom";

export const Head = ({visible}) => {

  return (
    <>
      <div className="bg-[#141414] h-full text-white 
      flex items-center justify-between rounded-r-3xl p-6">
        <div className="flex items-center gap-2 font-semibold text-2xl ">
          <div className="w-[40px] h-[40px] rounded-full bg-[#C9E6F0] p-1">
            <img src="https://pluspng.com/img-png/rizal-png-jose-rizal-is-my-homeboy-women-s-tee-178.png" alt="" />          
          </div>
          RizalGPT
        </div>

        <button onClick={() => visible(prev => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
          stroke="currentColor" className="size-10 stroke-[#89d9f2] hover:stroke-[#6bbbd4] cursor-pointer transition duration-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </>
  )
}

export const Body = () => {

  const { getID } = Authentication()
  const [chat, setChat] = useState()
  const { id } = useParams();
  const [active, setActive] = useState(id)
  const navigate = useNavigate()
  

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const userID = getID(); 
        const { data, error } = await supabase
          .from("chat_room")
          .select("*")
          .eq("user_id", userID);

        if (error) throw error;
                
        setChat(data); 
      } catch (err) {
        console.error("Error fetching chats:", err.message);
      }
    };

    fetchChats();
  }, []);

  const handleOpenChat = (id) => {
    setActive(id)    
    navigate(`/chat/${id}`)

  }


  return (
    <div className="bg-[#141414] rounded-r-3xl h-full flex flex-col items-center gap-4 p-6 w-full overflow-y-auto">
      <span className="text-left w-full text-white font-medium text-lg select-none">My Chat</span>
      {chat && chat.length > 0 ? (
        chat.map((item) => (
          <button
            key={item.id}
            onClick={() => handleOpenChat(item.id)}
            className={`text-black text-left rounded-2xl p-4 
            shadow-md hover:bg-[#6bbbd4] transition duration-200 w-full 
            cursor-pointer font-medium flex justify-between items-center whitespace-nowrap select-none
            ${active ? 'bg-[#6fbbd4]' : 'bg-[#89d9f2]'}`}
          >
            {item.title}            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  stroke-black">
              <path></path>
            </svg>

          </button>
        ))
      ) : (
        <span className="text-gray-400 select-none">No chats available.</span>
      )}
    </div>
  );
};

export const Sidebar = () => {

  const [active, setActive] = useState(true)
  
  useEffect(() => {    
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setActive(false); 
      } else {
        setActive(true); 
      }
    };
    
    handleResize();
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      {!active && 
        <div className="p-6 ">            
          <button onClick={() => setActive(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
            stroke="currentColor" className="size-10 stroke-[#89d9f2] hover:stroke-[#6bbbd4] cursor-pointer transition duration-200 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>         
        </div>
      }
      <div className={`absolute flex flex-col gap-12 h-full overflow-hidden z-40 ${active ? 'w-full' : 'w-0'}`}>
        <div>
          <Head visible={setActive}/>
        </div>        
        <Body/>        
      </div> 
    </>
  )
}