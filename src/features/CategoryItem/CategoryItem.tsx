import { type FC } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { setCategoryId } from '@/entities/Category/slice/categoryIdSlice'
import { setCategorySlug } from '@/entities/Category/slice/categorySlugSlice'
import styles from '@/features/CategoryItem/CategoryItem.module.scss'
import { useHandleActiveItem } from '@/features/CategoryItem/models/useHandleActiveItem'
import SideBar from '@/features/SideBar'
import { Routes } from '@/shared/config/routerConfig/routes'
import type { MainCategoryInfo } from '@/widgets/CategoryList/types/types'

type Props = {
  item: MainCategoryInfo
}

/**
 * Компонент единицы категории в списке категорий бокового меню
 * @param {MainCategoryInfo} item - главная категория с ветками;
 */
export const CategoryItem: FC<Props> = ({ item }) => {
  const dispatch = useDispatch()

  const { itemActive, branch } = useHandleActiveItem(item)

  return (
    <SideBar
      key={item.id}
      isVisible={true}
      title={`${item.name} (${item.total_count})`}
      onClick={() => {
        dispatch(setCategoryId(item.id))
        dispatch(setCategorySlug(item.slug))
      }}
      categorySidebar={{
        to: `${Routes.CATEGORIES}/${item.slug}`,
        activeElement: itemActive,
        branch: branch,
        itemName: item.name
      }}>
      {item.branches && (
        <ul role="list">
          {item.branches.map(el => (
            <li key={el.id} className={styles['category-list__item']}>
              <NavLink
                role="link"
                to={`${Routes.CATEGORIES}/${el.slug}`}
                className={({ isActive }) =>
                  isActive ? styles['category-list__link_active'] : styles['category-list__link']
                }
                onClick={() => {
                  dispatch(setCategoryId(el.id))
                  dispatch(setCategorySlug(el.slug))
                }}>
                {el.name} ({el.products_count})
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </SideBar>
  )
}
