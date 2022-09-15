import Topbar from "./components/topbar/Topbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// import CarouselFade from "./components/carrocel/Carrocel";
// import Footer from "./components/footer/Footer";
import CookieConsent from "react-cookie-consent";
import Home from "./pages/Home/Home";
import Novapagina from "./pages/Nova Pagina/Novapagina";
import Footer2 from "./components/footer2/Footer2";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/NovaPagina" element={<Novapagina />} />
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
