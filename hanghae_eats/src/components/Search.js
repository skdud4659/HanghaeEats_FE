import React from 'react';
import { Button, Grid, Input } from '../elements';

//검색 icon
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = (props) => {
  return (
    <React.Fragment>
      {/* 레이아웃 */}
      <Grid is_flex width="50%" margin="2% auto">
        {/* 검색창 */}
        <Grid width="90%">
          {/* 입력인풋 */}
          <Input
            placeholder="검색어를 입력하세요."
            width="100%"
            height="100px"
            border_radius="20px"
            bg={'#e0e2e1'}
            border="none"/>
        </Grid>
        {/* 검색하기 버튼 */}
        <Grid width="10%">
          <Button bg="white">
            <FontAwesomeIcon icon={faSearch} size="2x"/>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Search;