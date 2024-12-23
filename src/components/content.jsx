import { ChatInput } from "./chatinput"
import { Title } from "./title"

import rizal from '../assets/riz.png'
export const BigHeader = () => {
    return (
        <>
            <div className="w-full flex justify-center relative items-center bg-[#89D9F2] 
            p-12 rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
                <img src={rizal} alt="" width={150} className="absolute left-5"/>
                <span className="text-black font-bold text-3xl max-w-xs text-center">
                    Hello, How can I help you today?
                </span>
                <div></div>
            </div>
        </>
    )
}

export const Shortcut1 = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-12 justify-center 
            items-center bg-[#222729] text-white p-4 rounded-2xl cursor-pointer hover:bg-[#1A1D20] transition duration-200 
            shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                <div className="rounded-full border border-[#89D9F2] p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                    viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-[#89d9f2]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                    </svg>
                </div>
                <span className="font-medium text-lg text-center">
                    Generate a set of flashcards with questions about Rizal.
                </span>

            </div>
        </>
    )
}

export const Shortcut2 = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-12 justify-center items-center 
            bg-[#222729] text-white p-4 rounded-2xl cursor-pointer hover:bg-[#1A1D20] transition duration-200 
            shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                <div className="rounded-full border border-[#89D9F2] p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-[#89d9f2]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                </div>
                <span className="font-medium text-lg text-center">
                    Ask questions about Rizal.
                </span>
                
            </div>
        </>
    )
}


export const Content = () => {

    return (
        <>
           
            <div className="absolute top-0 left-0 flex justify-between items-center w-full py-6 px-12">

                <div className="flex items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
                    stroke="currentColor" class="size-10 stroke-[#89d9f2] hover:stroke-[#6bbbd4] cursor-pointer transition duration-200">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <Title title={"Title 1"} />
                </div>

                <div className="rounded-full bg-green-700 
                w-10 h-10 flex items-center justify-center cursor-pointer">
                    M
                </div>
                
            </div>

            <div className="flex h-full flex-col max-w-4xl p-4 mx-auto">

                <div className="flex flex-col items-center justify-center h-full ">
                    {/* Big Header */}
                    <div className="mb-4 w-full">
                        <BigHeader />
                    </div>

                    {/* Shortcuts */}
                    <div className="flex w-full gap-4">
                        <Shortcut1 />
                        <Shortcut2 />
                    </div>
                </div>

                <ChatInput/>

            </div>
                


           
        </>
    )
}