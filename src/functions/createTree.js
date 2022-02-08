const createTree = (list) => {
  const map = {};
  const roots = [];
  let node;

  const ids = list.map((item) => item.id);

  for (let i = 0; i < list.length; i += 1) {
    map[list[i].id] = i;
    list[i].children = [];
  }

  for (let i = 0; i < list.length; i += 1) {
    node = list[i];

    if (node.parent && ids.indexOf(node.parent) !== -1) {
      list[map[node.parent]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
};

export default createTree;
