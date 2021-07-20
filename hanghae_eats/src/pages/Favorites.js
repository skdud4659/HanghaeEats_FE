import React from 'react';
import FavoriteList from '../components/FavoriteList';
import {Grid, Text} from '../elements';
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'; 

import {getAllLikeDB} from '../redux/modules/favorite';
import {getAllStoreDB} from '../redux/modules/store';

const Favorites = (props) => {
  const dispatch = useDispatch()
  const favorite_list = useSelector((state) => state.favorite.favorite_list)

  React.useEffect(() => {
    dispatch(getAllStoreDB())
    dispatch(getAllLikeDB())
  },[])

  return (
    <React.Fragment>
      <Wrap>
        <P>즐겨찾기</P>
        <Grid margin="0px 0px 2% 0px">
          <Text bold size="20px">총 {favorite_list.length}개</Text>
        </Grid>
      </Wrap>
      {/* 즐겨찾기 맵돌리기*/}
      {favorite_list.map((f, idx) => {
        return <FavoriteList key={f.idx} {...{f}}/>
      })}
    </React.Fragment>
  );
}

const Wrap = styled.div`
  border-bottom: 0.5vw solid #E5E5E5;
`;

const P = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  padding-bottom: 20px;
`;
export default Favorites;