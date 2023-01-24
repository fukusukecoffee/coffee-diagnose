import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

import {ClickButton, Generation, NameForm, NextButton, Question, Title} from '../ui-components'
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
      <div class="web-header">
        <div className="p-4">お名前</div>
        <input class="form-control" type="text" placeholder="Default input" aria-label="default input example"></input>
        <div className="p-4"><Question></Question></div>
      <Container className="p-4">
        <div class="row justify-content-center" >
          <div class="col-3">
            <Button className="btn-light btn-outline-dark">男性</Button>
          </div>
          <div class="col-3">
            <Button className="btn-light btn-outline-dark">女性</Button>
          </div>
          <div class="col-3">
            <Button className="btn-light btn-outline-dark">その他</Button>
          </div>
        </div>
      </Container>
      <div className="p-4"><Generation></Generation></div>
      <div class="row justify-content-center" >
          <div class="col-3">
            <Button className="btn-light btn-outline-dark">男性</Button>
          </div>
          <div class="col-3">
            <Button className="btn-light btn-outline-dark">女性</Button>
          </div>
          <div class="col-3">
            <Button className="btn-light btn-outline-dark">その他</Button>
          </div>
        </div>
        <div class="row justify-content-center" >
          <div class="col-3">
            <Button className="btn-light btn-outline-dark">男性</Button>
          </div>
          <div class="col-3">
            <Button className="btn-light btn-outline-dark">女性</Button>
          </div>
          <div class="col-3">
            <Button className="btn-light btn-outline-dark">その他</Button>
          </div>
        </div>
      <center><div className="d-grid gap-2 col-4 mx-4"><Button className="btn-dark btn-lg">次へ</Button></div></center>

      </div>
      </div>
      </>
    );
  }