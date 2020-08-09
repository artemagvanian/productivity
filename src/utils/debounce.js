export default (fn, threshold) => {
  var lastCalledToken;
  return (skipDebounce, ...args) => {
    return new Promise((resolve) => {
      if (!skipDebounce) {
        if (lastCalledToken !== undefined) {
          clearTimeout(lastCalledToken);
        }
        lastCalledToken = setTimeout(() => resolve(fn(...args)), threshold);
      } else {
        resolve(fn(...args));
      }
    });
  };
};
