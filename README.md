# 🧚🏻‍♀️항해99 클론코딩 6조 - 프론트(김나영, 양다현)
와이어프레임 : https://www.figma.com/file/eIIPVThreiwxiOAs88Vol1/HanghaeEats?node-id=0%3A1

# 🙌🏻member
## view
### 나영
- Main / Stores / StoreDetail / MyEats / Favorites / Order / Reviews / ReviewWrite / AllStores / AboutUs 
### 다현
- Login / Register / Cart / ReviewEdit
## function
### 나영
- Social Login(Kakao / Google) / Maintain is_login / GET stores / GET menus / Cart(save to Redux) / Order / Favorite / Copying to clipboard / MediaQuery(Mobile) / Search / Pagination
### 다현
- Login / Register / Review CRUD
# ✍🏻 프로젝트 소스
## elements
- Grid
- Button
- Image
- Input
- Text
- index.js(elements)

## components
### main page
- Search (검색창)
- Promotion (프로모션 캐러셀)
- Category (음식 카테고리 이미지 모음)
- MiniCategory (음식 카테고리 circle 이미지 모음)
### Stores page
- MiniCategory (음식 카테고리 circle 이미지 모음)
- StoresList (카테고리에 맞는 매장 리스트 > map)
### AllStores page
- Pagination (페이지네이션)
### StoreDetail page
- StoreDetailInfo (각 매장에 대한 것 - 공유, 즐겨찾기(찜), 이미지, 이름, 별점, 주문횟수) 
- ReviewList (리뷰 리스트)
- Menu (메뉴 리스트 > map + 장바구니 담기 버튼)
### Cart page
- CartMenuList (카트에 담기는 메뉴 리스트)
### Reviews page
- ReviewItem (리뷰 리스트)
- ReviewMenuItem (리뷰를 쓸 주문 내역의 메뉴 리스트)
### Order Page
- OrderList (주문 내역 리스트)
- OrderMenuList (주문 내역의 메뉴 리스트)
### Favorites page
- FavoriteList (즐겨찾기 리스트)

## shared
- App
- common
- Cookie
- Header
- Oauth2


