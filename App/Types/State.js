// @flow
// 入力関係のState
export type Left = string;
export type Right = string;
export type Language =
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

export type Theme =
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
    language: Language,
    theme: Theme,
};

// 出力関係のState
export type Raw = string;
export type Contents = string;

// 出力フォーマット unified:0, html:1
export type Format = | 0 | 1;

// 出力エリア分割
export type Split =
    | 'line-by-line'
    | 'side-by-side'
    ;

export type Output = {
    raw: Raw,
    contents: Contents,
    format: Format,
    split: Split,
};

// アプリケーション全体のState(Reducer分割後)
export type State = {
    input: Input,
    output: Output
};
