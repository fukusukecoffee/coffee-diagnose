import  { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Button } from 'react-bootstrap';

// const genders = [
//   { id: 1, name: '男性' },
//   { id: 2, name: '女性' },
//   { id: 3, name: 'その他' }
// ];

// export const onClick = () => {
//   // const GenderElement = document.getElementById(`gender_btn_${index}`);
//   const GenderElement = document.getElementById('gender_btn');
//   console.log(GenderElement)
//   // return {GenderElement}
//   // const valuedayo = GenderElement.value
// };



export function GetGender() {
  const genders = [
    { id: 1, name: '男性' },
    { id: 2, name: '女性' },
    { id: 3, name: 'その他' }
  ];

  const [gender, setGender] = useState('');

  const onClick = (e) => {
    // const GenderElement = document.getElementById(`gender_btn_${index}`);
    // const GenderElement = document.getElementById('gender_btn');
    const GenderElement = e.target.value
    console.log(GenderElement)
    return {GenderElement}
    // const valuedayo = GenderElement.value
  };

  return (
    <>
      {genders.map((gen, index) => (
        <div class="col-3" key={index}>
          {/* <Button onClick={onClick({index})} value={gen.id} className="btn-light btn-outline-dark p-3" id={`gender_btn_${index}`}> */}
          {/* <Button onClick={onClick} value={gen.id} className="btn-light btn-outline-dark p-3" id={'gender_btn'}> */}
          <Button onClick={onClick} value={gen.id} className="btn-light btn-outline-dark p-3" id={'gender_btn'}>
          {/* <Button onClick={(e) => setGender(e.currentTarget.value)} value={gen.id} className="btn-light btn-outline-dark p-3"> */}
            {gen.name}
          </Button>
        </div>
      ))}
    </>
  );
}


// export function GetGender();