import React from 'react';
import Search from '../components/Search';
import Promotion from '../components/Promotion';
import Category from '../components/Category';

import {useSelector} from 'react-redux';
import StoresList from '../components/StoresList'

const Main = (props) => {
  const is_search = useSelector((state) => state.stores.is_search)
  const search_list = useSelector((state) => state.stores.search_list)

  if(is_search) {
    return (
      <React.Fragment>
        <Search />
        {search_list.map((s, idx) => {
        return <StoresList key={s._id} {...s}/>
        })}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
        <Search />
        <Promotion />
        <Category />
    </React.Fragment>
  );
}

export default Main;