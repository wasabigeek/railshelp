const parseMigrationFormat = (text) => {
  if (/^Add\w+To\w/.test(text)) {
    return 'AddColumnsToTable';
  } else if (/^Remove\w+From\w/.test(text)) {
    return 'RemoveColumnsFromTable';
  }
  return 'Custom Migration';
}

export default parseMigrationFormat
