
import React, { useState, useEffect } from 'react';

const Timer:React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  useEffect(() => {
    console.log(`再レンダリング!!`);
    console.log(`count:${count}`);
    console.log(`name:${name}`);
  }, [count,name]);

  return (
    <>
    <div>
        <p>現在の数字は{count}です(useEffect編)</p>
        <button onClick={() => setCount((prevState) => prevState + 1)}>+1</button>
        <button onClick={() => setCount((prevState) => prevState - 1)}>-1</button>
        <button onClick={() => setCount(0)}>リセット</button>
    </div>
    <div>
        <p>私の名前は {name}です</p>
        <input type='text' onChange={(e) => setName(e.target.value)}/>
    </div>
    </>
  );
};

export default Timer;