import { RootState } from '@/app/providers/StoreProvider/config/store'

export const selectNumberOfPage = (state: RootState) => state.pagination.numberOfPage
