// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { State } from './State';
import type { Action } from './Action';

// ReduxStore
export type Store = ReduxStore<State, Action>;

// ReduxDispatch
export type Dispatch = ReduxDispatch<Action>;
