import React from 'react';
import Search from '../components/Search';
import Promotion from '../components/Promotion';
import Category from '../components/Category';

const Main = (props) => {
  return (
    <React.Fragment>
        <Search />
        <Promotion />
        <Category />
    </React.Fragment>
  );
}

export default Main;