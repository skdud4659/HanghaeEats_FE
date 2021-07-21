import React from 'react';
import MiniCategory from '../components/MiniCategory';
import StoresList from '../components/StoresList';

import {history} from '../redux/configStore';
import {useDispatch, useSelector} from 'react-redux';
import {getStores, getStoresDB} from '../redux/modules/store';

const Stores = (props) => {
  const dispatch = useDispatch();
  const category = (history.location.pathname).split('/')[2]
  //configStore의 store와 변수명이 같아서 stores임!
  const store_list = useSelector((state) => state.stores.stores)

  //카테고리별 store 로드
  React.useEffect(() => {
    dispatch(getStoresDB(category))
  },[])

  return (
    <React.Fragment>
        <MiniCategory category={category}/>
        {/* 매장 목록 맵돌리기 */}
        {store_list.map((s, idx) => {
          return <StoresList key={s._id} {...s}/>
        })}
    </React.Fragment>
  );
}

export default Stores;