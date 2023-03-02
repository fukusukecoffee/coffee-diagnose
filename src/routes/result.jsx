import React from 'react';
import { useForm } from 'react-hook-form';
import que  from './que.jsx';
import CoffeeQ1  from './coffee-q1';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

import {AnswerButtonCollection, Back, ClickButton, Generation, NameForm, NextButton, Question, Title} from '../ui-components'
import ComicLightlargeBase from '../ui-components/ComicLightlargeBase';
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";


  export default function Result() {
    // const locationSecond = useLocation();
    // const result = locationSecond.state.state
    // console.log(result)
    return (
    <>
  <div className="App">
    <Container className="justify-content-center"><img src="https://fukusukecoffee.com/wp-content/uploads/2022/08/fukusukecoffee-11-1.png" height="15"></img></Container>
    <div className="justify-content-center">
      <div className="container-sm p-4">
        <p>あなたにぴったりなコーヒー豆は・・・</p>
        <center><img src="https://fukusukecoffee.com/wp-content/uploads/2022/12/2-1.png" alt="fukusukeblend" width="400px" /></center>
        <div className="p-2"></div>
        <Container fluid className="lh-1">
          <p>定番ブレンド</p>
          <b className="fs-3">FUKUSUKE BLEND</b>
          <div className="p-2"></div>
          <p>ナッツやチョコレートのような風味にハーブのような清涼感。</p>
          <p>冷めると柑橘のような果実の風味を感じます。</p>
          <div className="p-2"></div>
          <p>Taste note : Chocolate, Herbal, Orange</p>
        </Container>
        <div className="p-2"></div>
        <center><a href ="https://fukusukecoffee.com/product/fukusuke-blend" className="btn btn-dark px-5">購入する</a></center>
      </div>
      {/* <div className="bg-light container-sm">
        <Container className="justify-content-center p-4"><img src="https://fukusukecoffee.com/wp-content/uploads/2023/01/pink-cup.png" height="100"></img></Container>
        <b>＼あなたにおすすめのセット／</b>
        <div className="justify-content-center p-4"><img class="img-fluid" src="https://fukusukecoffee.com/wp-content/uploads/2023/02/DEF3728-scaled.jpg"></img></div>
        <Container className="lh-1 pb-4">
          <b className="fs-3">BLEND 3種セット</b>
          <div className="p-2"></div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item p-3">FUKUSUKE BLEND (100g)</li>
            <li class="list-group-item p-3">SAKURAI BLEND (100g)</li>
            <li class="list-group-item p-3">TENJIN BLEND (100g)</li>
          </ul>
          <div className="p-2"></div>
          <center><div className="d-grid gap-2"><a href ="https://fukusukecoffee.com/product/fukusuke-blend"><Button className="btn-light btn-outline-dark">３種セットを購入する</Button></a></div></center>
        </Container>
      </div> */}
    </div>
  </div>
    </>
  );
}