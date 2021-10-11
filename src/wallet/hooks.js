import { useMemo } from 'react'
import { toastTypes } from '@pancakeswap-libs/uikit'
import { useDispatch } from 'react-redux'
import {
  push as pushToast,
  remove as removeToast,
  clear as clearToast
} from './actions'

// Toasts
export const useToast = () => {
  const dispatch = useDispatch()
  const helpers = useMemo(() => {
    const push = (toast) => dispatch(pushToast(toast))

    return {
      toastError: (title, description) => {
        return push({ id: title, type: toastTypes.DANGER, title, description })
      },
      toastInfo: (title, description) => {
        return push({ id: title, type: toastTypes.INFO, title, description })
      },
      toastSuccess: (title, description) => {
        return push({ id: title, type: toastTypes.SUCCESS, title, description })
      },
      toastWarning: (title, description) => {
        return push({ id: title, type: toastTypes.WARNING, title, description })
      },
      push,
      remove: (id) => dispatch(removeToast(id)),
      clear: () => dispatch(clearToast()),
    }
  }, [dispatch])

  return helpers
}
