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
import { Button, Grid, Icon, Dropdown } from 'semantic-ui-react';

const newLocal = { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' };
const countryOptions = [newLocal];

/* eslint-disable react/prefer-stateless-function */
export default class AddCurrency extends React.PureComponent {
  render() {
    return (
      <div>
        <Button fluid>
          <Icon name="add" />
          Add More Currencies
        </Button>
        <Grid padded>
          <Grid.Row>
            <Grid.Column width="10">
              <Dropdown
                placeholder="Select Country"
                fluid
                search
                selection
                options={countryOptions}
              />
            </Grid.Column>
            <Grid.Column width="6">
              <Button fluid>Submit</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
