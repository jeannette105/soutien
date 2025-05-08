import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Composant/Accueil";
import Propos from "./Composant/Propos"; 
import Navbar from "./Composant/Navbar";
import Services from "./Composant/Services";
import Coiffure from "./Composant/Coiffure";
import Hotel from "./Composant/Hotel";
import Resto from "./Composant/Resto";
import Photo from "./Composant/Photo";
import Offres from "./Composant/Offres";
import Social from "./Composant/Social";
import Student from "./Composant/Student";
import Contact from "./Composant/Contact";
import Client from "./Composant/client";
import Prestataire from "./Composant/prestataire";
import Pres from "./Composant/Pres";
import Cli from "./Composant/Cli";
import Footer from "./Composant/Footer";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Accueil />} /> 
            <Route path="/propos" element={<Propos />} />
            <Route path="/services/couture" element={<Services />} />
            <Route path="/services/coiffure" element={<Coiffure />} />
            <Route path="/services/hotel" element={<Hotel />} />
            <Route path="/services/restauration" element={<Resto />} />
            <Route path="/services/photographie" element={<Photo />} />
            <Route path="/offres/Event Pro" element={<Offres />} />
            <Route path="/offres/Event Social" element={<Social />} />
            <Route path="/offres/Event Student" element={<Student />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inscription/client" element={<Client />} />
            <Route path="/inscription/prestataire" element={<Prestataire />} />
            <Route path="/connexion/prestataire" element={<Pres />} />
            <Route path="/connexion/client" element={<Cli />} />
          </Routes>
        </div>
        <Footer/> 
      </div>
    </Router>
  );
}
