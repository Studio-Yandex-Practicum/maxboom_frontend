import { StateSchema } from '@/app/providers/StoreProvider'

export const getCategoryListSelector = (state: StateSchema) => state.categoryList
