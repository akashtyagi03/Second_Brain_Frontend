import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { useState } from "react"

// add landing page for signup and login, 
// add logout button in dashboard page
// add share button functionality and add more thing like copy to clipboard and many more.
// add profile page to change password and username

function App() {
  const [hash, setHash] = useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Dashboard" element={<Dashboard hash={hash} setHash={setHash} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
