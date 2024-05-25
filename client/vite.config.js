import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'

dotenv.config({
  path:'../.env'
})

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':`http://localhost:${process.env.PORT}`
    }
  },
  plugins: [react()],
})
