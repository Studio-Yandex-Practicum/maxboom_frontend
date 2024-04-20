import { FC } from 'react'

import { CategoryCard } from '@/entities/CategoryCard/CategoryCard'

import { TCategory } from '../../models/CategoryModel'

import styles from './CategoryCardList.module.scss'

/**
 * Список категорий
 */

const CategoryCardList: FC = () => {
  const category: TCategory = {
    id: 1,
    name: '',
    slug: '',
    image: ''
  }

  return (
    <div className={styles['categoryCardList']}>
      <CategoryCard key={category.id} category={category} />
    </div>
  )
}

export default CategoryCardList

// import React, { FC, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCategoryCard } from '../../entities/CategoryCard/getCategoryCard';
// import { RootState } from '../../entities/CategoryCard/types';
// import { TCategory } from '../../models/CategoryModel';
// import { CategoryCard } from '@/entities/CategoryCard/CategoryCard';
// import styles from './CategoryCardList.module.scss';

// const CategoryCardList: FC = () => {
//   const dispatch = useDispatch();

//   // Вызываем вашу thunk-функцию для получения данных с бэка
//   useEffect(() => {
//     dispatch(getCategoryCard('category'));
//   }, [dispatch]);

//   // Получаем данные из Redux store
//   const categories: TCategory | undefined = useSelector((state: RootState) => state.categories);

//   return (
//     <div className={styles.categoryCardList}>
//       {/* Проверяем, что данные получены, и отображаем их */}
//       {categories && (
//         <CategoryCard key={categories.id} category={categories} />
//       )}
//     </div>
//   );
// };

// export default CategoryCardList;
