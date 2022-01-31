const initialState = {
  id: [],
  post: [],
  isLoading: false,
};

const LOADNEW_ID = "news/LOADNEW_ID";
const LOADNEW_POST = "news/LOADNEW_POST";
const LOADED = "news/LOADED";

const getId = (id) => {
  return { type: LOADNEW_ID, id };
};

const getPost = (post) => {
  return { type: LOADNEW_POST, post };
};

const loading = (status) => {
  return { type: LOADED, status };
};

export const loadPost = () => async (dispatch, getState) => {
  if (getState().news.isLoading) return;

  dispatch(loading(true));

  const ids = getState().news.id;
  const idx = getState().news.post.length;

  if (idx !== 0 && idx >= ids.length) {
    dispatch(loading(false));
    return;
  }

  const promises = ids
    .slice(idx, idx + 10)
    .map((id) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
        (response) => response.json()
      )
    );

  const result = await Promise.all(promises);
  dispatch(getPost(result));
  dispatch(loading(false));
};

export const getPostId = () => async (dispatch) => {
  const postId = await fetch(
    `https://hacker-news.firebaseio.com/v0/newstories.json`
  ).then((res) => res.json());

  dispatch(getId(postId));
  dispatch(loadPost());
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "news/LOADNEW_ID":
      const id = [...state.id, ...action.id];
      return { ...state, id };

    case "news/LOADNEW_POST":
      const post = [...state.post, ...action.post];

      return { ...state, post };

    case "news/LOADED":
      return { ...state, isLoading: action.status };

    default:
      return state;
  }
}
