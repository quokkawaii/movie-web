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

# 9/25

- 인기 영화 컨텐츠 만들기, 기준점은 별점순으로 했음.

- 해당 컨텐츠 detail => 이미지 클릭시 /movie/:details_id 로 이동은 동일

- 더보기칸을 만들어 기존 3칸을 보여주고 더보기 누를시 9개 보여주기. 더보기 다시 한번 누르면 줄어 들기까지 => 이걸 생각해 봐야함

- 일단 임시로 반복문의 n값을 useState()로 만들어 더보기 누를시 9, 기존 3으로 유지하여 화면에 보여주기.

- ⏷ 표시도 넣을건데 더보기 누르면 화살표 반대로 바꾸기 ! ⏶

# 10 / 01

- 오늘 영화 웹 만들기 마무리 하기

- 추천 영화 컴포넌트 생성 & details page 만들기

- 카테고리 페이지도 만들어야 될듯?

  1. 카테고리 칸 만들고

  2. 더보기로 해당 칸을 조정

  3. 카테고리의 아이템을 눌렀을 경우

  4. 해당 카테고리 페이지로 이동

  5. 해당 카테고리 페이지에는 거기에 속한 영화 포스터 + 제목 + 카테고리가 나오게 설정

- 오늘 배운거

## json에서 string[]를 가져왔는데 해당 데이터를 변수에 저장하는거

```typescript
type Genres = {
  genres: string[];
};

const category: string[] = [
  ...new Set(prop.data.flatMap((v) => v.genres)),
].sort();
```

- 해당 데이터는 prop에서 넘겨 받은 데이터로 string[]의 타입을 가지고 있었다.

- 그래서 string[] 타입으로 변수를 만들고 해당 값을 받으려고 했다.

- 그 결과 string[] 안에 string[]이 생겨 버려서string[][] 이 되버려 타입 에러가 발생했다.

- flat()를 사용해서 1차원 배열로 리턴을 받으려고 했지만 실패했다.

- flatMap()이란 메서드를 찾아 사용하니 정상적으로 되는것을 알았다.

- 그 다음 new Set으로 중복값을 지우려고 했는데, new Set의 리턴 타입이 일치하지 않아 실패했다.

- 찾아보니 리턴 타입은 {"str1", "str2"} 이런식이였다.

- 스프레드 연산자와 []를 사용하여 값을 정상적으로 초기화하여 변수에 초기화 하였다.

- 각각의 값을 생각해보자 (실수할거 같은 것들)

  1. set(["str1","str2"]) => {"str1", "str2"}

  2. [set(["str1","str2"])] => [{"str1", "str2"}]

  3. ...set(["str1","str2"]) => "str1", "str2" (에러 뜰듯)

## json에서 cast의 타입

```typescript
  cast = {
    name : "name1",
    ...
  }
```

- 나중에 다시 정리

## 특정 변수의 삼항연산자 사용으로 jsx 리턴

```typescript
const [view, setView] = useState<"jsx1" | "jsx2">("jsx1");

return <div>{view === "jsx1" ? "jsx1 view" : "jsx2 view"}</div>;
```

- event로 view의 값을 처리하면 해당 코드처럼 화면을 동적으로 조작 할 수 있다.

## as HomeMovies[]

```typescript
const [movie_datas, setMovie_datas] = useState<Home_movie[]>([]);

const movie_fetch = async () => {
  const response = await fetch(movie_API_URL);
  const json = await response.json();
  const movies = json.data.movies as Home_movie[];
  setMovie_datas(movies.filter((v) => v.genres.includes(category_title!)));
};
```

- 해당 코드를 만들때 filter를 사용하여 카테고리에 속한 값만 뽑으려고 만든 코드이다.

- 해당 코드를 만들때 json.data.movies.filter() 를 사용 했다니 매개변수로 들어가는 v값에서 오류가 났던거 같다.

- 컴파일 과정에서 타입 검사할때 감지를 못해서 일어난 에러라고 했던거 같다.

- 해당 에러는 as 문법을 사용해 타입을 명시해주어 해결을 했다.

- 일단 해결은 했지만 정확히 뭔지 몰라서 공부를 해봐야할거 같다.

## 이 값은 절대 undefined가 아니다 => v.genres.includes(category_title!)

- 해당 코드는 useParams()로 가져온 데이터인데 해당 값이 undefined일 수도 있다는 에러 문구가 나왔다.

- 컴파일러에게 null/undefined 검사 생략 지시를 한다

# 궁금한거

- 어떻게 하면 로딩을 없앨수 있을까 => 처음에 api 받은것을 유지 하는 방법,,

- 검색창에 @, : 와 같은 특수 문자들 들어가면 검색이 안되는 버그 발생..

## 추후 readme 파일 수정과 해당 데이터들 + 코드 한번 읽고 다시 정리 할 예정
