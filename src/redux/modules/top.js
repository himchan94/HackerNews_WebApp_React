import { getNewlyNews } from "./info";

const initialState = {
  id: [],
  post: [],
  isLoading: false,
};

const LOADTOP_ID = "top/LOADTOP_ID";
const LOADTOP_POST = "top/LOADTOP_POST";
const LOADED = "top/LOADED";

const getId = (id) => {
  return { type: LOADTOP_ID, id };
};

const getPost = (post) => {
  return { type: LOADTOP_POST, post };
};

const loading = (status) => {
  return { type: LOADED, status };
};

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

  const exactPromises = promises.filter((list) => list !== null);

  const result = await Promise.all(exactPromises);
  dispatch(getPost(result));
  dispatch(loading(false));
};

export const getPostId = (type) => async (dispatch, getState) => {
  const postId = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json`
  ).then((res) => res.json());

  dispatch(getId(postId));
  dispatch(getNewlyNews());

  dispatch(loadPost());
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "top/LOADTOP_ID":
      const id = [...state.id, ...action.id];
      return { ...state, id };

    case "top/LOADTOP_POST":
      const post = [...state.post, ...action.post];

      return { ...state, post };

    case "top/LOADED":
      return { ...state, isLoading: action.status };

    default:
      return state;
  }
}
