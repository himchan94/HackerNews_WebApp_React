const initialState = {
  post: [],
  read: [],
};

const UPDATE_DAILY = "UPDATE_DAILY";

const loadNewlyNews = (daily) => {
  return { type: UPDATE_DAILY, daily };
};

export const getNewlyNews = () => async (dispatch, getState) => {
  try {
    const randomList = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    const promises = randomList.map((id) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
        (response) => response.json()
      )
    );

    const result = await Promise.all(promises);
    const promises2 = result.map((post) =>
      fetch(`https://hacker-news.firebaseio.com/v0/user/${post.by}.json`)
        .then((response) => response.json())
        .then((res) => ({ ...post, karma: res.karma }))
    );

    const adResult = await Promise.all(promises2);

    dispatch(loadNewlyNews(adResult));
  } catch (error) {
    throw error;
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "UPDATE_DAILY":
      const post = [...action.daily];
      return { ...state, post };

    default:
      return state;
  }
}
