import React, { useEffect, useState } from 'react'
import Sliderpage from './sections/header/Sliderpage';
import TagOptions from './sections/nav/TagOptions';
import axios from 'axios';


// import { reg } from './Components/Image';
import "../src/sections/header/Sliderpage.css"

const Main = () => {
    const [current, setCurrent] = useState(0);
    const [sliderClassName, setSliderClassName] = useState("slide");
    const [option, setOption] = useState("nature");
    const [apiData, setApiData] = useState(null);

    const apiCall = async () => {
        const data = await axios.get(`https://pixabay.com/api/?key=32540211-1f1417761a3d62eaa518f7599&q=${option}&image_type=photo`);
        setApiData(data.data.hits);
        // console.log(data.data);
    }

    useEffect(() => {
        apiCall();
    }, [option])



    const next = () => {
        setSliderClassName("slide");
        setCurrent(current === apiData.length - 1 ? 0 : current + 1);
    }
    const prev = () => {
        setSliderClassName("slideL");
        setCurrent(current === 0 ? apiData.length - 1 : current - 1);
    }

    function handleKeyPress(e) {

        if (e.keyCode === 39) {
            setSliderClassName("slide");
            setCurrent(current === apiData.length - 1 ? 0 : current + 1);
        }

        if (e.keyCode === 37) {
            setSliderClassName("slideL");
            setCurrent(current === 0 ? apiData.length - 1 : current - 1);
        }
    }

    return (
        <div className='container'>
            <div tabindex="-1" className='borderImage'>
            </div>
            <TagOptions option={option} setOption={setOption} />
            <div onKeyDownCapture={(e) => handleKeyPress(e)} tabIndex="0" className='adjust'>
                <button autoFocus className='prev' onClickCapture={prev}>&#10094;</button>
                <Sliderpage sliderClassName={sliderClassName} current={current} slides={apiData} />
                <button className='next' onClick={next} >&#10095;</button>
            </div>
        </div>
    )
}

export default Main