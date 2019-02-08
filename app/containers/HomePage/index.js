/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import CurrencyCard from '../../components/CurrencyCard';
import InputAmount from '../../components/InputAmount';
import AddCurrency from '../../components/AddCurrency';

// to enable cors, in development environment
const API =
  process.env.API_URL ||
  'https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
      currencies: [
        'CAD',
        'IDR',
        'GBP',
        'CHF',
        'SGD',
        'INR',
        'MYR',
        'JPY',
        'KRW',
      ],
      amount: 10.0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  async fetch(method, endpoint, body) {
    try {
      const response = await fetch(`${API}${endpoint}`, {
        method,
        body: body && JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async getCurrency() {
    this.setState({
      isLoading: false,
      data: await this.fetch('get', 'latest?base=USD'),
    });
    console.log(this.state.data);
  }

  addCurrency = currency => {
    this.setState(prevState => ({
      currencies: [...prevState.currencies, currency],
    }));
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleDelete = (e, { name }) => {
    // const data = this.state.currencies.filter(i => i !== name);
    e.preventDefault();
    this.setState(prevState => {
      let data = prevState.currencies;
      data = data.filter(i => i !== name);

      return { currencies: data };
    });
  };

  render() {
    const { data, isLoading, currencies, amount } = this.state;
    return (
      <div>
        <Container text>
          {isLoading && (
            <div>
              <Dimmer inverted active>
                <Loader>Loading</Loader>
              </Dimmer>
            </div>
          )}
          <InputAmount handleChange={this.handleChange} amount={amount} />
          {data &&
            currencies.map(currency => (
              <div>
                <CurrencyCard
                  key={currency}
                  currency={currency}
                  rate={data.rates[currency]}
                  amount={amount}
                  handleDelete={this.handleDelete}
                />
              </div>
            ))}
          <AddCurrency data={currencies} addCurrency={this.addCurrency} />
        </Container>
      </div>
    );
  }
}
