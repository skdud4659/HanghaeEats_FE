import React from 'react';
import styled from 'styled-components';
import {Grid, Image, Button, Text} from '../elements';
import {useSelector, useDispatch} from 'react-redux';

//이모지
import { FaStar, FaHeart } from "react-icons/fa";
import { BiDownload, BiHeart } from "react-icons/bi";

//매장 정보 가져오기
import {getOneStoreDB} from '../redux/modules/store';
import { history } from '../redux/configStore';

//즐겨찾기
import {likeToggleDB, getLikeDB, unlikeToggleDB} from '../redux/modules/favorite';

const StoreDetailInfo = (props) => {
  const dispatch = useDispatch()
  const {name, image, avgStar, orders, countStar} = props
  const storeInfo = useSelector((state) => state.stores.store)

  const storeId = history.location.pathname.split('/')[2]

   //로드
  React.useEffect(() => {
    dispatch(getOneStoreDB(storeId))
    dispatch(getLikeDB(storeId))
  },[])

  // 별점 소수점 첫째자리까지
  const rateStar = Number(storeInfo.avgStar).toFixed(1)

   //즐겨찾기 버튼
  const is_like = useSelector((state) => state.favorite.is_like)
  //선택버튼
  const likeBtn = () => {
    dispatch(likeToggleDB(storeId))
  }
  //해제버튼
  const unlikeBtn = () => {
    dispatch(unlikeToggleDB(storeId))
  }

  return (
    <React.Fragment>
      <Grid>
        <Icons>
          <Grid width="auto" margin="0px">
          {/* color={'#fb6c89'} */}
          {is_like && <FaHeart size="40px" cursor="pointer" onClick={unlikeBtn} color={'#fb6c89'}/>}
          {!is_like && <BiHeart size="40px" cursor="pointer" onClick={likeBtn}/>}
          </Grid>
          <Grid width="auto" margin="0px 2%">
            <BiDownload size="40px" cursor="pointer"/>
          </Grid>
        </Icons>
      {/* 매장 정보 */}
        <Grid>
          <Image height="200px" src={storeInfo.image}/>
          <Info>
            <Text size="30px" bold>{storeInfo.name}</Text>
            <Grid is_flex width="20vmin" height="50%">
              <FaStar size="30px" color={'#ffdd21'}/>
              <Grid is_flex margin="0px">
                <Text margin="auto 3%">{rateStar}</Text>
                <Text color={'#50A0FF'} bold margin="auto 0px">주문 {storeInfo.orders}회 </Text>
              </Grid>
            </Grid>
          </Info>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

StoreDetailInfo.defaultProps = {
  name: "bhc",
  image: "https://www.kedglobal.com/data/ked/image/2020/12/17/ked202012170014.jpg",
  avgStar: "4",
  orders: 1034,
  countStar: 490
}

const Info = styled.div`
  width: 50%;
  height: 70px;
  position:relative;
  border: 1px solid gray;
  background-color: white;
  margin: -5.5% auto 0px auto;
  text-align: center;
  padding:2% 0%;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 1%;
`;

export default StoreDetailInfo;