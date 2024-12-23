export const Head = () => {
  return (
    <>
      <div className="bg-[#141414] h-full text-white 
      flex items-center rounded-3xl gap-2 font-semibold
      text-2xl p-6">
        <div className="w-[40px] h-[40px] rounded-full bg-[#C9E6F0] p-1">
          <img src="https://pluspng.com/img-png/rizal-png-jose-rizal-is-my-homeboy-women-s-tee-178.png" alt="" />          
        </div>
        RizalGPT
      </div>
    </>
  )
}

const data = [
  {
    "id" : 1,
    "title" : "Title 1"
  },
  {
    "id" : 2,
    "title" : "Title 2"
  },
  {
    "id" : 3,
    "title" : "Title 3"
  },
  {
    "id" : 4,
    "title" : "Title 4"
  },
  {
    "id" : 5,
    "title" : "Title 5"
  },

]

export const Body = () => {
  return (
    <div className="bg-[#141414] rounded-3xl h-full flex flex-col items-center gap-4 p-6 w-full">
      <span className="text-left w-full text-white font-medium text-lg">My Chat</span>
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-[#89d9f2] text-black text-left rounded-2xl p-4 
          shadow-md hover:bg-[#6bbbd4] transition duration-200 w-full 
          cursor-pointer font-medium"
        >
          {item.title}

        </div>
      ))}
    </div>
  );
};

export const Sidebar = () => {
  return (
    <>       
      <div className="flex flex-col gap-12 h-full">
        <div>
          <Head/>
        </div>

        
        <Body/>
        

      </div> 
    </>
  )
}