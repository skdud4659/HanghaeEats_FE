import React from 'react';
import {Grid, Text} from '../elements';
import styled from 'styled-components'

//이모지
import { FaShoppingBasket } from "react-icons/fa";

const ReviewWrite = (props) => {
  return (
    <React.Fragment>
      <P>만족도 평가 및 리뷰</P>
      <Grid margin="3% 0px">
        <Grid is_flex>
          <FaShoppingBasket style={{width:"30px", height:"30px", borderRadius:"50%", backgroundColor:"#23c8ff", color:"white", padding:"10px"}}/>
          <Text margin="0px 0px 0px 10px" width="15%" size="23px" bold>음식 평가</Text>
          <Grid></Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const P = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  padding-bottom: 20px;
`; 
export default ReviewWrite;