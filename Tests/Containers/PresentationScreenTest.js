/* eslint-disable import/first */
import 'ignore-styles';
import '../Setup';
import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';
import { PresentationScreen } from 'Containers/PresentationScreen';

test('PresentationScreen component', (t) => {
  const props = {
    changeLeft: () => ({}),
    changeRight: () => ({}),
    changeSplit: () => ({}),
    left: 'left input',
    right: 'right input',
    language: 'java',
    theme: 'github',
    contents: 'diff contents',
    format: 0,
    split: 'line-by-line',
  };
  const tree = render.create(<PresentationScreen {...props} />).toJSON();
  t.snapshot(tree);
});
