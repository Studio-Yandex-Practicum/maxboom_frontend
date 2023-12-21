import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema> // DeepPartial для Storybook
  children?: ReactNode
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { initialState, children } = props

  const store = createReduxStore(initialState as StateSchema) // кастуем DeepPartial

  return <Provider store={store}>{children}</Provider>
}
