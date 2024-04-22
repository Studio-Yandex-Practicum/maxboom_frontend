import { useSelector } from 'react-redux'

import { StateSchema } from '@/app/providers/StoreProvider'

export const useCartSelector = () => useSelector((store: StateSchema) => store.cartEntity)
