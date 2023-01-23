import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

import {Title} from '../ui-components'
import ComicLightlargeBase from '../ui-components/ComicLightlargeBase';
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';

export default function Root() {
    return (
      <>
    <div className="App">
      <Navbar className="justify-content-center">
        <NavbarBrand>
          <Container><img src="https://fukusukecoffee.com/wp-content/uploads/2022/08/fukusukecoffee-11-1.png" height="15"></img></Container>
        </NavbarBrand>
      </Navbar>
      <div className="App-header">
        <Container>
            <img src="https://fukusukecoffee.com/wp-content/uploads/2023/01/pink-cup.png" alt="coffee-cup" />
            <div className="p-4"><center><Title /></center></div>
            <div ><Button className="btn-light btn-outline-dark">コーヒー診断をはじめる</Button></div>
        </Container>
        </div>
    </div>
      </>
    );
  }