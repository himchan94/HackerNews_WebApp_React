# Hacker News WebApp

<p align="center" width="100%">
    <img width="30%" height="30%" src="https://user-images.githubusercontent.com/71649055/157503687-5c61a48d-5b4a-46d9-be7f-c04cf274373d.gif">
</p>


## About this project

해커뉴스 사이트(https://news.ycombinator.com/)를 사용자 친화적인 디자인으로 재창조한 Figma 디자인을 React로 구현한 프로젝트 

디자이너 : 이예솔, 김건웅, 박예림

### Tools
Design : Figma
Development: React, redux,redux-thunk, styled-components, react-router-dom

### Description
#### 1) structure
```bash
📦HackerNews_WebApp_React
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┣ 📂components
 ┃ ┣ 📂container
 ┃ ┣ 📂elements
 ┃ ┣ 📂functions
 ┃ ┣ 📂pages
 ┃ ┣ 📂redux
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.css
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┣ 📜package.json
```
#### 2) fetching data using redux-thunk

spendSection 컴포넌트
```js
export const loadPost = () => async (dispatch, getState) => {
  const { isLoading, id, post } = getState().top;
  if (isLoading) return;

  dispatch(loading(true));

  const ids = id;
  let idx = post.length;

  if (idx !== 0 && idx > ids.length) {
    dispatch(loading(false));
    return;
  }

  const promises = ids.slice(idx, idx + 9).map((id) => {
    if (id) {
      return fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      ).then((response) => response.json());
    }

    return null;
  });
```
redux-thunk 미들웨어를 사용하여, 데이터를 fetch 했으며, 동시에 distpatch를 사용하여 isLoading 이라는 boolean 값을 활용해 로딩스피너를 구현하여 UX 향상

#### 3) error handling

```js

  useEffect(() => {
   .
   .
   .

    return () => {
      controller.abort();
    };
  }, []);
```
컴포넌트 내의 useEffect hook에서, 컴포넌트가 마운트 되었을 때 데이터 fetching 이후 useState를 통해 상태 업데이틀 수행하는 로직이 있었다.
하지만, useEffect 내에서 비동기 로직이 실행되는 와중에 페이지를 이동하여 해당 컴포넌트를 unmount를 시킨다면 어떤 상황이 발생할 지 궁금했다.

결과적으로, 컴포넌트가 언마운트 되더라도 비동기 로직은 계속 실행되었고, 컴포넌트가 사라졌지만 useState를 통해 상태를 업데이트 하려고 해서 에러가 발생했다.

이를 해결하기 위해 AbortController web API를 사용했고, 비동기 실행로직 중 컴포넌트가 unmount 된다면 signal을 발생시켜 해당 비동기 작업을 중단시켰다.

## Getting Started

- depolyed site
  https://hacker-news-web-app-react-js8emjub9-himchan94.vercel.app/

## Roadmap

- v1.0.0(2022 Q1)
  - first version deployed

## Contributing

- If you have a good idea, leave pr to this project
- Report me bug

## License

- MIT License
