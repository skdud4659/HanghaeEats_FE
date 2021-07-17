import React from 'react';
import styled from 'styled-components';
import {Grid, Image, Button, Text} from '../elements';

//별이모지
import {faStar, faHeart, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StoreDetailInfo = (props) => {
  const {name, image, avgStar, orders, countStar} = props

  return (
    <React.Fragment>
      <Grid>
        <Icons>
          <Grid width="auto" margin="0px">
            <FontAwesomeIcon icon={faHeart} size="2x" color={'#fb6c89'}/>
          </Grid>
          <Grid width="auto" margin="0px 2%">
            <FontAwesomeIcon icon={faExternalLinkAlt} size="2x"/>
          </Grid>
        </Icons>
      {/* 매장 정보 */}
        <Grid>
          <Image height="200px" src={props.image}/>
          <Info>
            <Text size="30px" bold>{props.name}</Text>
            <Grid is_flex width="20vmin" height="50%">
              <FontAwesomeIcon icon={faStar} size="2x" color={'#ffdd21'}/>
              <Grid is_flex margin="0px">
                <Text >{props.avgStar}</Text>
                <Text color={'#50A0FF'} bold>주문 {props.orders}회 </Text>
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