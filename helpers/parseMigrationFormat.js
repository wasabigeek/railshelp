import { MIGRATION_FORMATS } from "./constants";

const parseMigrationFormat = (text) => {
  if (/^Add\w+To\w/.test(text)) {
    return MIGRATION_FORMATS.ADD_COLUMNS;
  } else if (/^Remove\w+From\w/.test(text)) {
    return MIGRATION_FORMATS.REMOVE_COLUMNS;
  } else if (/JoinTable$/.test(text)) {
    return MIGRATION_FORMATS.JOIN_TABLE
  }
  return MIGRATION_FORMATS.CUSTOM;
}

export default parseMigrationFormat
