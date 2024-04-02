import type { FC } from 'react'

// import axios, { AxiosInstance } from 'axios'
import { CategoryCard } from '@/entities/CategoryCard/CategoryCard'
// import { cardsAllCategoryListData } from '@/mockData/cardsAllCategoryListData'
import { TCategory } from '@/models/CategoryModel'

import styles from './CategoryCardList.module.scss'

/**
 * Список всех категорий
 */

type Props = {
  card: TCategory
}

export const CategoryCardList: FC<Props> = props => {
  const cardCategory = props
  return (
    <div className={styles['categoryCardList']}>
      <CategoryCard card={cardCategory.card} />
    </div>
  )
}

// export const CategoryCardList = () => {

//   const [cards, setCards] = useState([]);
//   useEffect(() => {
//       api
//         .getNeededAll()
//         .then((cards) => {
//           const [dataForInitialCards] = cards;
//           setCards(dataForInitialCards);
//         })
//         .catch((err) => console.log(err));
//   }, []);
//   return (
//     <div className={styles['categoryCardList']}>
//       { cardsAllCategoryListData.map((card, key) => {
//              return((<CategoryCard
//                 key={key}
//               />))
//               }
//             )}
//     </div>
//   )
// }
