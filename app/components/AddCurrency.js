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
import Proptypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import { Button, Grid, Icon, Dropdown } from 'semantic-ui-react';
import currenciesDescription from '../containers/HomePage/currenciesDescription';

/* eslint-disable react/prefer-stateless-function */
class AddCurrency extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      value: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleClick = () => {
    this.setState({ isVisible: true });
  };

  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCurrency(this.state.value);
    this.setState({ isVisible: false });
  };

  generateOptions = () => {
    const result = [];
    Object.entries(currenciesDescription).forEach(entry => {
      const currency = entry[0];
      if (!this.props.data.includes(currency)) {
        result.push({ key: currency, value: currency, text: currency });
      }
    });
    return result;
  };

  render() {
    const options = this.generateOptions();
    const { isVisible } = this.state;
    return (
      <div>
        {!isVisible && (
          <Button fluid onClick={this.toggleClick}>
            <Icon name="add" />
            Add More Currencies
          </Button>
        )}
        {isVisible && (
          <Grid>
            <Grid.Row>
              <Grid.Column width="12">
                <Dropdown
                  placeholder="Select Country"
                  fluid
                  search
                  selection
                  options={options}
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column width="4">
                <Button fluid onClick={this.handleSubmit}>
                  Submit
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </div>
    );
  }
}

AddCurrency.propTypes = {
  data: Proptypes.array,
  addCurrency: Proptypes.func,
};

export default AddCurrency;
