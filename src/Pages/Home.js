import React from 'react';
import MarqueeComponen from '../Components/Marquee';
import Header from '../Components/Header';
import Scope from '../Components/ScopeOfWorks';
import OurVision from '../Components/OurVision';
function Home() {
  return (
    <div>
      <Header/>
      <OurVision/>
      <Scope/>
      <MarqueeComponen/>
    </div>
  )
}
export default Home;