# Shopee Front End Test
by Nur Intan Alatas

This repository is created especially for applying Shopee :) Requirements is already given in shopee test explanation

### Quick Start
Make sure that you already installed docker, if you have not installed that, follow [this](https://docs.docker.com/engine/installation/) instructions.

To run the application you just simply run 
```sh
$ docker-compose build
```

and then 
```sh
$ docker-compose up
```

and this code will be running on `localhost:3000` for the frontend

`important`
If you encounter an error like this 
```sh
$ Couldn't connect to Docker daemon 
```
do not worry, you just need to add `sudo` at the first line of your command


### Tech

This app uses a number of cutting edge technology to work properly:

* [React JS](https://reactjs.org/) - using the most ~~hyped~~ powerful front-end library to create user interfaces
* [Semantic-ui-react](https://react.semantic-ui.com) - great UI boilerplate for modern web apps
* [React-Boilerplate](https://github.com/react-boilerplate/react-boilerplate) - a high-scalable boilerplate that consists of so many library for linting, hot-reload, etc
* [Docker](https://www.docker.com/) - for dockerize and make an isolated system for this app

### Project Structure
* `App/` 
    * `containers/`
        * `Homepage.js` - home page that consist of several component
        * `currenciesDescription.js` - contains all listed currencies
    * `components/`
        * `AddCurrency.js`- Component to add currency
        * `CurrencyCard.js` - Wrapped Card for list currency
        * `InputAmount.js` - Component for change the initial amount
* `Internals/` - this folder contains the engine of this app
* `Server/` - this folder contains development and production server configuration
This is the [Detailed Structure](https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/general/introduction.md) explanation
