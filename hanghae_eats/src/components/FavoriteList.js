import React from 'react';
import {Grid, Text, Image} from '../elements';
import {useSelector} from 'react-redux';
import {history} from '../redux/configStore';

//이모지
import { FaStar} from "react-icons/fa";

const FavoriteList = (props) => {
  const store_list = useSelector((state) => state.stores.stores)
  const store_idx = store_list.findIndex((s) => s._id === props.f)
  const store_info = store_list[store_idx]

  // 별점 소수점 첫째자리까지
  const rateStar = store_info.avgStar==="0" ? 0 : Number(store_info.avgStar).toFixed(1)

  //각 매장으로 이동
  const storeBtn = () => {
    history.push(`/storeDetail/${props.f}`)
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="2%" _onClick={storeBtn}>
        {/* 매장 이미지 */}
        <Image back_size="cover" width="110%" height="150px"src={store_info.image}/>
        {/* 매장 이름, 별점(후기 수) */}
        <Grid margin="0px 3%">
          <Text bold size="25px" margin="1% 0px">{store_info.name}</Text>
          <Grid is_flex margin="1% 0px">
            <FaStar color={'#f7d57f'} size="30px"/>
            <Text margin="0px 1%">{rateStar}({store_info.orders})</Text>
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