import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import i18n from 'i18next'; // Import i18n instance
import { Row ,Col } from 'react-bootstrap';
import "./style.css";

function Scope() {
  const { t, i18n } = useTranslation(); // Initialize the useTranslation hook
  useEffect(() => {
    // Set direction attribute of .contact-us element based on the language
    const workScopeElement = document.querySelector('.workScope');
    if (workScopeElement) {
      workScopeElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [i18n.language]);
  return (
    <>
      <div className='workScope'>
        <h1 className='text-center fw-bolder '>{t('workscope.title')}</h1>
        <div className=' d-flex  justify-content-center '>
          <hr className='hr2'/>
        </div>
        <Row sm={1} md={2} lg={3} className='m-5 g-3'>
          <div className=''>
          <Col>
            <div className='workScope__item'>
              <div className=' d-flex justify-content-center '>
                <img src='/images/Subcontractor.jpg' alt='Subcontractor'/>
              </div>
              <div className=''>
                <h5 className='text-center fw-bolder mt-4 mb-3 '>{t('workScope.item1title')}</h5>
                <p className='p-3'>{t('workScope.item1par')}</p>
              </div>
            </div>
          </Col>
          </div>

          <div>
          <Col>
            <div className='workScope__item'>
              <div className=' d-flex justify-content-center '>
                <img src='/images/Projectpartnership.jpg' alt='Project partnership' />
              </div>
              <h5 className='text-center fw-bolder mt-4 mb-3'>{t('workScope.item2title')}</h5>
              <p className='p-3'>{t('workScope.item2par')}</p>
            </div>
          </Col>
          </div>
          
          {/* <div>
          <Col>
            <div className='workScope__item'>
              <div className=' d-flex justify-content-center '>
                <img src='/images/Main general contractor.jpg' alt='Main general contractor' />
              </div>
              <h5 className='text-center fw-bolder mt-4 mb-3 '>{t('workScope.item3title')}</h5>
              <p className='p-3'>{t('workScope.item3par')}</p>
            </div>
          </Col>
          </div>
         */}
          <div>
          <Col>
            <div className='workScope__item'>
              <div className=' d-flex justify-content-center '>
                <img src='/images/Franchise areas.jpg' alt='Franchise areas' />
              </div>
              <h5 className='text-center fw-bolder mt-4 mb-3 '>{t('workScope.item4title')}</h5>
              <p className='p-3'>{t('workScope.item4par')}</p>
            </div>
          </Col>
          </div>
        </Row>
    </div>
    </>
  );
}
export default Scope;