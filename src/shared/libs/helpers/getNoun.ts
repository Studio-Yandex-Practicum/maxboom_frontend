/**
 * Функция изменения окончания слова, в зависимости от значения числа
 * @param {number} number - число, от которого зависит окончание;
 * @param {string} var1 - вариант текста;
 * @param {string} var2 - вариант текста;
 * @param {string} var3 - вариант текста;
 */
export const getNoun = (number: number, var1?: string, var2?: string, var3?: string) => {
  let n = Math.abs(number)
  n %= 100
  if (n >= 5 && n <= 20) {
    return var3
  }
  n %= 10
  if (n === 1) {
    return var1
  }
  if (n >= 2 && n <= 4) {
    return var2
  }
  return var3
}
