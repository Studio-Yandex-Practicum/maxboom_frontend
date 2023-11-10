import React from 'react'
import styles from './articleBlock.module.scss'
import description from '../../assets/images/articleBlock/description.png'
import Heading, { HeadingType } from '../../shared/ui/Heading/Heading'
import Paragraph from '../../shared/ui/Paragraph/Paragraph'

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
            <svg
              className={`${styles.icon}`}
              width="21"
              height="10"
              viewBox="0 0 21 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_427)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.73101 3.97388H18.276L15.536 1.43988C15.4639 1.37539 15.4061 1.29645 15.3665 1.20818C15.3269 1.11992 15.3062 1.02431 15.306 0.927553C15.3057 0.830799 15.3257 0.735067 15.3649 0.646573C15.404 0.558078 15.4613 0.4788 15.533 0.413885C15.6841 0.276586 15.8808 0.200264 16.0849 0.19971C16.2891 0.199156 16.4862 0.274409 16.638 0.410885L20.72 4.18588C20.7923 4.2506 20.8501 4.32983 20.8897 4.4184C20.9292 4.50696 20.9497 4.60288 20.9497 4.69988C20.9497 4.79689 20.9292 4.89281 20.8897 4.98137C20.8501 5.06994 20.7923 5.14917 20.72 5.21388L16.638 8.98989C16.4862 9.12636 16.2891 9.20161 16.0849 9.20106C15.8808 9.20051 15.6841 9.12418 15.533 8.98689C15.4613 8.92197 15.404 8.84269 15.3649 8.7542C15.3257 8.6657 15.3057 8.56997 15.306 8.47322C15.3062 8.37646 15.3269 8.28085 15.3665 8.19259C15.4061 8.10432 15.4639 8.02538 15.536 7.96089L18.276 5.42689H1.73101C1.30001 5.42589 0.950012 5.09988 0.950012 4.69988C0.950012 4.29988 1.30001 3.97388 1.73101 3.97388Z"
                  fill="#4791FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_427">
                  <rect width="20" height="9" fill="white" transform="translate(0.950012 0.199707)" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ArticleBlock
