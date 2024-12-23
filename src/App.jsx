import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { Chat } from "./pages/chat";
import { NotFound } from "./pages/notfound";
function App() {
  return (
    <>    

    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

      
    </>
  )
}

export default App
