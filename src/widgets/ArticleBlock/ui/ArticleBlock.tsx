import { FC, useState } from 'react'

import description from '@/assets/images/articleBlock/description.png'
import ArrowIcon from '@/assets/images/sideBarMenu/IconArrowDown.svg'
import { Button } from '@/shared/ui/Button/Button'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './articleBlock.module.scss'

/**
 * Компонент ArticleBlock используется как виджет на главной странице MainPage
 */

const ArticleBlock: FC = () => {
  const [isActive, setIsActive] = useState(false)
  function openTextHandler() {
    setIsActive(prev => !prev)
  }

  return (
    <section className={styles.articleBlock}>
      <img src={description} alt="интерьер" className={styles.image} />
      <div className={styles.wrapper}>
        <Heading type={HeadingType.NORMAL}>Уникальный магазин техники и гаджетов</Heading>
        <div className={!isActive ? `${styles.container}` : `${styles.container} ${styles.container_open}`}>
          <Paragraph>
            На естественном языке сказать об одном и том же факте можно бесконечным числом способов. Можно
            переставлять слова местами, заменять их на синонимы, склонять по падежам (если говорим о языке с
            падежами) и тд.
          </Paragraph>
          <Paragraph>
            Необходимость определять схожесть двух фраз возникла при решении одной небольшой практической
            задачи. Я не использовал машинное обучение, не вил нейронные сети, но использовал простые метрики
            и собранную статистику для калибровки коэффициентов.
          </Paragraph>
          <Paragraph>
            На естественном языке сказать об одном и том же факте можно бесконечным числом способов. Можно
            переставлять слова местами, заменять их на синонимы, склонять по падежам (если говорим о языке с
            падежами) и тд.
          </Paragraph>
          <Paragraph>
            Необходимость определять схожесть двух фраз возникла при решении одной небольшой практической
            задачи. Я не использовал машинное обучение, не вил нейронные сети, но использовал простые метрики
            и собранную статистику для калибровки коэффициентов.
          </Paragraph>
        </div>
        <Button onClick={() => openTextHandler()} className={styles.link}>
          {isActive ? 'Скрыть' : 'Читать дальше'}
          <ArrowIcon className={isActive ? `${styles.hide}` : `${styles.read}`} />
        </Button>
      </div>
    </section>
  )
}

export default ArticleBlock
