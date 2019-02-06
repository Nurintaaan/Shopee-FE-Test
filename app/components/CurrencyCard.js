import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Button, Header, Grid, Icon } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
export default class CurrencyCard extends React.PureComponent {
  render() {
    return (
      <div>
        <Card fluid>
          <Card.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column width="13">
                  <Header floated="right">10000000</Header>
                  <Card.Header>IDR</Card.Header>
                  <Card.Meta>IDR - Indonesian Rupiah</Card.Meta>
                  <Card.Description>1 USD = IDR 3424,223</Card.Description>
                </Grid.Column>
                <Grid.Column width="3">
                  <Button icon>
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
