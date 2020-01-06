export const getDisplayName = person => {
  return person.nickname || `${person.firstName} ${person.lastName || ''}`
}
