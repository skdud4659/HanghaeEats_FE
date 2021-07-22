import React from 'react';
import { Button, Grid, Input } from '../elements';
import styled from 'styled-components';

//검색 icon
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//검색 기능
import {useDispatch} from 'react-redux';
import {searchStoreDB} from '../redux/modules/store';

const Search = (props) => {
  const dispatch = useDispatch()
  const [word, setWord] = React.useState()
  //인풋박스
  const input_word = (e) => {
    setWord(e.target.value)
  }
  //검색하기버튼
  const searchBtn = () => {
    if(word === "") {
      window.alert('검색어를 입력해주세요 WWW');
      return
    }
    dispatch(searchStoreDB(word))
    setWord('');
  }

  return (
    <Grid>
      {/* 레이아웃 */}
      <Grid is_flex>
        {/* 검색창 */}
        <Grid>
          {/* 입력인풋 */}
          <Input
            _onChange={input_word}
            onSubmit={searchBtn}
            value={word}
            is_submit
            placeholder="검색어를 입력하세요."
            width="100%"
            height="100px"
            border_radius="20px"
            bg={'#e0e2e1'}
            border="none"
            />
        </Grid>
        {/* 검색하기 버튼 */}
        <Grid width="10%" m_width="10%">
          <Button bg="white" _onClick={searchBtn}>
            <FontAwesomeIcon icon={faSearch} size="2x"/>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}


export default Search;