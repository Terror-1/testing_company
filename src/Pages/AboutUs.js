import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import "./stylePage.css";

function AboutUs() {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + 3, images.length - 3)); // Adjusted to ensure at least three images displayed
  };

  const handlePrevious = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - 3, 0));
  };

  const images = [
    { path: '/images/gas.jpg', text: t('aboutUs.servicesp1') },
    { path: '/images/workers.jpg', text: t('aboutUs.servicesp2') },
    { path: '/images/under.jpg', text: t('aboutUs.servicesp3') },
    { path: '/images/work6.jpg', text: t('aboutUs.servicesp4') },
    { path: '/images/equ.jpg', text: t('aboutUs.servicesp5') },
    { path: '/images/work9.jpg', text: t('aboutUs.servicesp6') },
    { path: '/images/chemicals.jpg', text: t('aboutUs.servicesp7') },
    { path: '/images/work7.jpg', text: t('aboutUs.servicesp8') },
    { path: '/images/towers.jpg', text: t('aboutUs.servicesp9') },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('aboutUs.title1')}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className='about-us'>
        <h1 className=' mt-5 text-center fw-bolder'>{t('aboutUs.title')}</h1>
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <hr className='hr'/>
        </div>

        <Row sm={1} md={1} lg={1} className='g-4 m-1'>
          <Col className='first d-flex justify-content-center  '>
            <h5 className=' text-dark w-75 '>
            <span className='fw-bolder fs-4 '>{t('aboutUs.name') }</span> {t('aboutUs.content')}
            </h5>
          </Col>
        </Row>

        <div className='our-work '>
          <h2 className='mt-5 text-center fw-bolder pt-5  '>{t('aboutUs.servicesTitle')}</h2>
          <div className='d-flex flex-column align-items-center  justify-content-center '>
            <hr className='hr1'/>
          </div>

          <Row sm={1} md={1} lg={3} className='g-4 m-5 '>
            {images.slice(startIndex, startIndex + 3).map((image, index) => (
              <div key={index} className=''>
                <Col>
                  <div className='containers'>
                    <div className='img-div'>
                      <img src={image.path} className='' alt=''/>
                    </div>
                    <div className="overlay">
                      <div className="text ">
                        <h5 className='text-center'>{image.text}</h5>
                      </div>
                    </div>
                  </div>
                </Col>
              </div>
            ))}
          </Row>
          <div className='d-flex justify-content-between m-3'>
            <button className='ms-5 bg-transparent ' onClick={handlePrevious}><img src='/images/pre.png'/></button>
            <button className='me-5 bg-transparent ' onClick={handleNext}><img src='/images/next.png'/></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutUs;
