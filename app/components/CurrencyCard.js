import React from 'react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import { Card, Button, Header, Grid, Icon } from 'semantic-ui-react';
import currenciesDescription from '../containers/HomePage/currenciesDescription';

/* eslint-disable react/prefer-stateless-function */
class CurrencyCard extends React.PureComponent {
  calculateAmount = () => this.props.rate * this.props.amount;

  render() {
    const { rate, currency, handleDelete } = this.props;
    return (
      <div>
        <Card fluid id={currency} key={currency}>
          <Card.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column width="13">
                  <Header floated="right">{this.calculateAmount()}</Header>
                  <Card.Header>{currency}</Card.Header>
                  <Card.Meta>
                    {currency} - {currenciesDescription[currency]}
                  </Card.Meta>
                  <Card.Description>
                    1 USD = {currency} {rate}
                  </Card.Description>
                </Grid.Column>
                <Grid.Column width="3">
                  <Button icon name={currency} onClick={handleDelete}>
                    <Icon name="trash" />
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

CurrencyCard.propTypes = {
  rate: PropTypes.number,
  currency: PropTypes.string,
  amount: PropTypes.number,
  handleDelete: PropTypes.func,
};

export default CurrencyCard;
