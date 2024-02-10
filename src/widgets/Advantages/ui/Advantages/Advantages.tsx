import AdvantageCard from '@/entities/AdvantageCard/ui/AdvantageCard/AdvantageCard'
import { advantagesData } from '@/mockData/advantagesData'

import styles from './advantages.module.scss'

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
