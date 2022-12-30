import './App.css';
import Sliderpage from './sections/header/Sliderpage';
import { reg } from './Components/Image';
function App() {
  return (
    <div className="App">
      <Sliderpage slides={reg} />
    </div>
  );
}

export default App;
