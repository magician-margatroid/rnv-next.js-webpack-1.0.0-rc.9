Sample Next.js app with ReNative 1.0.0-rc9, where webpack configs in [next.config.js](next.config.js) do **not** take effect, so bundling will fail with following error:
```log
  Error: Module not found: Can't resolve 'fs/promises'

  Import trace for requested module:
    ./node_modules/@sap-cloud-sdk/connectivity/dist/http-agent/index.js
    ./node_modules/@sap-cloud-sdk/connectivity/dist/index.js
    ./src/app/index.tsx
    ./src/pages/index.tsx

  https://nextjs.org/docs/messages/module-not-found
```

## Development
1. `nvm use` to use node 18
1. `yarn` with yarn@1 to install dependencies.
1. `yarn start` to run the app
1. Visit http://localhost:8091 in browser.
1. Building will fail with error above.