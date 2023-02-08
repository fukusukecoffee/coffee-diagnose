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
    <Container className="justify-content-center">
    <div class="web-header">
      <div className="p-4">さくらさんにぴったりなコーヒー豆は・・・</div>
      <center><img src="https://fukusukecoffee.com/wp-content/uploads/2022/12/2-1.png" alt="fukusukeblend" width="400px" /></center>
      <div className="p-2"></div>
      <Container fluid className="lh-1">
      <p>定番ブレンド</p>
      <h4>『FUKUSUKE BLEND』</h4>
      <div className="p-2"></div>
      <p>ナッツやチョコレートのような風味に</p><p>ハーブのような清涼感。</p>
      <p>冷めると柑橘のような果実の風味を感じます。</p>
      Taste note : Chocolate, Herbal, Orange
      </Container>
      <div className="p-2"></div>
      <center><div className="d-grid gap-2"><a href ="https://fukusukecoffee.com/product/fukusuke-blend"><Button className="btn-dark btn-lg">くわしく見る</Button></a></div></center>
      <Container className="justify-content-center"><img src="https://fukusukecoffee.com/wp-content/uploads/2023/01/pink-cup.png" height="100"></img></Container>
      <b>＼あなたにおすすめのセットはこちら／</b>
    </div>
    </Container>
  </div>
    </>
  );
}