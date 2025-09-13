import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"

// add landing page for signup and signin, 
// add logout button in dashboard page
// add share button functionality and add more thing like copy to clipboard and many more.
// add profile page to change password and username

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
