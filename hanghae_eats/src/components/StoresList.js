import React from 'react';
import {history} from '../redux/configStore';
import {Grid, Image, Text} from '../elements'
import BeautyStars from 'beauty-stars';

import delivery from '../img/chita.jpg'

const StoresList = (props) => {
  const {name, image} = props

  //매장 상세 페이지로 이동버튼
  const storeBtn = () => {
    history.push(`/storeDetail/${name}`)
  }

  return (
    <React.Fragment>
      <Grid>
        <Grid margin="5% 0%">
          {/* 매장 : Stores에서 맵돌릴 예정 */}
          <Grid is_flex>
            <Image _onClick={storeBtn} margin="0% 0% 2% 0%" height="250px" src={props.image} cursor/>
            <Grid width="40%" margin="0px 5%">
              <Text size="22px" bold width="auto">{props.name}</Text>
              <Image is_slide width="35%" height="40px"src={delivery}/>
              <Text size="18px" width="auto" >1.1km · 배달비 2,000원</Text>
              <Grid width="30%" margin="4% 0%">
                <BeautyStars value={4} size="25px"/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

StoresList.defaultProps = {
  name: "bhc",
  image: "https://www.kedglobal.com/data/ked/image/2020/12/17/ked202012170014.jpg",
}

export default StoresList;