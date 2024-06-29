import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {

  return (
    <div className="bg-richblack-900 h-[100vh] text-white">


      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>


    </div>
  )
}

export default App
