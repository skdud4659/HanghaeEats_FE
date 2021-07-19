import React from 'react';
import FavoriteList from '../components/FavoriteList';
import {Grid, Text} from '../elements';
import styled from 'styled-components'

const Favorites = (props) => {
  return (
    <React.Fragment>
      <Wrap>
        <P>즐겨찾기</P>
        <Grid margin="0px 0px 2% 0px">
          <Text bold size="20px">총 1개</Text>
        </Grid>
      </Wrap>
      {/* 즐겨찾기 맵돌리기*/}
      <FavoriteList />
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