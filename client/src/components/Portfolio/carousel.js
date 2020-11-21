import React, { useState } from 'react';
import DND from './Projects/dnd';
import DP from './Projects/day-planner';
import WD from './Projects/weather-dashboard';
import JSQ from './Projects/javascriptquiz';
import ES from './Projects/employee-summary';
import Endless from './Projects/endless';
import DnDImg from '../../img/screenshot_large.png';
import DPImg from '../../img/WorkDayScheduler.png';
import WDImg from '../../img/weatherdashboard.PNG';
import ESImg from '../../img/Homework10Screenshot.PNG';
import JSQImg from '../../img/questions.PNG';
import EndlessImg from '../../img/endlessfantasysports.PNG';

function Carousel() {

    const [active, setActive] = useState(0);
    let one = '';
    let two = '';
    let three = '';
    let four = '';
    let five = '';
    let six = '';

    switch (active) {
        case -6:
            one = 'carousel-item active';
            two = 'carousel-item';
            three = 'carousel-item';
            four = 'carousel-item';
            five = 'carousel-item';
            six = 'carousel-item';
            break;
        case -5:
            one = 'carousel-item';
            two = 'carousel-item active';
            three = 'carousel-item';
            four = 'carousel-item';
            five = 'carousel-item';
            six = 'carousel-item';
            break;
        case -4:
            one = 'carousel-item';
            two = 'carousel-item';
            three = 'carousel-item active';
            four = 'carousel-item';
            five = 'carousel-item';
            six = 'carousel-item';
            break;
        case -3:
            one = 'carousel-item';
            two = 'carousel-item';
            three = 'carousel-item';
            four = 'carousel-item active';
            five = 'carousel-item';
            six = 'carousel-item';
            break;
        case -2:
            one = 'carousel-item';
            two = 'carousel-item';
            three = 'carousel-item';
            four = 'carousel-item';
            five = 'carousel-item active';
            six = 'carousel-item';
            break;
        case -1:
            one = 'carousel-item';
            two = 'carousel-item';
            three = 'carousel-item';
            four = 'carousel-item';
            five = 'carousel-item';
            six = 'carousel-item active';
            break;
        case 0:
            one = 'carousel-item active';
            two = 'carousel-item';
            three = 'carousel-item';
            four = 'carousel-item';
            five = 'carousel-item';
            six = 'carousel-item';
            break;
        case 1:
            one = 'carousel-item';
            two = 'carousel-item active';
            three = 'carousel-item';
            four = 'carousel-item';
            five = 'carousel-item';
            six = 'carousel-item';
            break;
        case 2:
            one = 'carousel-item';
            two = 'carousel-item';
            three = 'carousel-item active';
            four = 'carousel-item';
            five = 'carousel-item';
            six = 'carousel-item';
            break;
        case 3:
            one = 'carousel-item';
            two = 'carousel-item';
            three = 'carousel-item';
            four = 'carousel-item active';
            five = 'carousel-item';
            six = 'carousel-item';
            break;
        case 4:
            one = 'carousel-item';
            two = 'carousel-item';
            three = 'carousel-item';
            four = 'carousel-item';
            five = 'carousel-item active';
            six = 'carousel-item';
            break;
        case 5:
            one = 'carousel-item';
            two = 'carousel-item';
            three = 'carousel-item';
            four = 'carousel-item';
            five = 'carousel-item';
            six = 'carousel-item active';
            break;
        case 6:
            one = 'carousel-item active';
            two = 'carousel-item';
            three = 'carousel-item';
            four = 'carousel-item';
            five = 'carousel-item';
            six = 'carousel-item';
            break;
        case 7:
            one = 'carousel-item';
            two = 'carousel-item active';
            three = 'carousel-item';
            four = 'carousel-item';
            five = 'carousel-item';
            six = 'carousel-item';
            break;
        case 8:
            one = 'carousel-item';
            two = 'carousel-item';
            three = 'carousel-item active';
            four = 'carousel-item';
            five = 'carousel-item';
            six = 'carousel-item';
            break;
        case 9:
            one = 'carousel-item';
            two = 'carousel-item';
            three = 'carousel-item';
            four = 'carousel-item active';
            five = 'carousel-item';
            six = 'carousel-item';
            break;
        case 10:
            one = 'carousel-item';
            two = 'carousel-item';
            three = 'carousel-item';
            four = 'carousel-item';
            five = 'carousel-item active';
            six = 'carousel-item';
            break;
        case 11:
            one = 'carousel-item';
            two = 'carousel-item';
            three = 'carousel-item';
            four = 'carousel-item';
            five = 'carousel-item';
            six = 'carousel-item active';
            break;
        default:
            one = 'carousel-item active';
            two = 'carousel-item';
            three = 'carousel-item';
            four = 'carousel-item';
            five = 'carousel-item';
            six = 'carousel-item';
    }

    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className={one}>
                    <img className="d-block w-100" src={DnDImg} alt="DnD Buddy Screenshot"/>
                    <DND />
                </div>
                <div className={two}>
                    <img className="d-block w-100" src={DPImg} alt="Day Planner Screenshot"/>
                    <DP />
                </div>
                <div className={three}>
                    <img className="d-block w-100" src={WDImg} alt="Weather Dashboard Screenshot"/>
                    <WD />
                </div>
                <div className={four}>
                    <img className="d-block w-100" src={ESImg} alt="Employee Summary Screenshot"/>
                    <ES />
                </div>
                <div className={five}>
                    <img className="d-block w-100" src={JSQImg} alt="JavaScript Quiz Screenshot"/>
                    <JSQ />
                </div>
                <div className={six}>
                    <img className="d-block w-100" src={EndlessImg} alt="Endless Fantasy Sports Screenshot"/>
                    <Endless />
                </div>
            </div>
            <a id='decrease' className="carousel-control-prev" onClick={() => setActive(active-1)}>
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a id='increase' className="carousel-control-next" onClick={() => setActive(active+1)}>
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    );
}

export default Carousel;

