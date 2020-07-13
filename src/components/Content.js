import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Elements from '../elements.md';
// import Props from '../props.md';
import { CodeSnippet } from './CodeSnippet';

export const Content = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(Elements)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div>
      <ReactMarkdown source={markdown} renderers={{ code: CodeSnippet }} />
    </div>
  );
};
