import React from "react";
import NavTop from '../components/NavTop';
import NavBot from '../components/NavBottom';
import Carousel from '../components/Portfolio/carousel';

function Portfolio() {
    return (
        <div className='suns'>
        <NavTop />
        <div className='mainContainer'>
            <Carousel />
        </div>
        <NavBot />
      </div>
    );
}
  
export default Portfolio;