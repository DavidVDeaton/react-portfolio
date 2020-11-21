import React from 'react';
import './NavBot.css';


function NavBot() {

  return (

    <nav className='navbarBottom navbar fixed-bottom'>
      <ul className='ul1'><a className='color3' href = 'https://www.linkedin.com/in/david-deaton-2970541ab/'>LinkedIn</a></ul>
      <ul className='ulmid'><a className='color3' href = 'https://github.com/DavidVDeaton'>GitHub</a></ul>
      <ul className='ulmid'><a className='color3' href = 'https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:b3070180-9116-476b-91e9-58a60938dce4'>Resume</a></ul>
      <ul className='ulmid color3'>deaton.david88@gmail.com</ul>
      <ul className='ul4 color3'>480.216.7456</ul>
    </nav>

  );
}

export default NavBot;