import EmailIcon from '@/assets/icons/email.svg'
import TelegramIcon from '@/assets/icons/telegram.svg'
import ViberIcon from '@/assets/icons/viber.svg'
import WhatsAppIcon from '@/assets/icons/whatsapp.svg'

import { WHATSAPP_LINK, VIBER_LINK, TELEGRAM_LINK, EMAIL_LINK } from '../../constants/constants'

interface Messenger {
  title: string
  icon: string
  link: string
  id: number
}

export const messengerArray: Messenger[] = [
  { title: 'WhatsApp', icon: WhatsAppIcon, link: WHATSAPP_LINK, id: 0 },
  { title: 'Viber', icon: ViberIcon, link: VIBER_LINK, id: 1 },
  { title: 'Telegram', icon: TelegramIcon, link: TELEGRAM_LINK, id: 2 },
  { title: 'Email', icon: EmailIcon, link: EMAIL_LINK, id: 3 }
]
