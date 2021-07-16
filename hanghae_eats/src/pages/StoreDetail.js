import React from 'react';
import styled from 'styled-components';
import StoreDetailInfo from '../components/StoreDetailInfo';
import ReviewList from '../components/ReviewList';
import Menu from '../components/Menu';

import { Grid, Text } from '../elements';


const StoreDetail = (props) => {
  return (
    <React.Fragment>
        <StoreDetailInfo />
        <Grid is_flex margin="5% 0%" width="25%">
          <Grid width="auto" margin="0px">
            <Text>배달비</Text>
            <Text>최소주문</Text>
          </Grid>
          <Grid width="auto" margin="0px">
            <Text>2,000원 <Detail>자세히</Detail></Text>
            <Text>15,000원</Text>
          </Grid>
        </Grid>
        {/* 리뷰 맵돌리기 */}
        <ReviewList />
        <hr/>
        {/* 메뉴 맵돌리기 */}
        <Menu />
    </React.Fragment>
  );
}

const Detail = styled.span`
  font-size: 16px;
  color:gray;
`;


export default StoreDetail;