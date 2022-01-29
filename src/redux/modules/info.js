const initialState = {
  newlyNews: [],
  read: [],
};

const UPDATE_DAILY = "UPDATE_DAILY";

const loadNewlyNews = (daily) => {
  return { type: UPDATE_DAILY, daily };
};

export const getNewlyNews = () => async (dispatch, getState) => {
  try {
    const randomList = [];
    for (let i = 0; i < 10; i++) {
      const randomIdx = Math.floor(Math.random() * 501);
      randomList.push(getState().top.id[randomIdx]);
    }

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
      const newlyNews = [...action.daily];
      return { ...state, newlyNews };

    default:
      return state;
  }
}
