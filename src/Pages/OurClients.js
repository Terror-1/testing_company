import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import i18n from "i18next"; // Import i18n instance
import "./stylePage.css";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
function OurClients() {
  const { t, i18n } = useTranslation(); // Initialize the useTranslation hook
  useEffect(() => {
    // Set direction attribute of .contact-us element based on the language
    const ourClientsElement = document.querySelector(".our-clients");
    if (ourClientsElement) {
      ourClientsElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    }
  }, [i18n.language]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("OurClients.titles")}</title> {/* Translate the title */}
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="our-clients">
        <h1 className="text-center fw-bolder  ">{t("OurClients.title")}</h1>
        <div className="d-flex justify-content-center ">
          <hr className="hr" />
        </div>

        <div className="company-list pb-5 ">
          <Row sm={1} md={3} lg={6} className="g-5  w-75 m-auto ">
            <div>
              <Col>
                <a
                  href="https://www.gem.wiki/Damietta_Segas_LNG_Terminal"
                  target="_blank"
                >
                  <img src="/images/Picture1.jpg" />
                </a>
              </Col>
            </div>
            <div>
              <Col>
                <a href=" https://orascom.com/" target="_blank">
                  <img src="/images/logo4.jpg" />
                </a>
              </Col>
            </div>
            <div>
              <Col>
                <a href="https://www.mopco-eg.com/en" target="_blank">
                  <img src="/images/logo.png" />
                </a>
              </Col>
            </div>
            <div>
              <Col>
                <a href="https://energyegypt.net/tag/enpc/" target="_blank">
                  <img src="/images/الشركة-المصرية-للمنتجات-النيتروجيني.webp" />
                </a>
              </Col>
            </div>
            <div>
              <Col>
                <a
                  href="https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9_%D9%84%D9%85%D8%B4%D8%AA%D9%82%D8%A7%D8%AA_%D8%A7%D9%84%D8%BA%D8%A7%D8%B2"
                  target="_blank"
                >
                  <img src="/images/195px-UGDC.jpg" />
                </a>
              </Col>
            </div>
            <div>
              <Col>
                <a href="">
                  <img src="/images/logo2.jpg" />
                </a>
              </Col>
            </div>
            <div>
              <Col>
                <a href="https://www.enppi.com/ " target="_blank">
                  <img src="/images/Picture6.gif" />
                </a>
              </Col>
            </div>
            <div>
              <Col>
                <a href="https://www.gasco.com.eg/" target="_blank">
                  <img src="/images/Logo-color-variations-09.png" />
                </a>
              </Col>
            </div>
            <div>
              <Col>
                <a
                  href="https://www.osman.net/og/misraymond.php"
                  target="_blank"
                >
                  <img src="/images/Picture4.jpg" />
                </a>
              </Col>
            </div>

            <div>
              <Col>
                <a href="https://www.egyptgas.com.eg/ " target="_blank">
                  <img src="/images/Picture5.png" />
                </a>
              </Col>
            </div>
            <div>
              <Col>
                <a href="https://ferrometalco.com/" target="_blank">
                  <img src="/images/Picture10.png" />
                </a>
              </Col>
            </div>
            <div>
              <Col>
                <a href="http://cosmos-eng.com/" target="_blank">
                  <img src="/images/Picture11.jpg" />
                </a>
              </Col>
            </div>
            <div>
              <Col>
                <a
                  href="https://www.facebook.com/eng.mohamed.bisher.eleraky/"
                  target="_blank"
                >
                  <img src="/images/Picture8.jpg" />
                </a>
              </Col>
            </div>
            <div>
              <Col>
                <a href="">
                  <img src="/images/Picture6.jpg" />
                </a>
              </Col>
            </div>

            <div>
              <Col>
                <a href="http://www.egegypt.org/Ar/" target="_blank">
                  <img src="/images/Picture7.gif" />
                </a>
              </Col>
            </div>

            <div>
              <Col>
                <a href="">
                  <img src="/images/logo1.jpg" />
                </a>
              </Col>
            </div>

            <div>
              <Col>
                <a href="">
                  <img src="/images/logo3.jpg" />
                </a>
              </Col>
            </div>

            <div>
              <Col>
                <a href="">
                  <img src="/images/logo5.jpg" />
                </a>
              </Col>
            </div>
          </Row>
        </div>
        <div className="d-flex justify-content-center">
          <hr className=" w-75"/>
        </div>
        <div className="w-75 m-auto  mt-4 mb-4">
          <Row sm={1} md={1} lg={1}>
            <Col>
              <h5 className="OurClients__h5">{t("OurClients.content")}</h5>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default OurClients;