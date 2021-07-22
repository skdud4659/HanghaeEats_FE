import React from 'react';
import {Text} from '../elements';

const ReviewMenuItem = (props) => {
  console.log(props)

  return (
    <React.Fragment>
      <Text width="8vmin" margin="0px">{props.name}</Text>
    </React.Fragment>
  );
}

export default ReviewMenuItem;