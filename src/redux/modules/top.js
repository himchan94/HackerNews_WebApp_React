import { getNewlyNews } from "./info";

const initialState = {
  id: [],
  post: [],
  isLoading: false,
};

const LOADTOP = "post/LOADTOP";
const LOADED = "post/LOADED";

const loadTop = (top) => {
  return { type: LOADTOP, top };
};

const loading = (status) => {
  return { type: LOADED, status };
};

export const getPost = (type) => async (dispatch, getState) => {
  dispatch(loading(true));
  const postId = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json`
  ).then((res) => res.json());

  dispatch(loadTop(postId));

  dispatch(getNewlyNews());

  dispatch(loading(false));
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "post/LOADTOP":
      const id = [...state.id, ...action.top];
      return { ...state, id };

    case "post/LOADED":
      return { ...state, isLoading: action.status };

    default:
      return state;
  }
}
