import { Routes, Route } from "react-router-dom"
import { Navigate, Footer } from "./components"
import { Home, AboutAs, Contact, Offer, PropertiesBuy } from "./pages"


function App() {

return (
      <div className="relative">
         <Navigate />
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/nieruchomosci" element={<PropertiesBuy />}/>
            <Route path="/oferta" element={<Offer />}/>
            <Route path="/o-nas" element={<AboutAs />}/>
            <Route path="/kontakt" element={<Contact />}/>
         </Routes>
         <Footer />
      </div>
   )
}

export default App
