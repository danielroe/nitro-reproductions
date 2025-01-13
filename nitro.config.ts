// https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  bundledStorage: ['locales'],
  hooks: {
    'rollup:before': async nitro => {
      console.log('Writing LOCALES to the storage')
      await nitro.storage.setItem('locales:general:en', {
        hello: "Hello, World!",
      })
      console.log('LOCALES written to the storage')
    },
  },
});
