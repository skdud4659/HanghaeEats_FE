import React from 'react';
import styled from 'styled-components';
import {Grid, Image, Text} from '../elements';
import {history} from '../redux/configStore';
import {useDispatch} from 'react-redux';
import {getStoresDB} from '../redux/modules/store'

const MiniCategory = (props) => {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <Grid is_flex overflowX>
        <Grid margin="0% 3%" align="center">
          <AllBtn onClick={() => {history.push('/stores')}}>All</AllBtn>
          <Text>전체보기</Text>
        </Grid>
        <Grid margin="0% 3%" align="center">
          <Image
            is_circle
            _onClick={() => {
              history.push("/stores/chicken")
              dispatch(getStoresDB('chicken'))
            }}
            src="https://i.pinimg.com/564x/08/e5/8a/08e58ae73d00d466360e84cda6cd868e.jpg"/>
          <Text>치킨</Text>
        </Grid>

        <Grid margin="0% 3%" align="center">
          <Image
            is_circle
            _onClick={() => {
              history.push("/stores/jokbal")
              dispatch(getStoresDB('jokbal'))
            }}
            src="https://i.pinimg.com/564x/05/e9/3e/05e93e646df7356c3d5ce948416488ae.jpg"/>
          <Text>족발/보쌈</Text>
        </Grid>

        <Grid margin="0% 3%" align="center">
          <Image
            is_circle
            _onClick={
              () => {
                history.push("/stores/chinese")
                dispatch(getStoresDB('chinese'))
            }}
            src="https://i.pinimg.com/564x/98/8e/b7/988eb734dd17a5107ed8bfc7900e3a3e.jpg"/>
          <Text>중식</Text>
        </Grid>

        <Grid margin="0% 3%" align="center">
          <Image
            is_circle
            _onClick={
              () => {
                history.push("/stores/japanese")
                dispatch(getStoresDB('japanese'))
            }}
            src="https://i.pinimg.com/564x/01/8b/43/018b434d6696b99595f116003775b4eb.jpg"/>
          <Text>일식</Text>
        </Grid>

        <Grid margin="0% 3%" align="center">
          <Image
            is_circle
            _onClick={
              () => {
                history.push("/stores/pizza")
                dispatch(getStoresDB('pizza'))
            }}
            src="https://i.pinimg.com/474x/9f/08/c1/9f08c1375157edbead237fbac9ed5f7c.jpg"/>
          <Text>피자</Text>
        </Grid>

        <Grid margin="0% 3%" align="center">
          <Image
            is_circle
            _onClick={() => {
              history.push("/stores/fastfood")
              dispatch(getStoresDB('fastfood'))
            }}
            src="https://i.pinimg.com/564x/e3/e5/b0/e3e5b0ed2b932874e435ce1e06413969.jpg"/>
          <Text>패스트푸드</Text>
        </Grid>

        <Grid margin="0% 3%" align="center">
          <Image
            is_circle
            _onClick={
              () => {
                history.push("/stores/bunsik")
                dispatch(getStoresDB('bunsik'))
            }}
            src="https://i.pinimg.com/564x/c5/7e/a3/c57ea38ddd52d8d4c115d04d6bb965ae.jpg"/>
          <Text>분식</Text>
        </Grid>

        <Grid margin="0% 3%" align="center">
          <Image
            is_circle
            _onClick={() => {
              history.push("/stores/dessert")
              dispatch(getStoresDB('dessert'))
            }}
            src="https://i.pinimg.com/564x/29/80/44/298044b73bacb4cab2a811468649596c.jpg"/>
          <Text>디저트</Text>
        </Grid>      
      </Grid>
    </React.Fragment>
  );
}

const AllBtn = styled.button`
  width:100px;
  height: 100px;
  border-radius: 50%;
  background-color: #eaeceb;
  font-size: 18px;
  cursor: pointer;
`;

export default MiniCategory;