import React from 'react';
import MiniCategory from '../components/MiniCategory';
import StoresList from '../components/StoresList';

const Stores = (props) => {
  return (
    <React.Fragment>
        <MiniCategory />
        {/* 매장 목록 맵돌리기 */}
        <StoresList />
    </React.Fragment>
  );
}

export default Stores;