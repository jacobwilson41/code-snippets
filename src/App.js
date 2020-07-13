import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import elementsMD from './elements.md';
import propsMD from './props.md';

function App() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(elementsMD)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div>
      <ReactMarkdown source={markdown} />
    </div>
  );
}

export default App;
