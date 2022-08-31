# Salestrekker Australian challenge

This repository is about a front-end challenge for an Australian company.

## About the Journey

You'll find more details about my journey in the [`docs/JOURNEY.md`](https://github.com/pedroSoaresll/salestrekker-australian-challenge/blob/main/docs/JOURNEY.md)

## Screenshots

See the app screenshots in the [`docs/SCREENSHOTS.md`](https://github.com/pedroSoaresll/salestrekker-australian-challenge/blob/main/docs/SCREENSHOTS.md)

## Deployment

This app was deployed into Vercel. Every push to the branch main will trigger a new deployment to the production environment.

[Access the app in the production environment](https://salestrekker-australian-challenge.vercel.app/)

> Note: HTTPS is by default defined for the domain. :)

## Unit Tests Coverage

See the unit tests coverage in the [`docs/UNIT_TEST_COVERAGE.md`](https://github.com/pedroSoaresll/salestrekker-australian-challenge/blob/main/docs/UNIT_TEST_COVERAGE.md)

## Build Analysis

See the building analysis in the [`docs/BUILD_ANALYSIS.md`](https://github.com/pedroSoaresll/salestrekker-australian-challenge/blob/main/docs/BUILD_ANALYSIS.md)

## Install locally

> Note: the engine necessary to work with this application is `node: v16.17.0` and `yarn: 1.22.x`

Install the dependencies

```sh
yarn
```

Start the app

```sh
yarn start
```

Run the tests

```sh
yarn test
```

Check linters

```sh
yarn lint
```

Check code format

```sh
yarn format
```

> Note: on a CI environment the tests will be ran in headless mode

Build the app

```sh
yarn build
```

> Note: to build the app for a production environment you need to pass the `NODE_ENV=production` environment variable in your CD (continuous deployment) environment
