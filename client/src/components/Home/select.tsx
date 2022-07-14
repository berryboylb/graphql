import React from 'react'
import "./styles.css";
const Select = () => {
    const [option] = React.useState<Array<any>>([
      { id: 1, staus: "pending" },
      { id: 2, staus: "successful" },
      { id: 3, staus: "failed" },
    ]);
  return (
    <div>
      <select className='select'>
        {option.map((item) => (
          <>
            <option>{item.staus}</option>
          </>
        ))}
      </select>
    </div>
  );
}

export default Select