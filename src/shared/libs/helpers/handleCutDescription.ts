/**
 * Функция ограничения текста описания до 175 символов
 * @param {string} description - текст-описание;
 */
export const handleCutDescription = (description: string) => {
  let sliced: string = description.slice(0, 175)
  if (sliced.length < description.length) {
    sliced += '...'
  }
  return sliced
}
