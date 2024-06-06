import React from 'react';
import { Row , Col ,Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';
import i18n from 'i18next'; // Import i18n instance
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import "./style.css";

function Footer() {
  const { t } = useTranslation(); // Initialize the useTranslation hook
  useEffect(() => {
    // Set direction attribute of .contact-us element based on the language
    const fooerElement = document.querySelector('.footer');
    if (fooerElement) {
      fooerElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [i18n.language]);
  return (
    <>
      <div className='footer'>
        <Row sm={1} md={2} lg={4}  className='w-75'>
          <div>
          <Col>
            <div>
              <h2 className='fw-bolder'>{t('footer.contactusTitle')}</h2>
              <div className='d-flex align-items-center '>
                <img src='/images/location.png' width={"20px"}/>
                <p className='mt-4 me-2'> {t('footer.contactusLocation')}</p>
              </div>
              <div className='d-flex align-items-center '>
                <img src='/images/mail.png' width={"20px"}/>
                <p className='mt-3 me-2'>{t('footer.contactusMail')}</p>
              </div>
              <div className='d-flex align-items-center '>
                <img src='/images/phone.png' width={"20px"}/>
                <p className='mt-3 me-2'>{t('footer.contactusPhone')}</p>
              </div>
            </div>
          </Col>
          </div>
          <div>
          <Col >
            <h2 className='fw-bolder'>{t('footer.information')}</h2>
            <p className='mt-4'>{t('footer.information1')}</p>
            <p>{t('footer.information2')}</p>
            <p>{t('footer.information3')}</p>
            <p>{t('footer.information5')}</p>
            <p>{t('footer.information6')}</p>
          </Col>
          </div>
          
          <div>
          <Col>
            <h2 className='fw-bolder'>{t('footer.Account')}</h2>
            <p className='mt-3'>{t('footer.AccountSearch')}</p>
            <p>{t('footer.AccountInfo')}</p>
            <p>{t('footer.AccountInstructions')}</p>
            <p>{t('footer.AccountConatactus')}</p>
            <p>{t('footer.AccountChart')}</p>
          </Col>
          </div>
          
          <div>
          <Col>
            <h2 className='fw-bolder'>{t('footer.company')}</h2>
            <p className='mt-4'>{t('footer.comapnyLlist')}</p>
            <p>{t('footer.companyNote')}</p>
            <p>{t('footer.companyPrice')}</p>
            <p>{t('footer.companyAds')}</p>
            <p>{t('footer.companyInner')}</p>
          </Col>
          </div>

        </Row>

        <div className='mt-5 w-100 copy-rights p-3 d-flex  justify-content-center '>
          <h5 className=' pt-3 text-center '>{t('footer.copyright')}</h5>
        </div>
      </div>
    </>
  )
}

export default Footer;