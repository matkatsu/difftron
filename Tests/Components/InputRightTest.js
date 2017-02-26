/* eslint-disable import/first */
import '../Setup';
import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';
import InputRight from 'Components/InputRight';

test('InputRight component', (t) => {
  const props = {
    onChange: () => ({}),
    value: 'right input',
    editorSettings: {
      language: 'javascript',
      theme: 'github',
    },
  };
  const tree = render.create(<InputRight {...props} />).toJSON();
  t.snapshot(tree);
});
