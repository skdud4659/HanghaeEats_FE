import React from 'react';
import styled from 'styled-components';
import {Text, Grid} from '../elements';

const ReviewMenuItem = (props) => {

  return (
    <React.Fragment>
        <P width="8vmin" margin="0px">{props.name}</P>
    </React.Fragment>
  );
}

const P = styled.p`
  width:8vmin;
  margin:0px;

  @media only screen and (max-width:500px) {
    width:20vmin;
    font-size: 15px;
  }
`;

export default ReviewMenuItem;