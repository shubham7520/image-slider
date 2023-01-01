import React, { useState } from 'react'
import Sliderpage from './sections/header/Sliderpage';
import TagOptions from './sections/nav/TagOptions';

import { reg } from './Components/Image';
import "../src/sections/header/Sliderpage.css"

const Main = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current === reg.length - 1 ? 0 : current + 1);
    }
    const prev = () => {
        setCurrent(current === 0 ? reg.length - 1 : current - 1);
    }

    function handleKeyPress(e) {
        console.log("ravindra", e.keyCode);

        if (e.keyCode === 39) {
            setCurrent(current === reg.length - 1 ? 0 : current + 1);
        }

        if (e.keyCode === 37) {

            setCurrent(current === 0 ? reg.length - 1 : current - 1);
        }
    }

    return (
        <div className='container'>
            <div className='borderImage'>
            </div>
            <TagOptions />
            <div onKeyUp={(e) => handleKeyPress(e)} tabIndex="0" className='adjust'>
                <button autoFocus className='prev' onClick={prev}>&#10094;</button>
                <Sliderpage current={current} slides={reg} />
                <button className='next' onClick={next} >&#10095;</button>
            </div>
        </div>
    )
}

export default Main