import { defineConfig } from 'vite'
import { UserConfigExport } from 'vitest/config'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import path from 'path'

export const config: UserConfigExport = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react']
    }
  },
  plugins: [
    peerDepsExternal(),
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json')
    })
  ]
}

export default defineConfig(config)
