import {useRef, useState} from 'react';

export const CtrlDOMRef = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const handleClick = () => {
    setText(inputEl.current!.value);
  };
  console.log("レンダリング！！(useRef)");
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>set text</button>
      <p>テキスト : {text}</p>
    </>
  );
};

export const CtrlDOMState = () => {
    const [inputElement, setInputElement] = useState("");
    const [text, setText] = useState("");
    const handleClick = () => {
      setText(inputElement);
    };
    console.log("レンダリング！！(useState)");
    return (
      <>
        <input
          value={inputElement}
          onChange={(e) => setInputElement(e.target.value)}
          type="text"
        />
        <button onClick={handleClick}>setText</button>
        <p>テキスト : {text}</p>
      </>
    );
  };

