import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/', // TODO env
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: ['./cypress/e2e/1-getting-started', './cypress/e2e/2-advanced-examples']
  },
});
