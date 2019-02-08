/*
 * Input Amount
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import { Header, Grid, Form } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
class InputAmount extends React.PureComponent {
  render() {
    const { amount, handleChange } = this.props;
    return (
      <div>
        <Grid padded>
          <Grid.Row>
            <Grid.Column>
              <Header as="h3">USD - United States Dollar</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="10">
              <Header as="h4">USD</Header>
            </Grid.Column>
            <Grid.Column width="6">
              <Form>
                <Form.Input
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={handleChange}
                  step="0.01"
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

InputAmount.propTypes = {
  handleChange: PropTypes.func,
  amount: PropTypes.number,
};

export default InputAmount;
