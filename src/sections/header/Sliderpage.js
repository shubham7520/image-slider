import "./Sliderpage.css";


function Sliderpage({ slides, current, sliderClassName }) {


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (

        <div>

            {
                slides.map((slide, index) => {
                    return (
                        <div key={slide.id} className={index === current ? 'slide active' : sliderClassName}>
                            {
                                index === current && (
                                    <div className="rotate">
                                        {console.log("lenth", slides.length)}
                                        <img src={slides[current].webformatURL} alt="shubham" className="imageL" />
                                        <img src={slides[(current + 1) % slides.length].webformatURL} alt="shubham" className="image" />
                                        <img src={slides[(current + 2) % slides.length].webformatURL} alt="shubham" className="imageR" />
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
