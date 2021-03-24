import parseMigrationFormat from './parseMigrationFormat';

describe('parseMigrationFormat()', () => {
  it('returns empty strings if input is empty string', () => {
    expect(parseMigrationFormat('')).toEqual('Custom Migration');
  });
});
