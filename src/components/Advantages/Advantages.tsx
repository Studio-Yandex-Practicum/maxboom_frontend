import styles from './advantages.module.scss'
import AdvantageCard from '../AdvantageCard/AdvantageCard'
import { advantagesData } from '../../mockData/advantagesData'

function Advantages() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.cards}`}>
        {advantagesData.map((item, index) => (
          <AdvantageCard key={index} image={item.image} alt={item.alt} name={item.name}></AdvantageCard>
        ))}
      </div>
    </section>
  )
}
export default Advantages
