export default (count, titles = ['', '', ''], getCountText = true) => {
  const getDeclination = (val) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(val % 100 > 4 && val % 100 < 20) ? 2 : cases[(val % 10 < 5) ? val % 10 : 5]];
  };

  return `${getCountText ? `${count}\u00A0` : ''}${getDeclination(count)}`;
};
