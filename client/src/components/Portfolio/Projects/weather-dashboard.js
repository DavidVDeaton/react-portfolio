import React from 'react';

function WD() {
  return (
    <div className='cardMarginTop'>
        <h4 className = 'card-title'>
            <a className='color4' id = 'wd' href = 'https://davidvdeaton.github.io/Weather-Dashboard/'>Weather Dashboard</a>
        </h4>
        <p className='color4'>This is a simple weather dashboard that displays the current weather and 5 day forecast of any searched city or zip code.</p>
        <p className='color4'>Features:</p>
        <p className='color4'>Converts zip code to city and displays weather</p>
        <p className='color4'>Saves last searched city or zip code to local storage to automatically populate page when user returns</p>
  </div>
  );
}

export default WD;