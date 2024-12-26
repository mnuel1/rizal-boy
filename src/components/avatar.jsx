import React, { useState, useEffect, useRef } from "react";
import { Authentication } from "../Authentication/auth";
import { supabase } from "../supabase";
import { Toast } from "./toast";

export const Avatar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { getUser, logout } = Authentication();
    const menuRef = useRef(null); 

    const handleLogout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            logout();
            Toast("success", "Logged out successfully!");
        } catch (error) {
            Toast("error", "Something went wrong!");
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false); 
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Cleanup
        };
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <div className="hover:bg-gray-600 rounded-full p-[2px]">
                <div
                    className="rounded-full bg-green-700 w-10 h-10 flex items-center justify-center cursor-pointer"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {getUser().charAt(0)}
                </div>
            </div>

            {menuOpen && (
                <div
                    className="absolute top-12 right-0 bg-[#141414] shadow-lg 
                rounded-xl p-2 w-40 z-10"
                >
                    <button
                        className="block w-full text-left px-4 py-2 
                            text-sm text-white hover:bg-[#89D9F2] rounded-xl
                            flex items-center gap-2 group"
                        onClick={handleLogout}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 group-hover:stroke-black"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                            />
                        </svg>
                        <span className="group-hover:text-black">Logout</span>
                    </button>
                </div>
            )}
        </div>
    );
};
