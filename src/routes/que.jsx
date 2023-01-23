import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

import {ClickButton, Title} from '../ui-components'
import ComicLightlargeBase from '../ui-components/ComicLightlargeBase';
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';

export default function que() {
    return (
      <>
    <div className="App">
      <Navbar className="justify-content-center">
        <NavbarBrand>
          <Container><img src="https://fukusukecoffee.com/wp-content/uploads/2022/08/fukusukecoffee-11-1.png" height="15"></img></Container>
        </NavbarBrand>
      </Navbar>
      <div className="App-header">

      </div>
    </div>
      </>
    );
  }