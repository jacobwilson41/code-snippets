import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
// require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export const CodeSnippet = ({ value }) => {
  return (
    <CodeMirror
      className="CodeMirror"
      value={value}
      options={{
        mode: 'javascript', //TODO: figure out if I need jsx mode here
        theme: 'material',
        lineNumbers: true,
        readOnly: true
      }}
      onChange={(editor, data, value) => {}} // do I need this?
    />
  );
};
