import './App.css';
import Carousel from "./components/Carousel/Carousel";
import { demoData } from './data/index';

function App() {
  return (
    <div className="App">
      <Carousel items={demoData} length={4}/>
    </div>
  );
}

export default App;
