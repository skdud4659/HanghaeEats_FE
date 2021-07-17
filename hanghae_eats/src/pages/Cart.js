import React from "react";
import styled from "styled-components";
import { Grid, Input, Button, Text, Image } from "../elements";
import { history } from "../redux/configStore";

//치타 이미지
import chita from "../img/chita.jpg";

//삭제 icon
import { HiX } from "react-icons/hi";

const Cart = (props) => {

  return (
    <React.Fragment>
      <Grid padding="16px" bg="#E5E5E5">
        <Grid padding="16px 0px" bg="#ffffff">
          <Text margin="8px 20px" bold>
            집(으)로 배달
          </Text>
          <Text margin="8px 20px" size="15">
            세부 주소
          </Text>
        </Grid>

        <Grid height="1vw" bg="#E5E5E5" />

        <Grid padding="8px 0px" bg="#ffffff">
          <Grid is_flex>
            <Text margin="8px 20px" bold>
              쥬시프레소 가야점
            </Text>
            <Image
              is_slide
              width="30%"
              height="30px"
              margin="8px"
              src={chita}
            />
          </Grid>

          <hr style={{ border: "1px solid #E5E5E5" }} />

          <Grid padding="8px 0px">
            <Grid is_flex>
              <Text margin="8px 20px">메뉴이름</Text>
              <Grid width="true" margin="8px 20px">
                <HiX />
              </Grid>
            </Grid>
            <Grid is_flex>
              <Text margin="8px 20px"> 가격</Text>
              <Grid width="true" margin="8px 20px">
                <select name="count">
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                    <option value="4" >4</option>
                    <option value="5" >5</option>
                    <option value="6" >6</option>
                    <option value="7" >7</option>
                    <option value="8" >8</option>
                    <option value="9" >9</option>
                    <option value="10+">10+</option>
                  </select>
              </Grid>
            </Grid>
            <hr style={{ border: "1px solid #E5E5E5" }}/>
            <Grid align="center" padding="15px 0px">
              <Text bold color="#50A0FF">
                + 메뉴추가
              </Text>
            </Grid>
          </Grid>

          <Grid height="1vw" bg="#E5E5E5" />

          <Grid padding="8px 0px" bg="#ffffff">
            <Grid is_flex>
              <Text margin="8px 20px"> 주문금액 </Text>
              <Text margin="8px 20px"> 가격원 </Text>
            </Grid>

            <Grid is_flex>
              <Text margin="8px 20px"> 배달비 </Text>
              <Text margin="8px 20px"> + 1,000원 </Text>
            </Grid>

            <hr style={{ border: "1px solid #E5E5E5" }} />

            <Grid is_flex padding="15px 0px">
              <Text margin="8px 20px" bold> 총 결제금액 </Text>
              <Text margin="8px 20px" bold size="20px"> 총금액원 </Text>
            </Grid>
          </Grid>

        </Grid>

        <Button height="70px"> 
          <Text color="#ffffff" bold> 결제하기 </Text> 
        </Button>
      </Grid>
    </React.Fragment>
  );
};

const SelectBox = styled.div`
  margin : "8px 20px"
`;

export default Cart;
