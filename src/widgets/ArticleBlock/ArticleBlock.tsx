import ArrowReadNext from '@/assets/icons/ArrowReadNext.svg'
import description from '@/assets/images/articleBlock/description.png'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './articleBlock.module.scss'

function ArticleBlock() {
  return (
    <section className={styles.container}>
      <div className={styles.article}>
        <img src={description} alt="интерьер" className={styles.image} />
        <div className={styles.wrapper}>
          <Heading type={HeadingType.NORMAL}>Уникальный магазин техники и гаджетов</Heading>
          <Paragraph className={styles.text}>
            На естественном языке сказать об одном и том же факте можно бесконечным числом способов. Можно
            переставлять слова местами, заменять их на синонимы, склонять по падежам (если говорим о языке с
            падежами) и тд.
          </Paragraph>
          <Paragraph className={styles.text}>
            Необходимость определять схожесть двух фраз возникла при решении одной небольшой практической
          </Paragraph>
          <Link to="#" className={styles.link}>
            <Paragraph className={styles['link-text']}>Читать дальше</Paragraph>
            <ArrowReadNext />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ArticleBlock
