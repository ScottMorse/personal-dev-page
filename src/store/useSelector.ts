
import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux'

import { RootStoreState } from './reducer'

export const useSelector = _useSelector  as TypedUseSelectorHook<RootStoreState>