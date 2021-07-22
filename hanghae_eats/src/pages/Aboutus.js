import React from 'react';
import {Grid, Text} from '../elements';
import styled from 'styled-components'

//이모지
import { BiPaperPlane } from "react-icons/bi";
import { GrBlog, GrGithub } from "react-icons/gr";
import { SiNotion } from "react-icons/si";

const Aboutus = (props) => {
  return (
    <React.Fragment>
        <P>고객지원</P>
        <Grid>
          {/* 소개 */}
          <Grid is_flex margin="3% 0px">
            <BiPaperPlane size="40px"/>
            <Grid padding="20px">
              <Text bold size="20px" margin="0px 0px 3px 0px">항해99</Text>
              <Text color={'gray'} size="16px">항해99 클론코딩 6조</Text>
              <Text color={'gray'} size="16px">크루들의 이름을 누르면 관련 블로그/노션/깃허브로 이동합니다.</Text>
            </Grid>
          </Grid>
          {/* 나영 */}
          <Grid is_flex margin="3% 0px">
            <GrBlog size="40px"/>
            <Grid padding="20px">
              <a href="https://velog.io/@skdud4659"><Text bold size="20px" margin="0px 0px 3px 0px">김나영</Text></a>
              <Text color={'gray'} size="16px">프론트엔드 · email:skdud4659@gmail.com</Text>
            </Grid>
          </Grid>
          {/* 다현 */}
          <Grid is_flex margin="3% 0px">
            <GrBlog size="40px"/>
            <Grid padding="20px">
              <a href="https://hihellohru.tistory.com/"><Text bold size="20px" margin="0px 0px 3px 0px">양다현</Text></a>
              <Text color={'gray'} size="16px">프론트엔드 · email:dahyunyang.0824@gmail.com</Text>
            </Grid>
          </Grid>
          {/* 정원 */}
          <Grid is_flex margin="3% 0px">
            <SiNotion size="40px"/>
            <Grid padding="20px">
              <a href="https://wirehaired-snapper-f57.notion.site/Garden-s-notion-b7b614e91e4a4a2886f440a954c12bc1">
                <Text bold size="20px" margin="0px 0px 3px 0px">이정원</Text>
              </a>
              <Text color={'gray'} size="16px">백엔드 · email:p_garden3@naver.com</Text>
            </Grid>
          </Grid>
          {/* 오빈 */}
          <Grid is_flex margin="3% 0px">
            <GrGithub size="40px"/>
            <Grid padding="20px">
              <a href="https://github.com/ohbin-kwon"><Text bold size="20px" margin="0px 0px 3px 0px">권오빈</Text></a>
              <Text color={'gray'} size="16px">백엔드 · email:kobbb2100@gmail.com</Text>
            </Grid>
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
export default Aboutus;