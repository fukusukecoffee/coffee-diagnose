import  { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Button } from 'react-bootstrap';

export function GetGender() {
  const genders = [
    { id: 1, name: '男性' },
    { id: 2, name: '女性' },
    { id: 3, name: 'その他' }
  ];

  const [gender, setGender] = useState('');
  return (
    <>
      {genders.map((gen, index) => (
        <div className="col-3" key={ index }>
          <Button onClick={(e) => setGender(e.currentTarget.value)}  value={ gen.id } className="btn-light btn-outline-dark p-3">
            {gen.name}
          </Button>
        </div>
      ))}
      <input type="hidden"  value={ `${ gender }` ? `${ gender }` : 0 }></input>
    </>
  );
}