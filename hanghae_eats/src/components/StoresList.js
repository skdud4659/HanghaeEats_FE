import React from 'react';
import {history} from '../redux/configStore';
import {Grid, Image, Text} from '../elements'
import BeautyStars from 'beauty-stars';

import delivery from '../img/chita.jpg'
import { useSelector } from 'react-redux';

const StoresList = (props) => {
  const {_id, image} = props
//매장 상세 페이지로 이동버튼
  const storeBtn = () => {
    history.push(`/storeDetail/${_id}`)
  }

  //별점
  const store_list = useSelector((state) => state.stores.stores)
  const store_idx = store_list.findIndex((s) => s._id === _id)
  const store_info = store_list[store_idx]
  const rateStar = Number(store_info.avgStar).toFixed(1)

  return (
    <React.Fragment>
      <Grid>
        <Grid margin="5% 0%">
          {/* 매장 : Stores에서 맵돌릴 예정 */}
          <Grid is_flex>
            <Image
              back_size="100% 100%"
              _onClick={storeBtn}
              margin="0% 0% 2% 0%"
              height="250px"
              src={props.image}
              cursor
              //모바일
              m_height="150px"
            />
            <Grid width="40%" margin="0px 5%">
              <Text size="22px" bold width="auto">{props.name}</Text>
              <Image
                back_size="cover"
                is_slide
                width="35%"
                height="40px"
                src={delivery}
                //모바일
                m_width="60px"
                m_height="20px"
            />
              <Text size="18px" width="auto" >항해 깊숙한 바닷속km · 배달비 2,000원</Text>
              <Grid width="30%" margin="4% 0%">
                <BeautyStars value={rateStar} size="25px" activeColor={'#f7d57f'}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

StoresList.defaultProps = {
  _id : "60f1d842fed5f51e64329954",
  image: "https://www.kedglobal.com/data/ked/image/2020/12/17/ked202012170014.jpg",
}

export default StoresList;