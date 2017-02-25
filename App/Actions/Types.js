// @flow
import type { ActionType } from '../Types';

const STARTUP: ActionType = 'STARTUP';
const INPUT_LEFT_CHANGE: ActionType = 'INPUT_LEFT_CHANGE';
const INPUT_RIGHT_CHANGE: ActionType = 'INPUT_RIGHT_CHANGE';
const INPUT_LANGUAGE_CHANGE: ActionType = 'INPUT_LANGUAGE_CHANGE';
const INPUT_THEME_CHANGE: ActionType = 'INPUT_THEME_CHANGE';
const OUTPUT_DIFF_RESULT: ActionType = 'OUTPUT_DIFF_RESULT';
const OUTPUT_FORMAT_CHANGE: ActionType = 'OUTPUT_FORMAT_CHANGE';
const OUTPUT_SPLIT_CHANGE: ActionType = 'OUTPUT_SPLIT_CHANGE';

const ActionTypes = {
  STARTUP,
  INPUT_LEFT_CHANGE,
  INPUT_RIGHT_CHANGE,
  INPUT_LANGUAGE_CHANGE,
  INPUT_THEME_CHANGE,
  OUTPUT_DIFF_RESULT,
  OUTPUT_FORMAT_CHANGE,
  OUTPUT_SPLIT_CHANGE,
};

export default ActionTypes;
