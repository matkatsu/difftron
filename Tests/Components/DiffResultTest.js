/* eslint-disable import/first */
import 'ignore-styles';
import '../Setup';
import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';
import DiffResult from 'Components/DiffResult';

test('DiffResult component unified', (t) => {
  const props = {
    value: 'result contents',
    editorSettings: {
      format: 0,
      split: 'side-by-side',
      language: 'javascript',
      theme: 'github',
    },
    handleSplitChange: () => ({}),
  };
  const tree = render.create(<DiffResult {...props} />).toJSON();
  t.snapshot(tree);
});

test('DiffResult component html', (t) => {
  const props = {
    value: 'result contents',
    editorSettings: {
      format: 1,
      split: 'side-by-side',
      language: 'javascript',
      theme: 'github',
    },
    handleSplitChange: () => ({}),
  };
  const tree = render.create(<DiffResult {...props} />).toJSON();
  t.snapshot(tree);
});
