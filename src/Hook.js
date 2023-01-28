import  { useState } from "react";
export const GetFormValue = () => {
  const [text, setText] = useState('')
  return(
    <>
      <div className="p-4">お名前(ニックネーム)</div>
      <input class="form-control" type="text" value={text} onChange={(event) => setText(event.target.value)}   placeholder="" aria-label="default input example"></input>
    </>
  )
};

export default GetFormValue;