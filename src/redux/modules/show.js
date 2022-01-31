const initialState = {
  id: [],
  post: [],
  isLoading: false,
};

const LOADASK_ID = "show/LOADNEW_ID";
const LOADASK_POST = "show/LOADNEW_POST";
const LOADED = "show/LOADED";

const getId = (id) => {
  return { type: LOADASK_ID, id };
};

const getPost = (post) => {
  return { type: LOADASK_POST, post };
};

const loading = (status) => {
  return { type: LOADED, status };
};

export const loadPost = () => async (dispatch, getState) => {
  if (getState().show.isLoading) return;

  dispatch(loading(true));

  const ids = getState().show.id;
  const idx = getState().show.post.length;

  if (idx !== 0 && idx >= ids.length) {
    dispatch(loading(false));
    return;
  }

  const promises = ids
    .slice(idx, idx + 9)
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
    `https://hacker-news.firebaseio.com/v0/showstories.json`
  ).then((res) => res.json());

  dispatch(getId(postId));
  dispatch(loadPost());
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "show/LOADNEW_ID":
      const id = [...state.id, ...action.id];
      return { ...state, id };

    case "show/LOADNEW_POST":
      const post = [...state.post, ...action.post];

      return { ...state, post };

    case "show/LOADED":
      return { ...state, isLoading: action.status };

    default:
      return state;
  }
}
