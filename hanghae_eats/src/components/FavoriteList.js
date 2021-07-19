import React from 'react';
import {Grid, Text, Image} from '../elements';

//이모지
import { FaStar} from "react-icons/fa";

const FavoriteList = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex padding="2%">
        {/* 매장 이미지 */}
        <Image width="30%" height="150px"src="https://blog.kakaocdn.net/dn/bZXBw8/btqZefYyrZx/EZ4Zo0gm3HUdeM6ky4kfHK/img.png"/>
        {/* 매장 이름, 별점(후기 수) */}
        <Grid margin="0px 3%">
          <Text bold size="25px" margin="1% 0px">엔티엔즈먹고싶어</Text>
          <Grid is_flex margin="1% 0px">
            <FaStar color={'#f7d57f'} size="4%"/>
            <Text margin="0px 1%">4.8(992)</Text>
            <Grid></Grid>
          </Grid>
          <Text size="15px">항해 깊숙한 바닷속km · 배달비 2000원</Text>
        </Grid>
      </Grid>
      <hr style={{ border: "1px solid #f9f9f9" }}/>
    </React.Fragment>
  );
}

export default FavoriteList;