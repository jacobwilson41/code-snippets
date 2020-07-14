import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

require('codemirror/mode/javascript/javascript');

export const CodeMirrorInstance = ({ value }) => {
  return (
    <CodeMirror
      value={value}
      options={{
        mode: 'javascript', //TODO: figure out if I need jsx mode here
        theme: 'material',
        lineNumbers: true,
        readOnly: true
      }}
    />
  );
};