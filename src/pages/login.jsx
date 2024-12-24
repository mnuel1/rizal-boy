import React, { useState } from "react";
import { supabase } from "../supabase"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
      
    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
  
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast("success", "Login Successfull")
        navigate("/login")
      } catch (error) {
        setError("");
        toast("error", error.message)
      } finally {
        setLoading(false);
      }
    };
  
    const handleGoogleLogin = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "google",
        });
        if (error) throw error;        
      } catch (error) {
        setError("");
        toast("error", error.message)
      } finally {
        setLoading(false);
        toast("success", "Login Successfull")
      }
    };
  
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <div className="max-w-2xl flex flex-col p-6">        
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Welcome Back!
                </h1>
                <form
                    onSubmit={handleLogin}                      
                >
                    {error && (
                        <p className="text-red-500 text-sm mb-4">
                        {error}
                        </p>
                    )}
                    <div className="mb-4">
                        <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-sm w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-sm w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                        required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full p-3 rounded-lg text-black text-sm font-semibold ${
                        loading
                            ? "bg-[#89D9F2] cursor-not-allowed"
                            : "bg-[#89D9F2] hover:bg-[#6bbbd4] transition"
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Authenticating..." : "Login"}
                    </button>

                    <div className="mt-2 text-black text-sm text-center 
                    text-gray-500 w-full">Don't have an account yet? 
                    <a href="/signup" className="text-blue-400"> Sign up now</a>
                    
                    </div>
                </form>
                <div className="flex items-center my-4">
                    <hr className="bg-gray-400 w-full h-[2px]" />
                    <p className="mx-4 text-gray-500 text-sm">or</p>
                    <hr className="bg-gray-400 w-full h-[2px]" />
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="flex justify-center items-center gap-2 w-80 p-3 border border-red-500 
                    text-black rounded-lg hover:bg-red-600 hover:text-white transition text-sm font-semibold"
                    disabled={loading}
                    >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII=" 
                    alt="google-logo" width={32}/>
                    {loading ? "Redirecting to Google..." : "Continue with Google"}
                </button>
                </div>
        </div>
    );
  };