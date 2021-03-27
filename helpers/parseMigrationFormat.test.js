import { MIGRATION_FORMATS } from './constants';
import parseMigrationFormat from './parseMigrationFormat';

describe('parseMigrationFormat()', () => {
  it('parses AddColumnsToTable format correctly', () => {
    expect(parseMigrationFormat('AddXYZToABC')).toEqual([
      MIGRATION_FORMATS.ADD_COLUMNS,
      {
        columnsName: "XYZ",
        tableName: "ABC"
      }
    ]);
    expect(parseMigrationFormat('Add123ToABC')).toEqual([
      MIGRATION_FORMATS.ADD_COLUMNS,
      {
        columnsName: "123",
        tableName: "ABC",
      }
    ]);
    expect(parseMigrationFormat('AddTo')[0]).not.toEqual(MIGRATION_FORMATS.ADD_COLUMNS);
    expect(parseMigrationFormat('AddXYZTo')[0]).not.toEqual(MIGRATION_FORMATS.ADD_COLUMNS);
    expect(parseMigrationFormat('AddToABC')[0]).not.toEqual(MIGRATION_FORMATS.ADD_COLUMNS);
  });
  it('parses RemoveColumnsFromTable format correctly', () => {
    expect(parseMigrationFormat('RemoveXYZFromABC')).toEqual([
      MIGRATION_FORMATS.REMOVE_COLUMNS,
      {
        columnsName: "XYZ",
        tableName: "ABC",
      }
    ]);
    expect(parseMigrationFormat('Remove123FromABC')).toEqual([
      MIGRATION_FORMATS.REMOVE_COLUMNS,
      {
        columnsName: "123",
        tableName: "ABC",
      }
    ]);
    expect(parseMigrationFormat('RemoveFrom')[0]).not.toEqual(MIGRATION_FORMATS.REMOVE_COLUMNS);
    expect(parseMigrationFormat('RemoveXYZFrom')[0]).not.toEqual(MIGRATION_FORMATS.REMOVE_COLUMNS);
    expect(parseMigrationFormat('RemoveFromABC')[0]).not.toEqual(MIGRATION_FORMATS.REMOVE_COLUMNS);
  });
  it('parses CreateModelJoinTable format correctly', () => {
    expect(parseMigrationFormat('JoinTable')).toEqual(MIGRATION_FORMATS.JOIN_TABLE);
    expect(parseMigrationFormat('CreateXYZJoinTable')).toEqual(MIGRATION_FORMATS.JOIN_TABLE);
    expect(parseMigrationFormat('Create123JoinTable')).toEqual(MIGRATION_FORMATS.JOIN_TABLE);
    expect(parseMigrationFormat('JoinABCTable')).not.toEqual(MIGRATION_FORMATS.JOIN_TABLE);
  });
  it('returns Custom Migration for other formats', () => {
    expect(parseMigrationFormat('HelloThere')).toEqual(MIGRATION_FORMATS.CUSTOM);
  });
  it('returns Custom Migration if input is empty string', () => {
    expect(parseMigrationFormat('')).toEqual(MIGRATION_FORMATS.CUSTOM);
  });
});
