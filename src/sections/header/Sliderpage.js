import "./Sliderpage.css";


function Sliderpage({ slides, current }) {


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (

        <div>

            {
                slides.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'}>
                            {
                                index === current && (
                                    <div className="rotate">
                                        <img src={slides[current].regular} alt="shubham" className="imageL" />
                                        <img src={slides[(current + 1) % slides.length].regular} alt="shubham" className="image" />
                                        <img src={slides[(current + 2) % slides.length].regular} alt="shubham" className="imageR" />
                                    </div>
                                )
                            }
                        </div>
                    );
                })
            }
        </div>


    )
}
export default Sliderpage;
