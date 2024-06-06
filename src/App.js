import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure you import BrowserRouter as Router
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
import OurClients from './Pages/OurClients';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './Translate/en.json';
import arTranslation from './Translate/ar.json';
import Loader from './Components/Loader';
import { useEffect , useState } from 'react';
// Initialize i18n
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'ar',
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate project loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup function to clear the timeout
  }, []);
  return (
    <Router>
      {loading ? (
        <Loader /> // Show loader while the project is loading
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/OurClients' element={<OurClients />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
