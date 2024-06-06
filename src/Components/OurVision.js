import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import i18n from 'i18next'; // Import i18n instance
import { Row ,Col} from 'react-bootstrap';
import "./style.css";
function OurVision() {
  const { t, i18n } = useTranslation(); // Initialize the useTranslation hook
  useEffect(() => {
    // Set direction attribute of .contact-us element based on the language
    const visionElement = document.querySelector('.par');
    if (visionElement) {
      visionElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [i18n.language]);

  return (
    <div className='vision'>
      <Row sm={1} md={1} lg={2} className='g-4 m-5 ourvision' align="center">
        <div className=''>
          <Col className='d-flex'>
            <div className='vision__item1'>
              <h4 className='fw-bolder'>{t('ourvision.vision')}</h4>
              <hr className='hr2'/>
              <p className='w-75'>{t('ourvision.visionpar')}</p>
            </div>
          </Col>
        </div>

        <div>
          <Col>
            <div className='vision__item2'>
              <h4 className='fw-bolder'>{t('ourgoal.goal')}</h4>
              <hr className='hr2'/>
              <p className='w-75'>{t('ourgoal.goalpar')}</p>
            </div>
          </Col>
        </div>
      </Row>
    </div>
  )
}

export default OurVision;
