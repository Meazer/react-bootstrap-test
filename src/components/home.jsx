import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <h1>Home Page</h1>
          <Link to='/about'>
            <Button bsStyle='primary'> About </Button>
          </Link>
        </Grid>
      </div>
    )
  }
}