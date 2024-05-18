/**
 * Функция для вычисления стоимости товара
 * @param {number} amount - количество товара;
 * @param {string} price - цена товара;
 */
export const calculateProductPrice = (amount: number, price: string) => {
  return amount * Number(price)
}
