import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

import {Back, ClickButton, Generation, NameForm, NextButton, Question, Title} from '../ui-components'
import ComicLightlargeBase from '../ui-components/ComicLightlargeBase';
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function que() {
    return (
      <>
    <div className="App">
      <Container className="justify-content-center"><img src="https://fukusukecoffee.com/wp-content/uploads/2022/08/fukusukecoffee-11-1.png" height="15"></img></Container>
      <Container className="justify-content-center">
      <div class="web-header">
        <div className="p-4">お名前(ニックネーム)</div>
        <input class="form-control" type="text" placeholder="" aria-label="default input example"></input>
        <div className="p-4">性別</div>
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
        <div className="p-4">年代</div>
        <div class="row justify-content-center p-4" >
            <div class="col-3">
              <Button className="btn-light btn-outline-dark">10代</Button>
            </div>
            <div class="col-3">
              <Button className="btn-light btn-outline-dark">20代</Button>
            </div>
            <div class="col-3">
              <Button className="btn-light btn-outline-dark">30代</Button>
            </div>
          </div>
          <div class="row justify-content-center p-4" >
            <div class="col-3">
              <Button className="btn-light btn-outline-dark">40代</Button>
            </div>
            <div class="col-3">
              <Button className="btn-light btn-outline-dark">50代</Button>
            </div>
            <div class="col-3">
              <Button className="btn-light btn-outline-dark">60代</Button>
            </div>
          </div>
          <div class="row justify-content-center p-4" >
            <div class="col-3">
              <Button className="btn-light btn-outline-dark">70代</Button>
            </div>
            <div class="col-4">
              <Button className="btn-light btn-outline-dark">80代以上</Button>
            </div>
          </div>
          <div class="p-2"></div>
        <center><div className="d-grid gap-2 col-4 mx-4"><Link to={`/coffee-q1`}><Button className="btn-dark btn-lg">次へ</Button></Link></div></center>
        <Link to={`/`}><Back/></Link>
      <div class="p-4"></div>
      </div>
      </Container>
    </div>
      </>
    );
  }