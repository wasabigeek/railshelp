import { MIGRATION_FORMATS } from "./constants";

const parseMigrationFormat = (text) => {
  if (/^Add(?<columnsName>\w+)To(?<tableName>\w+)/.test(text)) {
    const matches = text.match(/^Add(?<columnsName>\w+)To(?<tableName>\w+)/);
    return [
      MIGRATION_FORMATS.ADD_COLUMNS,
      {
        columnsName: matches.groups.columnsName,
        tableName: matches.groups.tableName,
      }
    ];
  } else if (/^Remove\w+From\w/.test(text)) {
    const matches = text.match(/^Remove(?<columnsName>\w+)From(?<tableName>\w+)/);
    return [
      MIGRATION_FORMATS.REMOVE_COLUMNS,
      {
        columnsName: matches.groups.columnsName,
        tableName: matches.groups.tableName,
      }
    ];
  } else if (/JoinTable$/.test(text)) {
    return MIGRATION_FORMATS.JOIN_TABLE
  }
  return MIGRATION_FORMATS.CUSTOM;
}

export default parseMigrationFormat
