// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

// 入力関係のState
export type Left = string;
export type Right = string;
export type InputLanguage =
    | 'javascript'
    | 'java'
    | 'python'
    | 'xml'
    | 'ruby'
    | 'sass'
    | 'markdown'
    | 'mysql'
    | 'json'
    | 'html'
    | 'handlebars'
    | 'golang'
    | 'csharp'
    | 'coffee'
    | 'css'
    ;

export type InputTheme =
    | 'monokai'
    | 'github'
    | 'tomorrow'
    | 'kuroir'
    | 'twilight'
    | 'xcode'
    | 'textmate'
    | 'solarized_dark'
    | 'solarized_light'
    | 'terminal'
    ;

export type Input = {
    left: Left,
    right: Right,
    language: InputLanguage,
    theme: InputTheme,
};

// 出力関係のState
export type Raw = string;
export type Contents = string;
// 出力フォーマット unified:0, html:1
export type OutputFormat = | 0 | 1;
// 出力エリア分割
export type OutputSplit =
    | 'line-by-line'
    | 'side-by-side'
    ;
export type Output = {
    raw: Raw,
    contents: Contents,
    format: OutputFormat,
    split: OutputSplit,
};

// アプリケーション全体のState(Reducer分割後)
export type State = {
    input: Input,
    output: Output
};

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
export type A_INPUT_LANGUAGE_CHANGE = { type: 'INPUT_LANGUAGE_CHANGE', language: InputLanguage };
export type A_INPUT_THEME_CHANGE = { type: 'INPUT_THEME_CHANGE', theme: InputTheme };
export type A_OUTPUT_DIFF_RESULT = { type: 'OUTPUT_DIFF_RESULT', raw: Raw, contents: Contents };
export type A_OUTPUT_FORMAT_CHANGE = { type: 'OUTPUT_FORMAT_CHANGE', format: OutputFormat };
export type A_OUTPUT_SPLIT_CHANGE = { type: 'OUTPUT_SPLIT_CHANGE', split: OutputSplit };

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

// ReduxStore
export type Store = ReduxStore<State, Action>;

// ReduxDispatch
export type Dispatch = ReduxDispatch<Action>;
