import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  // this effect makes an alert appears on the top of the page every time the default function is rendered
  useEffect(() => {
    alert(`Count: ${count}`);
  })

  const handleClick = () => {
    setCount((prevCount) =>  prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
