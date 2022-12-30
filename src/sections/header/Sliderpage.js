import TagOptions from "../nav/TagOptions";
import "./Sliderpage.css";
import { reg } from "../../Components/Image"
import { useState } from "react";

console.log("shubham", reg.regular);


function Sliderpage({ slides }) {

    const [current, setCurrent] = useState(0);
    const lenth = reg.length;

    const next = () => {
        setCurrent(current === lenth - 1 ? 0 : current + 1);
    };
    const prev = () => {
        setCurrent(current === 0 ? lenth - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="container">
            <TagOptions />
            <div className="contener">
                <div className="btn">
                    <a href="#" className="prev" onClick={prev}>&#10094;</a>
                    <a href="#" className="next" onClick={next}>&#10095;</a>
                </div>
                {reg.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'}
                        >{
                                index === current && (

                                    <img src={slide.regular} alt="shubham" width="1090px" />
                                )
                            }
                        </div>
                    );
                })}

            </div>
        </section>
    )
}
export default Sliderpage;
