import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://staging.deriv.com',
  },
  env: {
    email: 'test@example.com',
  },
})
