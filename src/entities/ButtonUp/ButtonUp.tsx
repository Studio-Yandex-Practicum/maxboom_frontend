import { Button } from '@/shared/ui/Button/Button'
import { FC } from 'react'

export type PropsButtonUp = {
  Icon: string
}
const ButtonUp: FC<PropsButtonUp> = ({ Icon }) => {
  return (
    <div className="top-to-btm">
      <Button>
        <Icon />
      </Button>
    </div>
  )
}

export default ButtonUp
