import React, { useState, useEffect } from 'react';
import { CodeMirrorInstance } from './CodeMirrorInstance';
import axios from 'axios';

export const CodeSnippet = ({ value }) => {

  const [srcUrl, setSrcUrl] = useState('');
  const [code, setCode] = useState(value);

  useEffect(() => {
    async function getSrcUrl() {
      const baseUrl = 'https://real-react-editor-server.herokuapp.com'

      try {
        const {data: {key}} = await axios.post(baseUrl, { code })
        setSrcUrl(`${baseUrl}/${key}`)

      } catch(error) {
        console.error(error)
      }
    }
    getSrcUrl();
  }, [code]);

  return (
    <div className="code-snippet">
      <CodeMirrorInstance value={code} setCode={setCode} />
      <iframe title="result" src={srcUrl} className="result" />
    </div>
  )
}