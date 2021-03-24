import parseMigrationFormat from './parseMigrationFormat';

describe('parseMigrationFormat()', () => {
  it('returns Custom Migration if input is empty string', () => {
    expect(parseMigrationFormat('')).toEqual('Custom Migration');
  });
  it('returns AddColumnsToTable format correctly', () => {
    expect(parseMigrationFormat('AddXYZToABC')).toEqual('AddColumnsToTable');
    expect(parseMigrationFormat('Add123ToABC')).toEqual('AddColumnsToTable');
    expect(parseMigrationFormat('AddTo')).not.toEqual('AddColumnsToTable');
    expect(parseMigrationFormat('AddXYZTo')).not.toEqual('AddColumnsToTable');
    expect(parseMigrationFormat('AddToABC')).not.toEqual('AddColumnsToTable');
  });
});
