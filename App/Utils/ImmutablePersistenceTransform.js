// @flow
import I from 'seamless-immutable';
import localForage from 'localforage';
import { createTransform, persistStore } from 'redux-persist';
import type { Store } from 'Types';

export default function (store: Store) {
  const myTransform = createTransform(
    (inState) => {
      // storageへ保存する際のtransform
      const state = inState.asMutable ? inState.asMutable({ deep: true }) : inState;
      return state;
    },
    (outState) => {
      // storageから取り出す際のtransform
      // HACK
      // redux-persistが列挙可能なプロパティ以外を除外しINITIAL_STATEにセットしてしまう為、
      // mergeDeepプロパティに空の関数をセットする
      // https://github.com/rt2zz/redux-persist/blob/v3.5.0/src/autoRehydrate.js#L42
      /* eslint-disable no-param-reassign */
      outState.mergeDeep = () => { };
      return I.from(outState);
    },
  );
  persistStore(store, { storage: localForage, transforms: [myTransform] });
}
