/* eslint-disable import/first */
import '../Setup';
import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';
import InputLeft from 'Components/InputLeft';

test('InputLeft component', (t) => {
  const props = {
    onChange: () => ({}),
    value: 'left input',
    editorSettings: {
      language: 'javascript',
      theme: 'github',
    },
  };
  const tree = render.create(<InputLeft {...props} />).toJSON();
  t.snapshot(tree);
});
