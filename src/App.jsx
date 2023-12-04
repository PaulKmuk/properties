import { Routes, Route } from "react-router-dom"
import { Navigate, Footer } from "./components"
import { Home, AboutAs, Contact, Offer } from "./pages"


function App() {

return (
      <div className="relative">
         <Navigate />
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/oferta" element={<Offer />}/>
            <Route path="/o-nas" element={<AboutAs />}/>
            <Route path="/kontakt" element={<Contact />}/>
         </Routes>
         <Footer />
         <Footer />
         <Footer />
         <Footer />
      </div>
   )
}

export default App
