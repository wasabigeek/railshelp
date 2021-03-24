import { MIGRATION_FORMATS } from './constants';
import parseMigrationFormat from './parseMigrationFormat';

describe('parseMigrationFormat()', () => {
  it('returns Custom Migration if input is empty string', () => {
    expect(parseMigrationFormat('')).toEqual(MIGRATION_FORMATS.CUSTOM);
  });
  it('parses AddColumnsToTable format correctly', () => {
    expect(parseMigrationFormat('AddXYZToABC')).toEqual(MIGRATION_FORMATS.ADD_COLUMNS);
    expect(parseMigrationFormat('Add123ToABC')).toEqual(MIGRATION_FORMATS.ADD_COLUMNS);
    expect(parseMigrationFormat('AddTo')).not.toEqual(MIGRATION_FORMATS.ADD_COLUMNS);
    expect(parseMigrationFormat('AddXYZTo')).not.toEqual(MIGRATION_FORMATS.ADD_COLUMNS);
    expect(parseMigrationFormat('AddToABC')).not.toEqual(MIGRATION_FORMATS.ADD_COLUMNS);
  });
  it('parses RemoveColumnsFromTable format correctly', () => {
    expect(parseMigrationFormat('RemoveXYZFromABC')).toEqual(MIGRATION_FORMATS.REMOVE_COLUMNS);
    expect(parseMigrationFormat('Remove123FromABC')).toEqual(MIGRATION_FORMATS.REMOVE_COLUMNS);
    expect(parseMigrationFormat('RemoveFrom')).not.toEqual(MIGRATION_FORMATS.REMOVE_COLUMNS);
    expect(parseMigrationFormat('RemoveXYZFrom')).not.toEqual(MIGRATION_FORMATS.REMOVE_COLUMNS);
    expect(parseMigrationFormat('RemoveFromABC')).not.toEqual(MIGRATION_FORMATS.REMOVE_COLUMNS);
  });
  it('parses CreateModelJoinTable format correctly', () => {
    expect(parseMigrationFormat('JoinTable')).toEqual(MIGRATION_FORMATS.JOIN_TABLE);
    expect(parseMigrationFormat('CreateXYZJoinTable')).toEqual(MIGRATION_FORMATS.JOIN_TABLE);
    expect(parseMigrationFormat('Create123JoinTable')).toEqual(MIGRATION_FORMATS.JOIN_TABLE);
    expect(parseMigrationFormat('JoinABCTable')).not.toEqual(MIGRATION_FORMATS.JOIN_TABLE);
  });
});
