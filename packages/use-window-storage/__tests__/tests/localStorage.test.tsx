import React from 'react'
import { renderHook, act } from '@testing-library/react'
import { WindowStorageProvider, useWindowStorage } from '../../src'

const wrapper = ({ children }) => <WindowStorageProvider>{children}</WindowStorageProvider>
const renderWindowStorageHook = () => {
  const { result } = renderHook(() => useWindowStorage<any, any>(), { wrapper })
  return result.current.localStorage
}

describe('localStorage test', () => {
  /* constants */
  const LOCAL_STORAGE_KEY1 = 'key1'
  const LOCAL_STORAGE_KEY2 = 'key2'
  const LOCAL_STORAGE_KEY3 = 'key3'
  const TEST_OBJECT_VALUE = {
    name: 'eddie',
    gender: 'male',
    age: 10,
    address: {
      city: 'seoul',
      phone: {
        home: '02123123',
        mobile: '0102123123'
      }
    }
  }

  describe('useWindowStorage test', () => {
    it('expect error when Provider is not registered', () => {
      expect(() => renderHook(() => useWindowStorage())).toThrowError(/Provider should be registered./)
    })
  })

  describe('localStorage get test', () => {
    it('get primitive value test', () => {
      const localStorage = renderWindowStorageHook()
      const LOCAL_STORAGE_KEY1 = 'key1'
      act(() => {
        localStorage.set(LOCAL_STORAGE_KEY1, 1)
      })
      expect(localStorage.get(LOCAL_STORAGE_KEY1)).toBe(1)
    })
    it('get object value test', () => {
      const localStorage = renderWindowStorageHook()
      const LOCAL_STORAGE_KEY1 = 'key1'
      act(() => {
        localStorage.set(LOCAL_STORAGE_KEY1, 1)
      })
      expect(localStorage.get(LOCAL_STORAGE_KEY1)).toBe(1)
    })
  })

  describe('localStorage set test', () => {
    it('set primitive value test', () => {
      const localStorage = renderWindowStorageHook()
      act(() => {
        localStorage.set(LOCAL_STORAGE_KEY1, 1)
      })
      expect(localStorage.get(LOCAL_STORAGE_KEY1)).toBe(1)
      act(() => {
        localStorage.set(LOCAL_STORAGE_KEY1, 2)
      })
      expect(localStorage.get(LOCAL_STORAGE_KEY1)).toBe(2)
    })
    it('set object value test', () => {
      const localStorage = renderWindowStorageHook()
      act(() => {
        localStorage.set(LOCAL_STORAGE_KEY1, TEST_OBJECT_VALUE)
      })
      expect(localStorage.get(LOCAL_STORAGE_KEY1)).toEqual(TEST_OBJECT_VALUE)
    })
  })

  describe('localStorage clear test', () => {
    it('clear specific key test', () => {
      const localStorage = renderWindowStorageHook()
      act(() => {
        localStorage.set(LOCAL_STORAGE_KEY1, 1)
        localStorage.set(LOCAL_STORAGE_KEY2, 2)
      })
      expect(localStorage.get(LOCAL_STORAGE_KEY1)).toBe(1)
      expect(localStorage.get(LOCAL_STORAGE_KEY2)).toBe(2)
      act(() => {
        localStorage.clear(LOCAL_STORAGE_KEY1)
      })
      expect(localStorage.get(LOCAL_STORAGE_KEY1)).toBeUndefined()
      expect(localStorage.get(LOCAL_STORAGE_KEY2)).toBe(2)
    })
  })

  describe('localStorage clearAll test', () => {
    it('localStorage clearAll test', () => {
      const localStorage = renderWindowStorageHook()
      act(() => {
        localStorage.set(LOCAL_STORAGE_KEY1, 1)
        localStorage.set(LOCAL_STORAGE_KEY2, 2)
        localStorage.set(LOCAL_STORAGE_KEY3, 3)
      })
      expect(localStorage.get(LOCAL_STORAGE_KEY1)).toBe(1)
      expect(localStorage.get(LOCAL_STORAGE_KEY2)).toBe(2)
      expect(localStorage.get(LOCAL_STORAGE_KEY3)).toBe(3)
      act(() => {
        localStorage.clearAll()
      })
      expect(localStorage.get(LOCAL_STORAGE_KEY1)).toBeUndefined()
      expect(localStorage.get(LOCAL_STORAGE_KEY2)).toBeUndefined()
      expect(localStorage.get(LOCAL_STORAGE_KEY3)).toBeUndefined()
    })
  })
})
