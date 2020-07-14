import React, { useState, useEffect } from 'react';
import { CodeMirrorInstance } from './CodeMirrorInstance';
import axios from 'axios';

export const CodeSnippet = ({ value }) => {

  const [html, setHtml] = useState('this is where the code preview will go');

  useEffect(() => {
    async function getHtmlFromJsx() {
      const url = 'https://real-react-editor-server.herokuapp.com'

      try {
        const {data: {key}} = await axios.post(url, { code: value })

        const {data: html} = await axios.get(`${url}/${key}`)

        setHtml(html);
      } catch(error) {
        console.error(error)
      }
    }
    getHtmlFromJsx();
  }, [value]);

  return (
    <div className="code-snippet">
      <CodeMirrorInstance value={value} />
      <iframe title="result" srcDoc={html} className="result" />
    </div>
  )
}