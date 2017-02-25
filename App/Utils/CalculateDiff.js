// @flow
import { createPatch } from 'diff';
import diff2html from 'diff2html';
import DIFF_FORMAT from '../Config/DiffFormat';
import type { Left, Right, OutputFormat, OutputSplit } from '../Types';

/* eslint-disable import/prefer-default-export, max-len*/
export function createDiff(left: Left, right: Right, format: OutputFormat, split: OutputSplit): Array<string> {
  const rawDiff: string = createPatch('result', left, right, 'before', 'after');
  let contents: string = '';
  if (format === DIFF_FORMAT.unified) {
    contents = rawDiff;
  } else {
    // diff2html
    const d2h = diff2html.Diff2Html;
    const htmlString: string = d2h.getPrettyHtml(rawDiff, { outputFormat: split });
    contents = htmlString;
  }
  return [rawDiff, contents];
}
