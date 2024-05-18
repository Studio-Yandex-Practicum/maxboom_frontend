/**
 * Функция вычисления количества страниц, исходя из общего количества юнитов и количества, которое нужно вывести на одной странице
 * @param {number} totalAmount - общее количество юнитов;
 * @param {number} quantitPerPage - количество, которое нужно вывести на одной странице;
 */
export const totalPagesHandler = (totalAmount: number, quantitPerPage: number) => {
  return Math.ceil(totalAmount / quantitPerPage)
}
