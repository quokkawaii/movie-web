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

<hr/>

# 9/20 메모장

- 영화 검색 테스트 제목 : KPop Demon Hunters

- pages > Home (welcome page) 만드는중

- Home > Header 제작 중 배운것들

- form 태그에 button, input 넣으면 button이 submit이라 button이 적용되는건 알았는데 Enter를 눌러도 submit이 작동된다.

- form 태그를 사용해 해당 포스터의 id값을 뽑아내는데 성공했다. search에 text + enter or search click시 해당 영화의 제목이 있다면 Details?id={id}로 이동하는데 성공, useNavigate를 처음 사용해봤는데 유용한것 같다.

- link to ? 이거였나 여튼 이걸로 Quokka Movie 클릭시 메인 페이지로 오게 해야하는거 잊지 말기

- 영화 검색 기능 대소문자 상관없이 + 띄어쓰기 상관없이 검색되게 만들기

- API 키 숨기기 : .env 파일로 숨긴뒤 import.meta.env.VITE\_변수명;

  1. 변수명은 VITE\_변수명 이런식으로 지어야되고
  2. ;같은거 붙이면 안됨
  3. 대문자로만 만들기
  4. 파일은 src안이 아닌 src와 같은 디렉토리에
  5. .env 파일의 이름은 .env 그대로 지어야함

- 폰트 어썸 사용하는 방법

- https://mydeveldiary.tistory.com/entry/font-awsome 참고 문서

# 9/24 메모장

- Home > HomeMain > link to

- link to는 리액트 라우터로 정의한 url로 이동할 수 있는 기능, 즉 리액트 라이브러리를 설치해야 사용 가능

- 동적 라우터 사용하는 방법 정리 + 라우터 사용 방법 정리 + 실수 했던것

- 일단 내가 아는 동적 라우터 방법 두 가지

  1. Link to="라우터에 정의된 url"

  - 닫는 태그를 안썼음. img나 input처럼 안써도 되는줄 알았음
    => 당연하지만 써야 된다

  - react-router-dom 에서 import 해야된다.

  2. useNavigate()

  - 마찬가지로 react-router-dom에서 import 해야된다.

  - const navi = useNavigate()와 같이 정의해야한다.

  - navi("라우터에 정의된 url")로 화면 전환이 가능하다.

- Router 사용 방법 (내용 미흡으로 추후 수정 예정)

1. Router v6 npm 다운로드

```sh
  npm install react-router-dom@6
```

2. import

```typeScript
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
```

3. 예시

```typescript
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<Details />} />
  </Routes>
</Router>
```

## tips

- useParams()

1. useParams()으로 :id와 같은 값에 쉽게 접근 가능하다.

2. const { id } = useParams();과 같이 사용 가능하다.

3. 위의 방법을 사용하지 않을시 => const params = useParams(); 이런식으로 쓰고 안에서 값을 꺼내야한다.

## setInterval()에 대해 정리

- 해당 함수는 특정ms 마다 매개변수의 콜백함수를 실행한다.

- 형식

```typescript
  const interval = setInterval(callback function, Your ms);
```

- clearInterval(interval), 해당 함수에 setInterval()의 ID를 넣으면 종료된다.

- 호출이 되었으면 반드시 삭제를 해줘야 됨!, 이거 떄문에 좀 쓰기 어려운거 같다.

- 예시 코드

```typescript
useEffect(() => {
  if (movie_datas.length === 0) return;

  console.log(movie_datas[count].id);

  const countId = setInterval(() => {
    setCount((prev) => (prev + 1) % movie_datas.length);
  }, 3000);

  return () => clearInterval(countId);
}, [movie_datas, count]);
```
