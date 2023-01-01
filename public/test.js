import "./Sliderpage.css";


function Sliderpage({ slides, current }) {


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (

        <div>
            <div className="rotate">
                {slides.map(((slide, index) => { return (<img src={slide.regular} alt="shubham" className={slide.className[index % 3]} />) }))
                }
            </div>
        </div>


    )
}
export default Sliderpage;
