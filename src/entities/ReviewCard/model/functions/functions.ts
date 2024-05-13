export const getFormatedDate = (date: string) => {
  const _parsedDate = new Date(date)
  const year = _parsedDate.getFullYear()
  const formatter = new Intl.DateTimeFormat('ru', { month: 'long', day: 'numeric' }).format(_parsedDate)

  return `${formatter}, ${year}`
}
