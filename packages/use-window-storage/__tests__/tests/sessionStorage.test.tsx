import { renderWindowStorageHook } from './utils'
import { renderHook, act } from '@testing-library/react'
import { useWindowStorage } from '../../src'

describe('sessionStorage test', () => {
  /* constants */
  const SESSION_STORAGE_KEY1 = 'key1'
  const SESSION_STORAGE_KEY2 = 'key2'
  const SESSION_STORAGE_KEY3 = 'key3'
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

  describe('sessionStorage get test', () => {
    it('get primitive value test', () => {
      const { sessionStorage } = renderWindowStorageHook()
      act(() => {
        sessionStorage.set(SESSION_STORAGE_KEY1, 1)
      })
      expect(sessionStorage.get(SESSION_STORAGE_KEY1)).toBe(1)
    })
    it('get object value test', () => {
      const { sessionStorage } = renderWindowStorageHook()
      act(() => {
        sessionStorage.set(SESSION_STORAGE_KEY1, 1)
      })
      expect(sessionStorage.get(SESSION_STORAGE_KEY1)).toBe(1)
    })
  })

  describe('sessionStorage set test', () => {
    it('set primitive value test', () => {
      const { sessionStorage } = renderWindowStorageHook()
      act(() => {
        sessionStorage.set(SESSION_STORAGE_KEY1, 1)
      })
      expect(sessionStorage.get(SESSION_STORAGE_KEY1)).toBe(1)
      act(() => {
        sessionStorage.set(SESSION_STORAGE_KEY1, 2)
      })
      expect(sessionStorage.get(SESSION_STORAGE_KEY1)).toBe(2)
    })
    it('set object value test', () => {
      const { sessionStorage } = renderWindowStorageHook()
      act(() => {
        sessionStorage.set(SESSION_STORAGE_KEY1, TEST_OBJECT_VALUE)
      })
      expect(sessionStorage.get(SESSION_STORAGE_KEY1)).toEqual(TEST_OBJECT_VALUE)
    })
  })

  describe('sessionStorage clear test', () => {
    it('clear specific key test', () => {
      const { sessionStorage } = renderWindowStorageHook()
      act(() => {
        sessionStorage.set(SESSION_STORAGE_KEY1, 1)
        sessionStorage.set(SESSION_STORAGE_KEY2, 2)
      })
      expect(sessionStorage.get(SESSION_STORAGE_KEY1)).toBe(1)
      expect(sessionStorage.get(SESSION_STORAGE_KEY2)).toBe(2)
      act(() => {
        sessionStorage.clear(SESSION_STORAGE_KEY1)
      })
      expect(sessionStorage.get(SESSION_STORAGE_KEY1)).toBeUndefined()
      expect(sessionStorage.get(SESSION_STORAGE_KEY2)).toBe(2)
    })
  })

  describe('sessionStorage clearAll test', () => {
    it('sessionStorage clearAll test', () => {
      const { sessionStorage } = renderWindowStorageHook()
      act(() => {
        sessionStorage.set(SESSION_STORAGE_KEY1, 1)
        sessionStorage.set(SESSION_STORAGE_KEY2, 2)
        sessionStorage.set(SESSION_STORAGE_KEY3, 3)
      })
      expect(sessionStorage.get(SESSION_STORAGE_KEY1)).toBe(1)
      expect(sessionStorage.get(SESSION_STORAGE_KEY2)).toBe(2)
      expect(sessionStorage.get(SESSION_STORAGE_KEY3)).toBe(3)
      act(() => {
        sessionStorage.clearAll()
      })
      expect(sessionStorage.get(SESSION_STORAGE_KEY1)).toBeUndefined()
      expect(sessionStorage.get(SESSION_STORAGE_KEY2)).toBeUndefined()
      expect(sessionStorage.get(SESSION_STORAGE_KEY3)).toBeUndefined()
    })
  })
})
