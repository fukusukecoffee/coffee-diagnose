import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

import {Back, NextButton, Qdata, StartButton, Title} from '../ui-components'
import ComicLightlargeBase from '../ui-components/ComicLightlargeBase';
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import { DataStore } from 'aws-amplify';
// import { Questionare } from '../models';


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
        <Container>
            <img src="https://fukusukecoffee.com/wp-content/uploads/2023/01/social-media-card-frame-1.png" alt="tree" />
        </Container>
      </div>
    </div>
    <Back />
      </>
    );
  }