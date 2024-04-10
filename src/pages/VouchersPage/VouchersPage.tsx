import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import FormBuyGiftCertificate from '@/widgets/FormBuyGiftCertificate'

import styles from './VouchersPage.module.scss'

const VouchersPage = () => {
  return (
    <WrapperForMainContent>
      <section className={styles.vouchers}>
        <Heading type={HeadingType.MAIN} className={styles.title}>
          Купить подарочный сертификат
        </Heading>
        <FormBuyGiftCertificate />
      </section>
    </WrapperForMainContent>
  )
}

export default VouchersPage
