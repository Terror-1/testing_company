import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
function ContactUs() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('contactus.titles')}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className='contact-us'>
        <div className='container contact-us__container'>
          <h2 className='fw-bolder text-center mt-5 text-light'>{t('contactus.title')}</h2>
          <div className='d-flex justify-content-center '>
          </div>
          <div className='d-flex  align-items-center '>
              <img src='/images/location.png' width={"30px"}/>
            <h4 className='text-light mt-3 ms-3'>{t('contactus.addressno')}</h4>
          </div>
          <hr className='white-line'/>

          <div className='d-flex  align-items-center '>
              <img src='/images/mail.png' width={"30px"}/>
              <h5 className='text-light mt-3 ms-3'>{t('contactus.emailaddress')}</h5>
          </div>
          <hr className='white-line'/>

          <div className='d-flex  align-items-center '>
              <img src='/images/phone.png' width={"30px"}/>
            <h5 className='text-light mt-3 ms-3'>{t('contactus.phoneno')}</h5>
          </div>
          <hr className='white-line'/>
          <div>
            <h4 className='fw-bolder text-light'>{t('contactus.mail')}</h4>
            <a href='mailto:Marinetop2.services@gmail.com' className='text-light'>{t('contactus.emailaddress')}</a>
            <a href='mailto:bosaty2013@gmail.com' className='d-block text-light'>{t('contactus.emailaddress2')}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
