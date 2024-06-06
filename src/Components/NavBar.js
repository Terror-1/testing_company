import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t } = useTranslation(); // Initialize the useTranslation hook

  const [language, setLanguage] = useState(i18next.language);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en'; // Toggle between 'en' and 'ar' languages
    i18next.changeLanguage(newLanguage); // Change the language using i18next
    setLanguage(newLanguage); // Update the local state with the new language
  };

  return (
    <div>
      <Navbar expand="sm" className='navBar fixed-top'> 
        <Navbar.Brand href='/' className=''>
          <img src='/images/logo.jpg' className='ms-3' width={"100px"} height={"90px"} alt="Company Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle className='me-3' />
        <Navbar.Collapse className="justify-content-end">
          <ul className='list me-5'>
            <li><Link to='/' className='a'>{t('navbar.home')}</Link></li>
            <li><Link to='/OurClients' className='a'>{t('navbar.clients')}</Link></li>
            <li><Link to='/AboutUs' className='a'>{t('navbar.aboutUs')}</Link></li>
            <li><Link to='/ContactUs' className='a'>{t('navbar.contactUs')}</Link></li>
          </ul>
          <div className='me-3 translation'>
            <button className='language-btn' onClick={toggleLanguage}>
              <img src='/images/240_F_153849311_YjxgR3ARwCYDxPdMGtqvJVNf3QSELokk.jpg' width={"50px"} alt="Language Icon" />
            </button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;
