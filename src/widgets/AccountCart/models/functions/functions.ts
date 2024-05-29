/**
 *
 * @param {number} number количество товаров
 * @returns {string} окончание для слова товар, в зависимости от их количества
 */
export const getEndingByNumber = (number: number): string => {
  const count = String(number)
  const lastNumber = +count[count.length - 1]
  let ending = ''

  if (lastNumber === 0 || (lastNumber >= 5 && lastNumber <= 9)) {
    ending = 'ов'
  }
  if (lastNumber === 1) {
    ending = ''
  }
  if (lastNumber >= 2 && lastNumber <= 4) {
    ending = 'а'
  }

  return ending
}
