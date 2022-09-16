import Topbar from "./components/topbar/Topbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import CookieConsent from "react-cookie-consent";
import Home from "./pages/Home/Home";
import Novapagina from "./pages/Nova Pagina/Novapagina";
import Footer2 from "./components/footer2/Footer2";
import Ohospital from "./pages/Ohospital/Ohospital";

function App() {

  return (
    <Router>
      <Topbar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/NovaPagina" element={<Novapagina />} />
        <Route exact path="/OHospital" element={<Ohospital />} />
      </Routes>
      <Footer2 />
      <CookieConsent
        expires={150}>
          Esse Site Usa Cookies.      {/* O que está escrito na barra */}   
      </CookieConsent>

    </Router>
  );
}

export default App;
