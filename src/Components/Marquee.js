import React from 'react';
import Marquee from 'react-fast-marquee';
import "./style.css";

function MarqueeComponent() { 
  return (
    <>
      <div className="marquee-container">
        <Marquee className="marquee__item">
          <img src='/images/Picture1.jpg' alt='Segas Company'/>
          <img src='/images/Picture2.png' alt='Mopco Comapny' />
          <img src='/images/Picture2.jpg' alt='Orascom Company'/>
          <img src='/images/Picture3.png' alt='FMC Company'/>
          <img src='/images/Picture4.jpg' alt='Misray Company'/>
          <img src='/images/Picture5.jpg' alt='Dosal Company'/>
          <img src='/images/Picture6.gif' alt='Enppi Company'/>
          <img src='/images/Picture7.jpg' alt='Gasco Company'/>
          <img src='/images/Picture8.jpg' alt='Power Egypt Company'/>
          <img src='/images/Picture9.png' alt='Egypt Gas Company'/>
          <img src="/images/الشركة-المصرية-للمنتجات-النيتروجيني.webp" />
          <img src='/images/Picture10.png' alt='FMC Company'/>
          <img src='/images/Picture11.jpg' alt='COSMOS Company'/>
          <img src='/images/Picture12.jpg' alt='Power Egypt Company'/>
          <img src='/images/Picture13.jpg' alt='Faster Group Company'/>
          <img src='/images/Picture14.gif' alt='Engineering Group Company '/>
        </Marquee>
      </div>
    </>
  );
}

export default MarqueeComponent;
