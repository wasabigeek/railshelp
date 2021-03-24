import parseMigrationFormat from './parseMigrationFormat';

describe('parseMigrationFormat()', () => {
  it('returns Custom Migration if input is empty string', () => {
    expect(parseMigrationFormat('')).toEqual('Custom Migration');
  });
  it('parses AddColumnsToTable format correctly', () => {
    expect(parseMigrationFormat('AddXYZToABC')).toEqual('AddColumnsToTable');
    expect(parseMigrationFormat('Add123ToABC')).toEqual('AddColumnsToTable');
    expect(parseMigrationFormat('AddTo')).not.toEqual('AddColumnsToTable');
    expect(parseMigrationFormat('AddXYZTo')).not.toEqual('AddColumnsToTable');
    expect(parseMigrationFormat('AddToABC')).not.toEqual('AddColumnsToTable');
  });
  it('parses RemoveColumnsFromTable format correctly', () => {
    expect(parseMigrationFormat('RemoveXYZFromABC')).toEqual('RemoveColumnsFromTable');
    expect(parseMigrationFormat('Remove123FromABC')).toEqual('RemoveColumnsFromTable');
    expect(parseMigrationFormat('RemoveFrom')).not.toEqual('RemoveColumnsFromTable');
    expect(parseMigrationFormat('RemoveXYZFrom')).not.toEqual('RemoveColumnsFromTable');
    expect(parseMigrationFormat('RemoveFromABC')).not.toEqual('RemoveColumnsFromTable');
  });
});
