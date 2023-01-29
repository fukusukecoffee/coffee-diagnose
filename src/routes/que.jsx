import React, { useState } from 'react';
import { GetValue }  from '../Name.js';
import { GetGender }  from '../Gender.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import {Back, ClickButton, Generation, NameForm, NextButton, Question, Title} from '../ui-components'
import ComicLightlargeBase from '../ui-components/ComicLightlargeBase';
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { renderHook } from '@testing-library/react';

export default function que() {
  const form = GetValue();
  const gender = GetGender();
  const formValue = form.props.children.props.value
  const sessionValues = [];
  // スプレッド構文
  const addSessionValues = [...sessionValues,formValue];

  return (
    <>
  <div className="App">
    <Container className="justify-content-center"><img src="https://fukusukecoffee.com/wp-content/uploads/2022/08/fukusukecoffee-11-1.png" height="15"></img></Container>
    <Container className="justify-content-center">
    <div class="web-header">
      <div className="p-4">お名前(ニックネーム)</div>
      { form }
      <div className="p-4">性別</div>
        <Container className="p-4">
          <div class="row justify-content-center" >
            { gender }
          </div>
        </Container>
      <div className="p-4">年代</div>
      <div class="row justify-content-center p-4" >
          <div class="col-3">
            <Button className="btn-light btn-outline-dark p-3">10代</Button>
          </div>
          <div class="col-3">
            <Button className="btn-light btn-outline-dark p-3">20代</Button>
          </div>
          <div class="col-3">
            <Button className="btn-light btn-outline-dark p-3">30代</Button>
          </div>
        </div>
        <div class="row justify-content-center p-4" >
          <div class="col-3">
            <Button className="btn-light btn-outline-dark p-3">40代</Button>
          </div>
          <div class="col-3">
            <Button className="btn-light btn-outline-dark p-3">50代</Button>
          </div>
          <div class="col-3">
            <Button className="btn-light btn-outline-dark p-3">60代</Button>
          </div>
        </div>
        <div class="row justify-content-center p-4" >
          <div class="col-3">
            <Button className="btn-light btn-outline-dark p-3">70代</Button>
          </div>
          <div class="col-4">
            <Button className="btn-light btn-outline-dark p-3">80代以上</Button>
          </div>
        </div>
        <div class="p-2"></div>
      <center><div className="d-grid gap-2"><Link to={`/coffee-q1`}><Button className="btn-dark btn-lg">次へ</Button></Link></div></center>
      <Link to={`/`}><Back/></Link>
    <div class="p-4"></div>
    </div>
    </Container>
  </div>
    </>
  );
}