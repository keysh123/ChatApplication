import React, { useState, useEffect } from 'react';

const Typing = (props) => {
  const [text, setText] = useState('');
  const phrase = props.title;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < phrase.length) {
        setText(prevText => prevText + phrase[index]);
        setIndex(prevIndex => prevIndex + 1);
      } else {
        setText('');
        setIndex(0); // Reset index to start typing the phrase again
      }
    }, 250); // Adjust the speed of typing here (milliseconds)

    return () => clearTimeout(timer);
  }, [index, phrase]);

  return (
    <div>
      <h1 className='fw-bold' style={{fontFamily:'sans-serif'}}>{text} ..!!</h1>
    </div>
  );
};

export default Typing;
