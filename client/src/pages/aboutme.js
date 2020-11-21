import React from "react";
import NavTop from '../components/NavTop';
import NavBot from '../components/NavBottom';
import './style.css';

function About() {
    return (
      <div className='suns'>
        <NavTop />
        <div className='mainContainer'>
            <div className = 'group'>
                <div className ='left'>  
                    <img className = "family" src = "https://static.showit.co/800/bAOJGrueTgaQQZnL7v11GQ/107363/cdc-_deaton_family_2020-017.jpg" alt = "Deaton Family Picture"/>
                </div>
                <div className='right'>
                    <p className='color4'> My passions are faith, family, sports and coding.  I am an enthusiastic learner and have really enjoyed writing code.  I have started developoing in a few coding languages including: html, css and JavaScript.  I have worked with GitHub, APIs, NodeJS, React, Sequilize, MongoDB and used both Bootstrap and Foundation when designing the layout of my projects. I pride myself on being a hard worker and dedicated student.</p>
                    <p className='color4'>I am currently searching for employment or an internship as a developer. I believe my general demenor and skills would make me a valuable asset to many companies. Please check out my <a id = "resume" href = "https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:b3070180-9116-476b-91e9-58a60938dce4">resume</a> and feel free to contact me.</p>
                </div>
            </div>
        </div>
        <NavBot />
      </div>
    );
}
  
export default About;