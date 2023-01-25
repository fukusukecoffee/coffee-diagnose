import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import { Container, NavbarBrand, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Title from '../ui-components/Title';
import { StartButton } from '../ui-components';


export default function Root() {
    return (
    <div className="App">
      <Container className="justify-content-center"><img src="https://fukusukecoffee.com/wp-content/uploads/2022/08/fukusukecoffee-11-1.png" height="15"></img></Container>
      <div className="App-header">
        <Container>
            <img src="https://fukusukecoffee.com/wp-content/uploads/2023/01/pink-cup.png" alt="coffee-cup" />
            <div className="p-4"><center><Title /></center></div>
            <Link to={`que`}><center><StartButton/></center></Link>
        </Container>
        </div>
    </div>
    );
  }
