import test from 'ava';
import proxyquire from 'proxyquire';
import DIFF_FORMAT from '../../App/Config/DiffFormat';

test('createDiff() フォーマットがunifiedならコンテンツはunified生データが返却される', (t) => {
  const diffStub = {
    createPatch() {
      return 'rawDiff';
    },
  };
  const createDiffMock = proxyquire('../../App/Utils/CalculateDiff', {
    diff: diffStub,
  });
  const expected = ['rawDiff', 'rawDiff'];
  t.deepEqual(createDiffMock.createDiff('left', 'right', DIFF_FORMAT.unified, 'line-by-line'), expected);
});

test('createDiff() フォーマットがhtmlならコンテンツはhtml変換後のデータが返却される', (t) => {
  const diffStub = {
    createPatch() {
      return 'rawDiff';
    },
  };
  const diff2htmlStub = {
    Diff2Html: {
      getPrettyHtml() {
        return '<html>contents</html>';
      },
    },
  };
  const createDiffMock = proxyquire('../../App/Utils/CalculateDiff', {
    diff: diffStub,
    diff2html: diff2htmlStub,
  });
  const expected = ['rawDiff', '<html>contents</html>'];
  t.deepEqual(createDiffMock.createDiff('left', 'right', DIFF_FORMAT.html, 'line-by-line'), expected);
});
