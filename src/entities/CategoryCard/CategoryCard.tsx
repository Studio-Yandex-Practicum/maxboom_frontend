import { type FC } from 'react'

// import axios from 'axios'
// import FM from '@/assets/images/categoryPage/FM.webp'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './CategoryCard.module.scss'
import getCatgoryCard from './getCategoryCard'

// import { ApiRoutes } from '@/shared/api/types'

/**
 * Карточка категории
 */

export const CategoryCard: FC = () => {
  // function getCatgoryCard() {

  //   const [categoryState, setCategoryState] = useState();

  //   useEffect(() => {
  //     const apiUrlCategory = `api/${ApiRoutes.CATEGORIES}`;
  //     axios.get(apiUrlCategory).then((resp) => {
  //       const allCards = resp.data;
  //       setCategoryState(allCards);
  //     });
  //   }, [setCategoryState]);
  //   return (
  //     <div className="category-card">

  //     </div>
  //   );
  // }

  return (
    <div className={styles['category-card']}>
      <img src="getCatgoryCard.img" alt={getCatgoryCard.name} className={styles['category-card__img']} />
      <Paragraph className={styles['category-card__text']}>getCatgoryCard.name</Paragraph>
    </div>
  )
}
