import React from 'react';
import { useForm } from 'react-hook-form';
import que  from './que.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

import {AnswerButtonCollection, Back, ClickButton, Generation, NameForm, NextButton, Question, Title} from '../ui-components'
import ComicLightlargeBase from '../ui-components/ComicLightlargeBase';
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";


  export default function CoffeeQ4() {
    // const location = useLocation();
    // const passData = location.state.state
    // const q1Value = [];
    // const addQ1Value = [...q1Value,passData];
    // console.log(addQ1Value)
    return (
    <>
  <div className="App">
    <Container className="justify-content-center"><img src="https://fukusukecoffee.com/wp-content/uploads/2022/08/fukusukecoffee-11-1.png" height="15"></img></Container>
    <Container className="justify-content-center">
    <div class="web-header">
      <div className="p-4">質問：スペシャルティコーヒーを知っていますか？</div>
      <center><img src="https://fukusukecoffee.com/wp-content/uploads/2023/01/social-media-card-frame-1.png" alt="specialty-coffee" width="200px" /></center>
      <div class="p-2"></div>
      <Link to="../coffee-q4_1"><Button className="btn-light btn-outline-dark p-3">はい、よく飲みます</Button></Link>
      <div class="p-1"></div>
      <Link to="../coffee-q4_1"><Button className="btn-light btn-outline-dark p-3">はい、飲んだことはあります</Button></Link>
      <div class="p-1"></div>
      <Link to="../coffee-q4_2"><Button className="btn-light btn-outline-dark p-3">はい、聞いたことはあります</Button></Link>
      <div class="p-1"></div>
      <Link to="../coffee-q4_2"><Button className="btn-light btn-outline-dark p-3">いいえ、知りません</Button></Link>
      <div class="p-1"></div>
      <div class="p-2"></div>
      {/* <center><div className="d-grid gap-2"><Link to={`/result`} state={{ state: addQ1Value }}><Button className="btn-dark btn-lg">次へ</Button></Link></div></center> */}
      <Link to={`/`}><Back/></Link>
    <div class="p-4"></div>
    </div>
    </Container>
  </div>
    </>
  );
}