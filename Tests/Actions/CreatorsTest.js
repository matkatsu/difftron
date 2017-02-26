import test from 'ava';
import Actions from 'Actions/Creators';

test('startup Action', (t) => {
  t.deepEqual(Actions.startup(), { type: 'STARTUP' });
});

test('changeLeft Action', (t) => {
  const input = 'input Text';
  t.deepEqual(Actions.inputLeftChange(input), { type: 'INPUT_LEFT_CHANGE', input });
});

test('changeRight Action', (t) => {
  const input = 'input Text';
  t.deepEqual(Actions.inputRightChange(input), { type: 'INPUT_RIGHT_CHANGE', input });
});

test('changeLanguage Action', (t) => {
  const language = 'javascript';
  t.deepEqual(Actions.inputLanguageChange(language), { type: 'INPUT_LANGUAGE_CHANGE', language });
});

test('changeTheme Action', (t) => {
  const theme = 'github';
  t.deepEqual(Actions.inputThemeChange(theme), { type: 'INPUT_THEME_CHANGE', theme });
});

test('diffResult Action', (t) => {
  const raw = 'raw';
  const contents = '<html>raw</html>';
  t.deepEqual(Actions.outputDiffResult(raw, contents), { type: 'OUTPUT_DIFF_RESULT', raw, contents });
});

test('changeFormat Action', (t) => {
  const format = 0;
  t.deepEqual(Actions.outputFormatChange(format), { type: 'OUTPUT_FORMAT_CHANGE', format });
});

test('changeSplit Action', (t) => {
  const split = 'side-by-side';
  t.deepEqual(Actions.outputSplitChange(split), { type: 'OUTPUT_SPLIT_CHANGE', split });
});
