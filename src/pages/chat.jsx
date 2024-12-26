import { Sidebar } from "../components/sidebar"
import { Content } from "../components/content"


export const Chat = () => {
    
    return (
        <>
            <div className="flex min-h-screen">
        
                <div className="w-[300px] h-full text-white absolute z-50">
                    <Sidebar />
                </div>
                
                <div className="flex-1 relative ml-0 lg:ml-40">
                    <Content/>
                </div>
            </div>
        
        </>
    )
}