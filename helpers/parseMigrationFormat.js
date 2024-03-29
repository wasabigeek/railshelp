import { MIGRATION_FORMATS } from "./constants";

const parseMigrationFormat = (text) => {
  const addColumnsMatches = text.match(/^Add(?<columnsName>\w+)To(?<tableName>\w+)/);
  if (addColumnsMatches) {
    return [
      MIGRATION_FORMATS.ADD_COLUMNS,
      {
        columnsName: addColumnsMatches.groups.columnsName,
        tableName: addColumnsMatches.groups.tableName,
      }
    ];
  }

  const removeColumnsMatches = text.match(/^Remove(?<columnsName>\w+)From(?<tableName>\w+)/);
  if (removeColumnsMatches) {
    return [
      MIGRATION_FORMATS.REMOVE_COLUMNS,
      {
        columnsName: removeColumnsMatches.groups.columnsName,
        tableName: removeColumnsMatches.groups.tableName,
      }
    ];
  }

  const joinTableMatches = text.match(/^(Create)?(?<sourceTable>\w+)?JoinTable$/)
  if (joinTableMatches) {
    return [
      MIGRATION_FORMATS.JOIN_TABLE,
      {
        sourceTable: joinTableMatches.groups.sourceTable || null,
      }
    ]
  }

  return [MIGRATION_FORMATS.CUSTOM, { name: text }];
}

export default parseMigrationFormat
