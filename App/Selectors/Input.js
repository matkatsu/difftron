// @flow
import type { State } from 'Types/State';

export const left = (state: State) => state.input.left;
export const right = (state: State) => state.input.right;
export const language = (state: State) => state.input.language;
export const theme = (state: State) => state.input.theme;
