import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: 'cypress/fixtures',
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,
  requestTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173/',
    specPattern: 'cypress/tests/*.{coffee,feature,features,spec.js}',
    supportFile: 'cypress/support/e2e.ts',
    watchForFileChanges: false,
  },
});
