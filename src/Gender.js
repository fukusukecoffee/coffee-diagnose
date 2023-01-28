import  { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';

// export const onClick = (e) => {
//     const  GenderElement = document.getElementById('gender_btn')
//     const GenderId = e.currentTarget.value
//     const SetGender = GenderElement.setAttribute('name', e.currentTarget.value)
//     console.log(GenderElement)
//  };

export const GetGender = () => {
    const genders  =  [
      { id: 1, name: '男性' },
      { id: 2, name: '女性' },
      { id: 3, name: 'その他'}
    ]

const onClick = (e) => {
  console.log(e)
  const  GenderElement = document.getElementById(e.currentTarget.value)
  const SetGender = GenderElement.setAttribute('name', e.currentTarget.value)
};

    // const onClick = (e) => {
    //  const GenderId = e.currentTarget.value
    // };

    return(
      <>
        <div className="p-4">性別</div>
          <Container className="p-4">
            <div class="row justify-content-center" >
              {
                genders.map( (gender, index) => (
                  <div class="col-3" key={index}>
                    {/* <Button onClick={(e) => setGender(e.target.value)} value={gender.id}  className="btn-light btn-outline-dark p-3">
                      {gender.name}
                    </Button> */}
                      <Button onClick={onClick} value={gender.id} className="btn-light btn-outline-dark p-3" id={gender.id}>
                      {gender.name}
                    </Button>
                  </div>
              ))
              }
            </div>
          </Container>
      </>
    )
  };
  export default GetGender();