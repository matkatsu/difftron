// @flow
import type { Format } from 'Types/State';

type diffFormat = {
  unified: Format,
  html: Format
}

const DIFF_FORMAT: diffFormat = {
  unified: 0,
  html: 1,
};

export default DIFF_FORMAT;
