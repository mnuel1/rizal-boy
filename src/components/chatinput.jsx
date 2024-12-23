
export const ChatInput = () => {

    return (
        <>
            <div className="p-4 bg-[#222729] rounded-3xl">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Message Jose Rizal"
                        className="flex-1 p-2 outline-none bg-[#222729]"
                    />
                    <div className="flex justify-center items-center gap-4">
                        <button className="p-2 border border-[#89D9F2] rounded-full hover:border-[#6bbbd4] ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-[#89D9F2]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                            </svg>
                        </button>
                        <button className="p-2 bg-[#89D9F2] text-white rounded-full hover:bg-[#6bbbd4]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>

                        </button>
                    </div>
                
                </div>
            </div>
        </>
    )
}