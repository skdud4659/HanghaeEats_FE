import React from 'react';
import Pagination from "react-js-pagination";
import '../Paging.css';

import {getStorePageDB} from '../redux/modules/store';
import {useDispatch} from 'react-redux';

const PaginationPage = () => {
  const [page, setPage] = React.useState(1)
  const handlePageChange = (page) => {
    setPage(page)
    dispatch(getStorePageDB(page-1))
  }

  const dispatch = useDispatch();

  //카테고리별 store 로드
  React.useEffect(() => {
    dispatch(getStorePageDB(page-1))
  },[])
  
  return (
    <React.Fragment>
      <Pagination
        //현재 페이지
        activePage={page}
        //한 페이지당 보여줄 리스트의 개수
        itemsCountPerPage={10}
        //총 아이템의 개수
        totalItemsCount={40}
        //Paginator 내에서 보여줄 페이지의 범위
        pageRangeDisplayed={4}
        //이 전을 나타내는 텍스트
        prevPageText={"‹"}
        //이 후를 나타내는 텍스트
        nextPageText={"›"}
        //함수
        onChange={handlePageChange} />
    </React.Fragment>
  );
}

export default PaginationPage;