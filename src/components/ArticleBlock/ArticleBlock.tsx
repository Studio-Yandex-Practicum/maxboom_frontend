import styles from './articleBlock.module.scss'
import description from '@/assets/images/articleBlock/description.png'
import Arrow from '@/assets/images/articleBlock/arrow.svg'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

function ArticleBlock() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.article}`}>
        <img src={description} alt="интерьер" className={`${styles.image}`} />
        <div className={`${styles.wrapper}`}>
          <Heading type={HeadingType.NORMAL}>Уникальный магазин техники и гаджетов</Heading>
          <Paragraph className={styles.text}>
            На естественном языке сказать об одном и том же факте можно бесконечным числом способов. Можно переставлять
            слова местами, заменять их на синонимы, склонять по падежам (если говорим о языке с падежами) и тд.
          </Paragraph>
          <Paragraph className={styles.text}>
            Необходимость определять схожесть двух фраз возникла при решении одной небольшой практической
          </Paragraph>

          <a href="#" className={`${styles.link}`}>
            <p className={`${styles.text}`}>Читать дальше</p>
            <Arrow className={`${styles.icon}`} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ArticleBlock
