import { Sidebar } from "../components/sidebar"
import { Content } from "../components/content"


export const Chat = () => {
    
    return (
        <>
            <div className="flex min-h-screen">
        
                <div className="w-[20%] text-white p-4">
                    <Sidebar />
                </div>
                
                <div className="flex-1 p-6 relative">
                    <Content/>
                </div>
            </div>
        
        </>
    )
}