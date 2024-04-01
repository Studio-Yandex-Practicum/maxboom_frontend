import { useState } from 'react'

import ArrowReadNext from '@/assets/icons/ArrowReadNext.svg'
import description from '@/assets/images/articleBlock/description.png'
import { Button } from '@/shared/ui/Button/Button'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './articleBlock.module.scss'

function ArticleBlock() {
  const [openText, setTextOpened] = useState(false)
  function openTextHandler() {
    if (openText === true) {
      setTextOpened(false)
    } else {
      setTextOpened(true)
    }
  }

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
          {openText && (
            <div>
              <Paragraph className={styles.textHidden}>
                задачи. Я не использовал машинное обучение, не вил нейронные сети, но использовал простые
                метрики и собранную статистику для калибровки коэффициентов.
              </Paragraph>
              <Paragraph>
                На естественном языке сказать об одном и том же факте можно бесконечным числом способов. Можно
                переставлять слова местами, заменять их на синонимы, склонять по падежам (если говорим о языке
                с падежами) и тд.
              </Paragraph>
              <Paragraph>
                Необходимость определять схожесть двух фраз возникла при решении одной небольшой практической
                задачи. Я не использовал машинное обучение, не вил нейронные сети, но использовал простые
                метрики и собранную статистику для калибровки коэффициентов.
              </Paragraph>
              <Button onClick={() => openTextHandler()} className={styles.link}>
                Скрыть
                <ArrowReadNext className={styles.icon} />
              </Button>
            </div>
          )}

          {!openText && (
            <Button onClick={() => openTextHandler()} className={styles.link}>
              Читать дальше
              <ArrowReadNext />
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

export default ArticleBlock
