const getSite = (url) => {
  return url.replace(/.+\/\/|www.|\..+/g, "");
};

export default getSite;
