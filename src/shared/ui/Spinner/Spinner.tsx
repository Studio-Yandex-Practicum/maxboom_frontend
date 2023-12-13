import styles from './Spinner.module.scss'

/**
 * Компонент для отображения процесса загрузки.
 * Используй компонент в fallback компонента Suspense.
 */
const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle1}>
        <div className={styles.wave}></div>
      </div>
      <div className={styles.circle2}>
        <div className={styles.wave}></div>
      </div>
      <div className={styles.circle3}>
        <div className={styles.wave}></div>
      </div>
      <div className={styles.circle4}>
        <div className={styles.wave}></div>
      </div>
      <div className={styles.circle5}>
        <div className={styles.wave}></div>
      </div>
    </div>
  )
}

export default Spinner
