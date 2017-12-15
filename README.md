# dictbot

[![Build Status](https://travis-ci.org/huijari/dictbot.svg?branch=master)](https://travis-ci.org/huijari/dictbot)[![license](https://img.shields.io/github/license/huijari/dictbot.svg)]()

Experiment of using redux in the backend

## Getting Started

dictbot is a dictionary/snippet bot for Telegram.

These instructions will get you a copy of the project on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

First, clone the repo

```sh
git clone https://github.com/huijari/dictbot
cd dictbot
```

Then install the dependencies

```sh
npm install
```

## Running the tests

The project has a npm script for running the tests with Jest:

```sh
npm test
```

## Devlopment

You can start the devlopment server, that uses micro-dev, using:

```sh
npm run dev
```

## Deployment

For deployment you need to set two environment variables, `PORT` in with the server will run, and `BOT_TOKEN` with is the Telegram token of your bot. To start the server use:

```sh
npm start
```

## Built With

* [redux](https://github.com/reactjs/redux)
* [immutable](https://github.com/facebook/immutable-js)
* [micro](https://github.com/zeit/micro)

And others that you can check in the [package.json](package.json) file.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
