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
import { Container } from 'semantic-ui-react';
import CurrencyCard from '../../components/CurrencyCard';
import InputAmount from '../../components/InputAmount';
import AddCurrency from '../../components/AddCurrency';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Container text>
          <InputAmount />
          <CurrencyCard />
          <AddCurrency />
        </Container>
      </div>
    );
  }
}
