# 리엑트 라우터 + typescript로 영화 웹 만들기

# 9/19

- 리액트 라우터 install 하는 방법

- 리액트 라우터의 문법

- 미니 프로젝트의 폴더/파일 분활

# 9/19 메모장

## API

1. Movie API : "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"

2. detail movie api : `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_cast=true`

## (UI) main pages

1. 왼쪽 로고 + 이름, 오른쪽 검색

2. 포스터 이미지만 넣기, 클릭시 /movie:id 이동, 일정 시간 지나면 다음 포스터 이미지로

3. 인기 영화 포스터 + 제목 넣기 (기준은 rating으로, detail에 like_count가 있지만 그건 힘들다고 판단됨) + ( ⋮ ), ( ⏷ ) 둘 중하나로 더 디테일하게 만들기

4. 카테고리 + ( ⋮ ), ( ⏷ ) 둘 중하나로 더 디테일하게 만들기

5. 추천 영화 넣기 : 기준은 랜덤으로 포스트 + 제목

## (UI) /movie/:id

1. 맨 윗줄 가운데에 로고 + 이름 넣기

2. 포스터 + 영화 이름, 나온 날짜, 카테고리 + 주연, 러닝타임

3. 줄거리인데 summary 칸이 비어있는거보니 포기해야할듯

## API에서 뽑아야 하는 데이터 정리

main pages

1. 포스터 이미지 : small or large_cover_image

2. 인기 영화 : rating

3. 카테고리 : genres[]

4. 제목 : title

5. id : id

detils (:id를 입력했을때의 값)

1. 개봉일: detail-upload

2. 출연진 : cast[].name

3. runtime : runtime

## 파일 분활 관련

- 일단 미니 프로젝트이기도 하고 어떻게 나눠야 되는지 모르니 하고 싶은대로

- pages와 componunt를 나눈다.

- pages에는 필요한 componunt를 그릴 수 있게 api와 같은 정보를 fetch한다

- pages에 화면 처리를 위해 loading 변수를 정의
