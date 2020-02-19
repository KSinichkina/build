# test-project Build

Build test project configuration with:

- yarn
- prettier
- ESLint
- precommit
- lerna
- react-test-lib
- cypress
- storybook
- dev/prod builds


## Before usage start Node Server

```sh
node node.js
```

## Building and running on localhost

First install dependencies:

```sh
yarn
```

To run in hot module reloading mode:

```sh
yarn start
```

To create a production build:

```sh
yarn build-prod
```

To create a development build:

```sh
yarn build-dev
```

## Running

Open the file `http://localhost:8080` in your browser
