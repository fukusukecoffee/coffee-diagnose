import  { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Button } from 'react-bootstrap';

export const GetGender = () => {
  const genders  =  [
    { id: 1, name: '男性' },
    { id: 2, name: '女性' },
    { id: 3, name: 'その他'}
  ]

  const onClick = (e) => {
    const  GenderElement = document.getElementById('gender_btn')
    const eventNum = e.currentTarget.value
    const setGender = GenderElement.setAttribute('name', eventNum )
  };


    return(
      <>
        {
          genders.map( (gender, index) => (
            <div class="col-3" key={index}>
              <Button onClick={onClick} value={gender.id} className="btn-light btn-outline-dark p-3" id="gender_btn">
                  {gender.name}
              </Button>
            </div>
          ))
        }
      </>
    )
  };
  export default GetGender();