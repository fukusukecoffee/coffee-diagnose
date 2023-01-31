import  { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";



export const GetValue = () => {
  // useStateの初期値('')がtextに入る
  // setTextは値を更新する際に呼び出す
  const [text, setText] = useState('');

  // const ages = [{
  //   id: 1,
  //   id: 2,
  //   id: 3,
  //   id: 4,
  //   id: 5,
  //   id: 6,
  //   id: 7,
  //   id: 8
  // }]
  // const formValue = text.props.children.props.value
  return (
    <>
      <input class="form-control" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="" aria-label="default input example"></input>
    </>
  );
}



