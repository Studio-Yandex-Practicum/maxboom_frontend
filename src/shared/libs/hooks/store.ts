import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/app/providers/SroreProvider/config/store'

// export type AppStoreState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
