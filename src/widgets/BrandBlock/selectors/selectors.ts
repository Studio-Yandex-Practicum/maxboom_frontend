import { StateSchema } from '@/app/providers/StoreProvider'

export const brandSelector = (state: StateSchema) => state.brand.brands
