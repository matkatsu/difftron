// @flow
import type { OutputFormat } from 'Types';

type diffFormat = {
  unified: OutputFormat,
  html: OutputFormat
}

const DIFF_FORMAT: diffFormat = {
  unified: 0,
  html: 1,
};

export default DIFF_FORMAT;
