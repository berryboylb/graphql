import React from 'react'
const Select = () => {
    const [option] = React.useState<Array<any>>([
      { id: 1, staus: "pending" },
      { id: 2, staus: "successful" },
      { id: 3, staus: "failed" },
    ]);
  return (
    <div>
      <select>
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