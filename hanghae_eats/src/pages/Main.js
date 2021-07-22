import React from 'react';
import Search from '../components/Search';
import Promotion from '../components/Promotion';
import Category from '../components/Category';
import MiniCategory from '../components/MiniCategory';
import {Grid} from '../elements';

import {useSelector} from 'react-redux';
import StoresList from '../components/StoresList'

const Main = (props) => {
  const is_search = useSelector((state) => state.stores.is_search)
  const search_list = useSelector((state) => state.stores.search_list)

  // 검색했을 때
  if(is_search) {
    return (
      <React.Fragment>
        {/* 검색창 */}
        <Search />
        {/* 동그라미 미니 카테고리 */}
        <Grid margin="3% auto">
          <MiniCategory/>
        </Grid>
        {/* 매장 맵돌리기 */}
        {search_list.map((s, idx) => {
        return <StoresList key={s._id} {...s}/>
        })}
      </React.Fragment>
    )
  }

  //기본 메인화면
  return (
    <React.Fragment>
      {/* 검색창 */}
        <Search />
        {/* 프로모션 슬라이드 */}
        <Promotion />
        {/* 카테고리 */}
        <Category />
    </React.Fragment>
  );
}

export default Main;