import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const Select = () => {
    const [option] = React.useState<Array<any>>([
        { id: 0, staus: "----------" },
        { id: 1, staus: "pending" },
        { id: 2, staus: "successful" },
        { id: 3, staus: "failed" },
    ]);
    const [text, setText] = React.useState<string>("");
    const naviagate: any = useNavigate();
    
    const handleChange = (value: string, selectOptionSetter: any) => {
        selectOptionSetter(value);
        naviagate(`/filter/${value}`);
    };
  return (
    <div>
      <select
        className="select"
        value={text}
        onChange={(e) => handleChange(e.target.value, setText)}
      >
        {option.map((item) => (
          <option key={item.id} value={item.staus}>
            {item.staus}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
