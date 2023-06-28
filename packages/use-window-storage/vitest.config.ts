import { defineConfig, configDefaults } from 'vitest/config'
import typescript from '@rollup/plugin-typescript'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json')
    })
  ],
  test: {
    globals: true,
    exclude: [...configDefaults.exclude],
    environment: 'jsdom',
    setupFiles: './__tests__/setup.ts'
  }
})
