import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

require('codemirror/mode/javascript/javascript');

export const CodeMirrorInstance = ({ value, setCode }) => {

  function handleChange(editor, data, value) {
    setCode(value)
  }

  return (
    <CodeMirror
      value={value}
      options={{
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true
      }}
      onBeforeChange={handleChange}
    />
  );
};