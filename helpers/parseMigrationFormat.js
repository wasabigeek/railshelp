const parseMigrationFormat = (text) => {
  if (/^Add\w+To\w/.test(text)) {
    return 'AddColumnsToTable';
  } else if (/^Remove\w+From\w/.test(text)) {
    return 'RemoveColumnsFromTable';
  } else if (/JoinTable$/.test(text)) {
    return 'CreateModelJoinTable'
  }
  return 'Custom Migration';
}

export default parseMigrationFormat
