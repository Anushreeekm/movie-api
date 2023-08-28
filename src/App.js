import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import ProtectedRoutes from "./Services/ProtectedRoutes";


const App = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* protected routes */}
      <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
