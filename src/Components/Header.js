import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from 'react';
import i18n from 'i18next'; // Import i18n instance
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation(); // Initialize the useTranslation hook
  useEffect(() => {
    // Set direction attribute of .contact-us element based on the language
    const headerElement = document.querySelector('.footer');
    if (headerElement) {
      headerElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [i18n.language]);
  return (
    <>
    <div className='header'>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/headre1.avif" className="d-block w-100" alt="header__img1" />
            <div className='abs-text'>
              <h2 className=' drop-in-2 text-center fw-bolder text-light w-50'>{t('header.title')}</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/2.jpg" className="d-block w-100" alt="header__img2" />
            <div className='abs-text'>
              <h2 className='drop-in-2 text-center fw-bolder text-light w-50'>{t('header.title')}</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/1.jpg" className="d-block w-100" alt="header__img3" />
            <div className='abs-text'>
              <h2 className='drop-in-2 text-center fw-bolder text-light w-50'>{t('header.title')}</h2>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  );
}

export default Header;
