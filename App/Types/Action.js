// @flow
import type { Left, Right, Language, Theme, Raw, Contents, Format, Split } from './State';

// Actionタイプ
export type ActionType =
    | 'STARTUP'
    | 'INPUT_LEFT_CHANGE'
    | 'INPUT_RIGHT_CHANGE'
    | 'INPUT_LANGUAGE_CHANGE'
    | 'INPUT_THEME_CHANGE'
    | 'OUTPUT_DIFF_RESULT'
    | 'OUTPUT_FORMAT_CHANGE'
    | 'OUTPUT_SPLIT_CHANGE'
    ;

// 各Actione
export type A_STARTUP = { type: 'STARTUP' };
export type A_INPUT_LEFT_CHANGE = { type: 'INPUT_LEFT_CHANGE', input: Left };
export type A_INPUT_RIGHT_CHANGE = { type: 'INPUT_RIGHT_CHANGE', input: Right };
export type A_INPUT_LANGUAGE_CHANGE = { type: 'INPUT_LANGUAGE_CHANGE', language: Language };
export type A_INPUT_THEME_CHANGE = { type: 'INPUT_THEME_CHANGE', theme: Theme };
export type A_OUTPUT_DIFF_RESULT = { type: 'OUTPUT_DIFF_RESULT', raw: Raw, contents: Contents };
export type A_OUTPUT_FORMAT_CHANGE = { type: 'OUTPUT_FORMAT_CHANGE', format: Format };
export type A_OUTPUT_SPLIT_CHANGE = { type: 'OUTPUT_SPLIT_CHANGE', split: Split };

// Actions
export type Action =
    | A_STARTUP
    | A_INPUT_LEFT_CHANGE
    | A_INPUT_RIGHT_CHANGE
    | A_INPUT_LANGUAGE_CHANGE
    | A_INPUT_THEME_CHANGE
    | A_OUTPUT_DIFF_RESULT
    | A_OUTPUT_FORMAT_CHANGE
    | A_OUTPUT_SPLIT_CHANGE
    ;
