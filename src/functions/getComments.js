const getComments = (id) => {
  let count = 0;

  let futureValue = new Promise((resolveAll, rejectAll) => {
    let comments = [];
    let call = (id) => {
      count++;
      new Promise((resolve, reject) => {
        let url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
        let comment = {};
        fetch(url)
          .then((response) => response.json())
          .then((cmt) => {
            comment = cmt;
            comments.push(comment);

            if (comment.kids) {
              comment.kids.forEach((id) => call(id));
            }

            // resolve();
            count--;
            if (count < 1) {
              resolveAll(comments);
            }
          });
      });
    };

    call(id);
  });
  return futureValue;
};

export default getComments;
