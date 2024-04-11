import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { UserConfigExport } from 'vite'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [react()],
  })
}
export default app
