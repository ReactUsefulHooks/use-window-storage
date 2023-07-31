import React from 'react'
import { renderHook } from '@testing-library/react'
import { WindowStorageProvider, useWindowStorage } from '../../src'

const wrapper = ({ children }) => <WindowStorageProvider>{children}</WindowStorageProvider>

export const renderWindowStorageHook = () => {
  const { result } = renderHook(() => useWindowStorage<any, any>(), { wrapper })
  return result.current
}