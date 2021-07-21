import React from 'react';
import {Text, Grid} from '../elements';
import {useSelector} from 'react-redux';

const ReviewMenuItem = (props) => {
  console.log(props)

  const menu_list = useSelector((state) => state.stores.menus)
  const menu_idx = menu_list.findIndex((l) => l._id === props.m)
  const menu_name = menu_list[menu_idx].name

  return (
    <React.Fragment>
      <Text width="8vmin" margin="0px">{menu_name}</Text>
    </React.Fragment>
  );
}

export default ReviewMenuItem;