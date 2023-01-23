import './App.css';
import {Title} from './ui-components'
import ComicLightlargeBase from './ui-components/ComicLightlargeBase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://fukusukecoffee.com/wp-content/uploads/2023/01/pink-cup.png" alt="coffee-cup" />
        <Title />
        <ComicLightlargeBase><p>hello</p></ComicLightlargeBase>
      </header>
    </div>
  );
}

export default App;
