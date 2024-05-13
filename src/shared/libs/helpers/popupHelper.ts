/**
 * Функция скрывает или отображает вертикальную прокрутку у body.
 * Используется при открытии попапа
 *
 * @param {boolean} needsToHide если true, то ф-я скроект прокрутку, false - вернет как было до скрытия (значение по умполчанию - false).
 */
export const bodyScrollControl = (needsToHide: boolean = false): void => {
  if (needsToHide) {
    document.body.style.position = 'fixed'
  } else {
    document.body.style.position = ''
  }
}
