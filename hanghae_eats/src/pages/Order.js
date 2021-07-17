import React from 'react';
import styled from 'styled-components';
import {Grid, Text} from '../elements';

const Order = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <P>과거 주문 내역</P>
      </Grid>
    </React.Fragment>
  );
}

const P = styled.p`
  border-bottom: 2px solid black;
`;

export default Order;