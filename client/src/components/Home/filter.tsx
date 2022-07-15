import React from 'react';
import {useNavigate  } from "react-router-dom";
import "./styles.css";
const Filter = () => {
    const naviagate: any = useNavigate();
    const [text, setText] = React.useState<any>("");
     React.useEffect(() => {
       const listener = (event: any) => {
         if (event.code === "Enter" || event.code === "NumpadEnter") {
           event.preventDefault();
           naviagate(`/filter/${text}`);
         }
       };
       document.addEventListener("keydown", listener);
       return () => {
         document.removeEventListener("keydown", listener);
       };
     }, [text, naviagate]);
  return (
    <div>
      <input
        className="input"
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search by status here"
      />
    </div>
  );
}

export default Filter