const pluralRules = new Intl.PluralRules('ru')

/**
 *
 * @param {number} number количество товаров
 * @returns {string} окончание для слова товар, в зависимости от их количества
 */
export const getCountStrByNumber = (number: number): string => {
  const pluralForm = pluralRules.select(number)
  let productWord

  switch (pluralForm) {
    case 'one':
      productWord = 'товар'
      break
    case 'few':
      productWord = 'товара'
      break
    default:
      productWord = 'товаров'
  }

  return `${number} ${productWord}`
}
