import './App.css';
import {Title} from './ui-components'
import ComicLightlargeBase from './ui-components/ComicLightlargeBase';
import { Container, NavbarBrand, Navbar } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Home />
      </Route>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="App">
      <Navbar className="justify-content-end">
        <NavbarBrand>
          <Container><img src="https://fukusukecoffee.com/wp-content/uploads/2022/08/fukusukecoffee-11-1.png" height="15"></img></Container>
        </NavbarBrand>
      </Navbar>
      <header className="App-header">
        <img src="https://fukusukecoffee.com/wp-content/uploads/2023/01/pink-cup.png" alt="coffee-cup" />
        <Title />
        <ComicLightlargeBase>hello</ComicLightlargeBase>
      </header>
    </div>
  );
}

function Person() {
  return <h2>あなたについて教えてください。</h2>;
}

function Question1() {
  return <h2>質問１：</h2>;
}

function Result() {
  return <h2>あなたにおすすめのコーヒーは・・・</h2>;
}

export default App;
