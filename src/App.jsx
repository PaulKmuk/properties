import { Routes, Route } from "react-router-dom"
import { Navigate, Footer } from "./components"
import Home from "./pages/Home"


function App() {

return (
      <div className="relative">
         <Navigate />
         <Routes>
            <Route path="/" element={<Home />}/>
         </Routes>
         <Footer />
      </div>
   )
}

export default App
