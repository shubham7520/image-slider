import "./TagOptions.css"
const TagOptions = ({ setOption, option }) => {
    return (
        <div className="nevbar">
            <button onClick={() => setOption("wallpapers")} className="nevbtn one">Wallpapers</button>
            <button onClick={() => setOption("travel")} className="nevbtn two">Travel</button>
            <button onClick={() => setOption("nature")} className="nevbtn three">Nature</button>
            <button onClick={() => setOption("animal")} className="nevbtn four">Animals</button>
            <button onClick={() => setOption("food and drink")} className="nevbtn five">Food & Drink</button>
        </div>
    )
}

export default TagOptions