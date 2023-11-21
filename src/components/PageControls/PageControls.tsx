import { ChangeEventHandler, FC } from 'react'
import { Dropdown } from '../../components/Dropdown/Dropdown'
import IconGrid from '../../assets/icons/IconGrid.svg'
import IconList from '../../assets/icons/IconList.svg'
import IconCompact from '../../assets/icons/IconCompact.svg'
import { ECardView } from '../../utils/types'
import styles from './PageControls.module.scss'

type TPageControls = {
  cardView: string
  handleCardViewChange: (view: ECardView) => void
  handleItemsPerPageChange: ChangeEventHandler<HTMLSelectElement>
  handleSortChange: ChangeEventHandler<HTMLSelectElement>
  itemPerPageOptions: number[]
  sortOptions: string[]
}

/**
 * Компонент, содержащий кнопки для управления выдачей и отображением товаров.
 * @param {string} cardView - тип сетки отображения карточек товаров;
 * @param {function} handleCardViewChange - функция изменения типа сетки отображения карточек товаров;
 * @param {function} handleItemsPerPageChange - функция изменения кол-ва отображаемых карточек на странице;
 * @param {function} handleSortChange - функция управления порядком сортировки карточек;
 * @param {array} itemPerPageOptions - текущее кол-во отображаемых карточек на странице;
 * @param {array} sortOptions - текущий выбранный порядок сортировки карточек;
 */
export const PageControls: FC<TPageControls> = ({
  cardView,
  handleCardViewChange,
  handleItemsPerPageChange,
  handleSortChange,
  itemPerPageOptions,
  sortOptions
}) => {
  return (
    <div className={styles['page-controls']}>
      <div className={styles.dropdowns}>
        <Dropdown items={sortOptions} onSelect={handleSortChange} />
        <Dropdown items={itemPerPageOptions} onSelect={handleItemsPerPageChange} />
      </div>
      <ul className={styles['cards-controls']}>
        <li
          className={`${styles['cards-control']} ${cardView === 'grid' && styles.active}`}
          onClick={() => handleCardViewChange(ECardView.GRID)}>
          <IconGrid />
        </li>
        <li
          className={`${styles['cards-control']} ${cardView === 'list' && styles.active}`}
          onClick={() => handleCardViewChange(ECardView.LIST)}>
          <IconList />
        </li>
        <li
          className={`${styles['cards-control']} ${cardView === 'compact' && styles.active}`}
          onClick={() => handleCardViewChange(ECardView.COMPACT)}>
          <IconCompact />
        </li>
      </ul>
    </div>
  )
}
