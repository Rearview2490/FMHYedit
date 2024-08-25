//https://nitro.unjs.io/config
export default defineNitroConfig({
  runtimeConfig: {
    WEBHOOK_URL: process.env.WEBHOOK_URL
  },
  srcDir: 'api/',
  routeRules: {
    '/': {
      cors: false
    }
  }
})
