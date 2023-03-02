import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

import {AnswerButtonCollection, Back, ClickButton, Generation, NameForm, NextButton, Question, Title} from '../ui-components'
import ComicLightlargeBase from '../ui-components/ComicLightlargeBase';
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";


  export default function CoffeeQ1_1() {
    // const location = useLocation();
    // const passData = location.state.state
    // const q1Value = [];
    // const addQ1Value = [...q1Value,passData];
    return (
    <>
  <div className="App">
    <Container className="justify-content-center"><img src="https://fukusukecoffee.com/wp-content/uploads/2022/08/fukusukecoffee-11-1.png" height="15"></img></Container>
    <Container className="justify-content-center">
    <div className="web-header">
      <div className="p-4">質問：なぜコーヒーが好きですか？</div>
      <center><img src="https://fukusukecoffee.com/wp-content/uploads/2023/02/q11.png" alt="specialty-coffee" width="200px" /></center>
      <div className="p-2"></div>
      <Link to="../coffee-q2"><Button className="btn-light btn-outline-dark p-3">リラックスできるから</Button></Link>
      <div className="p-1"></div>
      <Link to="../coffee-q2"><Button className="btn-light btn-outline-dark p-3">家族や友達との時間を楽しめるから</Button></Link>
      <div className="p-1"></div>
      <Link to="../coffee-q2"><Button className="btn-light btn-outline-dark p-3">こだわりの時間を過ごせるから</Button></Link>
      <div className="p-1"></div>
      <Link to="../coffee-q2"><Button className="btn-light btn-outline-dark p-3">集中できるから</Button></Link>
      <div className="p-2"></div>
      {/* <center><div className="d-grid gap-2"><Link to={`/result`} state={{ state: addQ1Value }}><Button className="btn-dark btn-lg">次へ</Button></Link></div></center> */}
      <Link to={`/`}><Back/></Link>
    <div className="p-4"></div>
    </div>
    </Container>
  </div>
    </>
  );
}