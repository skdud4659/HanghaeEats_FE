import React from 'react';
import MiniCategory from '../components/MiniCategory';
import StoresList from '../components/StoresList';

import {useSelector} from 'react-redux';

import PaginationPage from '../components/Pagination';

const AllStores = (props) => {
  //configStore의 store와 변수명이 같아서 stores임!
  const store_list = useSelector((state) => state.stores.stores)

  return (
    <React.Fragment>
        <MiniCategory />
        {/* 매장 목록 맵돌리기 */}
        {store_list.map((s, idx) => {
          return <StoresList key={s._id} {...s}/>
        })}
        <PaginationPage />
    </React.Fragment>
  );
}

export default AllStores;