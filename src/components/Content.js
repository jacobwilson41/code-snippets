import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Elements from '../markdown/elements.md';
import Props from '../markdown/props.md';
import { CodeSnippet } from './CodeSnippet';

export const Content = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    let fetchedMarkdown = '';

    async function fetchMarkdown() {
      await fetch(Elements)
        .then((res) => res.text())
        .then((text) => fetchedMarkdown += text);

      await fetch(Props)
        .then((res) => res.text())
        .then((text) => fetchedMarkdown += text);

      setMarkdown(fetchedMarkdown);
    }
    fetchMarkdown();
  }, []);

  const styles = {
    margin: '20px'
  }

  return (
    <div className="content" style={styles}>
      <ReactMarkdown source={markdown} renderers={{ code: CodeSnippet }} />
    </div>
  );
};