import React, { useState, ChangeEvent } from 'react';

// ----- дані -----
// export function FormComponent() {
//   const [value, setValue] = useState("");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <input type="text" value={value} onChange={handleChange} />
//   );
// }

// ----- рішення -----
export function FormComponent() {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
