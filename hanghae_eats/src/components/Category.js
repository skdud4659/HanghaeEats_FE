import React from 'react';
import { Grid, Image, Text } from '../elements';
import { history } from '../redux/configStore';

const Category = (props) => {
  return (
    <React.Fragment>
      <Grid>
        {/* 1열 */}
        <Grid is_flex margin="5% 0%">
          {/* 치킨 */}
          <Grid align="center" width="45%">
              <Image
                back_size="cover"
                _onClick={() => {history.push('/stores/chicken')}}
                cursor margin="0% 0% 2% 0%" height="250px" src="https://i.pinimg.com/564x/08/e5/8a/08e58ae73d00d466360e84cda6cd868e.jpg"/>
            <Text size="22px" bold width="auto" >치킨</Text>
          </Grid>
          {/* 족발/보쌈 */}
          <Grid align="center" width="45%">
              <Image
              back_size="cover"
              _onClick={() => {history.push('/stores/jokbal')}}
              cursor margin="0% 0% 2% 0%" height="250px" src="https://i.pinimg.com/564x/05/e9/3e/05e93e646df7356c3d5ce948416488ae.jpg"/>
            <Text size="22px" bold width="auto" >족발/보쌈</Text>
          </Grid>
        </Grid>
        {/* 2열 */}
        <Grid is_flex margin="5% 0%">
          {/* 중식 */}
          <Grid align="center" width="45%">
              <Image
              back_size="cover"
              _onClick={() => {history.push('/stores/chinese')}}
              cursor margin="0% 0% 2% 0%" height="250px" src="https://i.pinimg.com/564x/98/8e/b7/988eb734dd17a5107ed8bfc7900e3a3e.jpg"/>
            <Text size="22px" bold width="auto" >중식</Text>
          </Grid>
          {/* 일식 */}
          <Grid align="center" width="45%">
              <Image
              back_size="cover"
              _onClick={() => {history.push('/stores/japanese')}}
              cursor margin="0% 0% 2% 0%" height="250px" src="https://i.pinimg.com/564x/01/8b/43/018b434d6696b99595f116003775b4eb.jpg"/>
            <Text size="22px" bold width="auto" >일식</Text>
          </Grid>
        </Grid>
        {/* 3열 */}
        <Grid is_flex margin="5% 0%">
          {/* 피자 */}
          <Grid align="center" width="45%">
              <Image
              back_size="cover"
              _onClick={() => {history.push('/stores/pizza')}}
              cursor margin="0% 0% 2% 0%" height="250px" src="https://i.pinimg.com/474x/9f/08/c1/9f08c1375157edbead237fbac9ed5f7c.jpg"/>
            <Text size="22px" bold width="auto" >피자</Text>
          </Grid>
          {/* 패스트푸드 */}
          <Grid align="center" width="45%">
            <Image
            back_size="cover"
            _onClick={() => {history.push('/stores/fastfood')}}
            cursor margin="0% 0% 2% 0%" height="250px" src="https://i.pinimg.com/564x/e3/e5/b0/e3e5b0ed2b932874e435ce1e06413969.jpg"/>
            <Text size="22px" bold width="auto" >패스트푸드</Text>
          </Grid>
        </Grid>
        {/* 4열 */}
        <Grid is_flex margin="5% 0%">
          {/* 분식 */}
          <Grid align="center" width="45%">
              <Image
              back_size="cover"
              _onClick={() => {history.push('/stores/bunsik')}}
              cursor margin="0% 0% 2% 0%" height="250px" src="https://i.pinimg.com/564x/c5/7e/a3/c57ea38ddd52d8d4c115d04d6bb965ae.jpg"/>
            <Text size="22px" bold width="auto" >분식</Text>
          </Grid>
          {/* 디저트 */}
          <Grid align="center" width="45%">
              <Image
              back_size="cover"
              _onClick={() => {history.push('/stores/dessert')}}
              cursor margin="0% 0% 2% 0%" height="250px" src="https://i.pinimg.com/564x/29/80/44/298044b73bacb4cab2a811468649596c.jpg"/>
            <Text size="22px" bold width="auto" >디저트</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Category