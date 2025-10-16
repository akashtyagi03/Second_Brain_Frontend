import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { useState } from "react"

// add landing page for signup and login, 
// add share button functionality and add more thing like copy to clipboard and many more.

function App() {
  const [hash, setHash] = useState("")
  const [username, setUsername] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup username={username} setUsername={setUsername} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Dashboard" element={<Dashboard hash={hash} setHash={setHash} username={username}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
