export const getFeedbackDate = (pubDate: string): string => {
  const parsedDate = new Date(pubDate)
  const year = parsedDate.getFullYear()
  const month = parsedDate.getMonth() + 1 < 10 ? `0${parsedDate.getMonth() + 1}` : parsedDate.getMonth() + 1
  const day = parsedDate.getDate() < 10 ? `0${parsedDate.getDate()}` : parsedDate.getDate()
  return `${day}.${month}.${year}`
}
