import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

import {StartButton, Title} from '../ui-components'
import ComicLightlargeBase from '../ui-components/ComicLightlargeBase';
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

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
            <Link to={`que`}><center><StartButton/></center></Link>
            {/* <p className="p-4">診断せずにコーヒーを選ぶ</p> */}
        </Container>
        </div>
    </div>
      </>
    );
  }